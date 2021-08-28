import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css'
import Navbar from '../../Components/Navbar/Navbar';
import Button from '../../Components/Button/Button'

import parkingPointLogo from '../../assets/images/auxilium-logo-1.png';

import hand from '../../assets/images/hand.png';
import boyOnRocket from '../../assets/images/boy-on-rocket.png';
import iconSearchFilled from '../../assets/images/login-box';
import iconParkingFilled from '../../assets/images/support';
import yellowDottedPattern from '../../assets/images/yellow-dotted-pattern.svg';
import iconMapPinAddFilled from '../../assets/images/notification';

import billyCoin from '../../assets/images/billy_coin.png';
import billySafe from '../../assets/images/billy_safe.png';
import billySearch from '../../assets/images/billy_search.png';
import billySecure from '../../assets/images/billy_secure.png';

import iconDiscord from '../../assets/images/icon_discord.png';
import iconGithub from '../../assets/images/icon_github.png';
import iconTwitter from '../../assets/images/icon_twitter.png';
import iconLinkedin from '../../assets/images/icon_linkedin.png';
import iconInstagram from '../../assets/images/icon_instagram.png';

import iconTwitterBlack from '../../assets/images/icon_twitter_black.png';
import iconGithubBlack from '../../assets/images/icon_github_black.png';
import iconDiscordBlack from '../../assets/images/icon_discord_black.png';
import iconLinkedinBlack from '../../assets/images/icon_linkedin_black.png';
import iconInstagramBlack from '../../assets/images/icon_instagram_black.png';

