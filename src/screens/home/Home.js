import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'

const Home = () => {
    return (
        <>
            <main className="main container-fluid px-0">
                <section className='home'>
                    <div className='row intro m-0 p-0'>
                        <div className='col-12 px-auto intro-content mt-4'>
                            <h1 className='home_intro_4 d-flex justify-content-center'>Online proctoring made easy</h1>
                            <h3 className="home_intro_1 d-flex justify-content-center">Are you a...</h3>
                            <div className='row m-0 p-0'>
                                <div className='col-6 m-0 p-0 d-flex justify-content-center'>
                                    <h3>Student?</h3>
                                    <button>Attempt test</button>
                                </div>
                                <div className='col-6 m-0 p-0 d-flex justify-content-center'>
                                    <h3>Teacher?</h3>
                                    <button>Schedule test</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
