import './detector.css'
import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd"
import { drawRect } from "../utilities";

let cachedModel = null;

const COOLDOWN_MS = 2000;
const VIOLATION_THRESHOLD = 3;

const logViolation = (type) => {
    const violations = JSON.parse(localStorage.getItem('autoproctor_violations') || '[]');
    violations.push({ type, timestamp: new Date().toISOString() });
    localStorage.setItem('autoproctor_violations', JSON.stringify(violations));
};

const Detector = (props) => {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const lastViolationTime = useRef({ phone: 0, book: 0, missing: 0, multiple: 0 });

    const [missingCounter, setMissingCounter] = useState(0);
    const [phoneCounter, setPhoneCounter] = useState(0);
    const [bookCounter, setBookCounter] = useState(0);
    const [multipleCounter, setMultipleCounter] = useState(0);
    const [cameraError, setCameraError] = useState(false);

    const notify = () => {
        toast.error(<div>WARNING: Phone detected!</div>, {
            onOpen: () => setPhoneCounter(phoneCounter => phoneCounter + 1)
        });
        toast.clearWaitingQueue();
    }

    const notifyBook = () => {
        toast.error(<div>WARNING: Book detected!</div>, {
            onOpen: () => setBookCounter(bookCounter => bookCounter + 1)
        });
        toast.clearWaitingQueue();
    }

    const notifyStudent = () => {
        toast.error(<div>WARNING: Student missing!</div>, {
            onOpen: () => setMissingCounter(missingCounter => missingCounter + 1)
        });
        toast.clearWaitingQueue();
    }

    const notifyMultipleStudents = () => {
        toast.error(<div>WARNING: Multiple persons detected!</div>, {
            onOpen: () => setMultipleCounter(multipleCounter => multipleCounter + 1)
        });
        toast.clearWaitingQueue();
    }

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const obj = await net.detect(video);
            const now = Date.now();

            if (obj && obj.length > 0) {
                if (obj.filter(e => e.class === 'cell phone').length > 0) {
                    if (now - lastViolationTime.current.phone > COOLDOWN_MS) {
                        lastViolationTime.current.phone = now;
                        logViolation('phone');
                        notify();
                    }
                }
                if (obj.filter(e => e.class === 'book').length > 0) {
                    if (now - lastViolationTime.current.book > COOLDOWN_MS) {
                        lastViolationTime.current.book = now;
                        logViolation('book');
                        notifyBook();
                    }
                }
                if (obj.filter(e => e.class === 'person').length > 1) {
                    if (now - lastViolationTime.current.multiple > COOLDOWN_MS) {
                        lastViolationTime.current.multiple = now;
                        logViolation('multiple');
                        notifyMultipleStudents();
                    }
                }
            } else {
                if (now - lastViolationTime.current.missing > COOLDOWN_MS) {
                    lastViolationTime.current.missing = now;
                    logViolation('missing');
                    notifyStudent();
                }
            }

            const ctx = canvasRef.current.getContext("2d");
            drawRect(obj, ctx);
        }
    };

    useEffect(() => {
        let intervalId;
        const startDetection = async () => {
            if (!cachedModel) {
                cachedModel = await cocossd.load();
            }
            intervalId = setInterval(() => detect(cachedModel), 10);
        };
        startDetection();
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (phoneCounter >= VIOLATION_THRESHOLD || missingCounter >= VIOLATION_THRESHOLD || bookCounter >= VIOLATION_THRESHOLD || multipleCounter >= VIOLATION_THRESHOLD) {
            props.history.push('/terminated');
        }
    }, [phoneCounter, missingCounter, bookCounter, multipleCounter]);

    if (cameraError) {
        return (
            <div className="Detect">
                <header className="App-header">
                    <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                        <h3>Camera access denied</h3>
                        <p>Please allow webcam access to take the proctored exam.</p>
                    </div>
                </header>
            </div>
        );
    }

    return (
        <div className="Detect">
            <header className="App-header">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    limit={1}
                />
                <Webcam
                    ref={webcamRef}
                    muted={true}
                    onUserMediaError={() => setCameraError(true)}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        width: '100vw',
                        height: '100vh',
                        opacity: 0,
                        zIndex: -1,
                    }}
                />
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 8,
                        width: '100vw',
                        height: '100vh',
                    }}
                />
            </header>
        </div>
    )
}

export default Detector