const Home = (props) => {
    return (
        <>
            <div className='LandingPage'>
                <main className='main-container'>
                    <Navbar />
                    <div className='main-a'>
                    <h1>
                        Schedule Examinations <br />
                        <span>Without any human intervention!</span>
                    </h1>
                    <p>
                        Make optimal use of{' '}
                        <span> the digital revolution & make examinations easy </span> for
                        you in middle of this pandemic.
                    </p>
                    {/* <p onClick={()=>props.history.push('/test')}>
                        Student?    Teacher?
                    </p> */}
                    <div className='main-a-btns'>
                        <Button
                        buttonType='pri-btn'
                        handleClick={() => {
                            // props.history.push('/signup');
                            props.history.push('/test');
                        }}
                        >
                        {/* Signup */}
                        Attempt test
                        </Button>
                        {/* <button onClick={()=>props.history.push('/test')}>Attempt test</button> */}
                        <Button
                        buttonType='sec-btn'
                        handleClick={() => {
                            // props.history.push('/login');
                        }}
                        >
                        {/* Login */}
                        Schedule test
                        </Button>
                    </div>
                    </div>
                    <div className='main-b'>
                    <div>
                        {/* <p>Trusted By</p>
                        <h2>50000+</h2>
                        <p>Registered Teachers</p> */}
                        <p>Detects</p>
                        <h2>Student, phones & books</h2>
                        <p>via your webcam</p>
                    </div>
                    {/* <div>
                        <p>Universities From</p>
                        <h2>50+</h2>
                        <p>Countries</p>
                    </div> */}
                    <div>
                        <p>Fires a warning</p>
                        <h2>For no student, mobile phone or book</h2>
                        <p>detected via webcam</p>
                    </div>
                    {/* <div>
                        <p>Partnered With Over</p>
                        <h2>100+</h2>
                        <p>Firms & Services</p>
                    </div> */}
                    <div>
                        <p>Automatically terminates</p>
                        <h2>The test window</h2>
                        <p>If any warning stacks upto 3 times</p>
                    </div>
                    {/* <div>
                        <p>We have taken</p>
                        <h2>25000+</h2>
                        <p>Tests Around The Globe</p>
                    </div> */}
                    </div>
                </main>
                <section className='working'>
                    <img className='floats' src={hand} />
                    <img className='floats' src={boyOnRocket} />
                    <h1>How it Works</h1>
                    <div id='timeline'>
                    <div className='timeline-item'>
                        <div className='timeline-icon'>
                        <img src={iconSearchFilled} />
                        </div>
                        <div className='timeline-content'>
                        Create an Admin Account & Schedule a Test!
                        </div>
                    </div>

                    <div className='timeline-item'>
                        <div className='timeline-icon'>
                        <img src={iconMapPinAddFilled} />
                        </div>
                        <div className='timeline-content right'>
                        Share the test link with your students!
                        </div>
                    </div>

                    <div className='timeline-item'>
                        <div className='timeline-icon'>
                        <img src={iconParkingFilled} />
                        </div>
                        <div className='timeline-content'>
                        Students take an auto-proctored test on the scheduled time,
                        without any hassle for teachers & students alike!
                        </div>
                    </div>
                    </div>
                </section>
                <section className='features'>
                    <img className='floats' src={yellowDottedPattern} />
                    <img className='floats' src={yellowDottedPattern} />
                    <img className='floats' src={yellowDottedPattern} />
                    <h1>Why Auto-Proctor?</h1>
                    <h1>Why Auto-Proctor?</h1>
                    <div className='features-list'>
                    <div className='feature'>
                        <img src={billySearch} />
                        <h2>Automatic Monitoring</h2>
                        <p>
                        <br /> Get perfectly proctored examinations even without a
                        supervisor.
                        </p>
                    </div>
                    <div className='feature'>
                        <img src={billySecure} />
                        <h2>Safe and Secure</h2>
                        <p>
                        No worries of data leak, or risk of attacks or any chance of
                        malpractice.
                        </p>
                    </div>
                    <div className='feature'>
                        <img src={billyCoin} />
                        <h2>Reasonable Pricing</h2>
                        <p>
                        Free tier access for 1 month to schedule as many tests as
                        required,
                        <br />
                        Charges applicable only after exhaustion of free tier access.
                        </p>
                    </div>
                    <div className='feature'>
                        <img src={billySafe} />
                        <h2>Hassle-Free</h2>
                        <p>
                        Simple & Minamalistic UI makes it easy
                        <br /> to use for all age groups, & any level of experience in
                        teaching!
                        </p>
                    </div>
                    </div>
                </section>
                <footer>
                    <nav>

                    <div
                        className='BrandLogo'
                        onClick={() => {
                            props.history.push('/');
                        }}
                        >
                        <img src={parkingPointLogo} alt='brand logo' />
                        <h2>
                            <span>Auto</span>-Proctor
                        </h2>
                    </div>
                    <ul>
                        <li>
                        <NavLink to='/' activeClassName='active' exact>
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/login' activeClassName='active' exact>
                            Login
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to='/signup' activeClassName='active' exact>
                            Signup
                        </NavLink>
                        </li>
                    </ul>
                    {/* <Link className='playstore-badge' to='/playstore'>
                        <img src={googlePlayBadge} />
                    </Link> */}
                    </nav>
                    <div className='footer-content'>
                    <div className='footer-info'>
                        <h2>About Project</h2>
                        <p>
                        In the age of digitization and automation, most services and
                        processes are going remote, either due to restrictions or to reap
                        the benefits. Traditional test taking is not an exception to this,
                        and especially in pandemics like these, remote test taking becomes
                        invaluable. But, without the constant vigilance of proctors, some
                        students tend to get lax and constantly try to subvert the system,
                        while teachers who can’t focus on hundreds of students via a
                        screen seem to be at a loss. This is where our Auto-Proctor ML
                        proctoring website comes in.
                        {/* <a href=''> this Github Repo</a>. */}
                        </p>
                    </div>
                    <div className='contact'>
                        <h2>Contact Us</h2>
                        <p>
                        If you have any queries, mail us at
                        <a href='#'> contact@teamautoproctor.com</a> or you can connect
                        with us on below platforms.
                        </p>
                        <div className='contact-links'>
                        <a href=''>
                            <img src={iconGithubBlack} />
                            <img src={iconGithub} />
                        </a>
                        {/* <a href='#'>
                            <img src={iconLinkedinBlack} />
                            <img src={iconLinkedin} />
                        </a> */}
                        <a href='#'>
                            <img src={iconTwitterBlack} />
                            <img src={iconTwitter} />
                        </a>
                        <a href='#'>
                            <img src={iconInstagramBlack} />
                            <img src={iconInstagram} />
                        </a>
                        <a href='#'>
                            <img src={iconDiscordBlack} />
                            <img src={iconDiscord} />
                        </a>
                        </div>
                    </div>
                    </div>
                    <p>
                    Developed with ❤️ by <span>Team Auto-Proctor</span>.
                    </p>
                </footer>
                </div>





        </>
    )
}

export default Home
