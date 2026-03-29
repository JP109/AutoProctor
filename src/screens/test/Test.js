import React, { useRef, useEffect } from 'react'
import Detector from '../../Components/ObjectDetector/Detector'
import './test.css'

const DEFAULT_FORM_ID = '1FAIpQLSfStnzmAl7QIEKzsk0WM0dnud0wzALMdeh1bLbd--8JLvAc5A';

const Test = (props) => {

    const fullscreenRef = useRef(null);

    function openFullscreen() {
        const el = fullscreenRef.current;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    }

    useEffect(() => {
        openFullscreen();

        function onFullScreenChange() {
            const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
            if (!fullscreenElement) {
                props.history.push('/terminated');
            }
        }

        document.addEventListener("fullscreenchange", onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange);
        document.addEventListener("mozfullscreenchange", onFullScreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", onFullScreenChange);
            document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
            document.removeEventListener("mozfullscreenchange", onFullScreenChange);
        };
    }, []);

    const formId = props.match?.params?.formId || DEFAULT_FORM_ID;
    const formUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`;

    return (
        <>
            <div ref={fullscreenRef} className='container-fluid m-0 p-0 test_container'>
                <div className='row m-0 p-0'>
                    <div className='col-12 m-0 p-0'>
                        <Detector history={props.history} />
                        <div className='d-flex justify-content-center align-items-center'>
                            <iframe
                                style={{ zIndex: 14 }}
                                src={formUrl}
                                width="640"
                                height="1325"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test
