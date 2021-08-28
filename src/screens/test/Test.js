import React from 'react'
import Detector from '../../Components/ObjectDetector/Detector'

const Test = (props) => {
    return (
        <>
            <div className='container-fluid m-0 p-0'>
                <div className='row m-0 p-0'>
                    <div className='col-12 m-0 p-0'>
                        <Detector propsData={props.history}/>
                        <div className='d-flex justify-content-center align-items-center'>
                            <iframe style={{zIndex:14}} src="https://docs.google.com/forms/d/e/1FAIpQLSfStnzmAl7QIEKzsk0WM0dnud0wzALMdeh1bLbd--8JLvAc5A/viewform?embedded=true" width="640" height="1325" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </div>
                </div>
                {/* <Detector/> */}
            </div>
        </>
    )
}

export default Test
