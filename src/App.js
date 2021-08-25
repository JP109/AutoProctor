import './App.css';
import React, { useState, useEffect, useContext, useRef } from 'react';
import Webcam from 'react-webcam';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd"
import { drawRect } from "./utilities";


function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [missingCounter, setMissingCounter] = useState(1);
  const [phoneCounter, setPhoneCounter] = useState(1);
  const [bookCounter, setBookCounter] = useState(1);
  const [multipleCounter, setMultipleCounter] = useState(1);

  const notify = () => {
    toast.error('WARNING: Phone detected!');
    toast.clearWaitingQueue();
  }
  const notifyBook = () => {
    toast.error('WARNING: Book detected!');
    toast.clearWaitingQueue();
  }
  const notifyStudent = () => {
    setMissingCounter(missingCounter+1);
    toast.error(<div>WARNING NO. {missingCounter}: Student missing!</div>);
    toast.clearWaitingQueue();
  }
  const notifyMultipleStudents = () => {
    toast.error('WARNING: Multiple people visible!');
    toast.clearWaitingQueue();
  }

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    const net = await cocossd.load();
    
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  let obj

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      obj = await net.detect(video);
      if(obj && obj.length>0){

        if (obj.filter(e => e.class === 'cell phone').length > 0) {
          notify();
        }
        if (obj.filter(e => e.class === 'book').length > 0) {
          notifyBook();
        }
        if (obj.filter(e => e.class === 'person').length > 1) {
          notifyMultipleStudents();
        }
      }
      else{
        notifyStudent();
      }
      
      console.log("Model output:",obj);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      drawRect(obj, ctx)  
    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="App">
      <header className="App-header">
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        />
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
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
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
