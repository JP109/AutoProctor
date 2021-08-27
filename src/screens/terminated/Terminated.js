import React from 'react'

const Terminated = (props) => {
    return (
        <div className='container-fluid m-auto p-auto'>
            <h1>Your test has been terminated, as we detected malpractise.</h1>
            <button onClick={()=>props.history.push('/')}>Back to home screen</button>
        </div>
    )
}

export default Terminated
