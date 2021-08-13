import React from 'react'
import * as AiIcons from 'react-icons/ai';

export const LandingPage = () => {
    return (
        <> 
        <header className="showcase">
        <title>Time Tracker</title>
            <div className="content">
            <AiIcons.AiOutlineClockCircle size={100}/>
                <div className="title">
                    Welcome to use Time Tracker
                </div>
                <div className="text">
                With Time Tracker you can elegantly control your projects.
                </div>
            </div>
        </header>

        <section className="services">
            <div className="container grid-3 center">
                <div>
                <AiIcons.AiFillHome size={32}/>
                <h3>Home</h3>
                <p>This is the home page.</p>
                </div>
                <div>
                <AiIcons.AiFillRightCircle size={32}/>
                <h3>Sign Up</h3>
                <p>Sign up by using the navbar. If you do have an account, you can just log in.</p>
                </div>
                <div>
                <AiIcons.AiFillInfoCircle size={32}/>
                <h3>Info</h3>
                <p>Check out more information on the info page.</p>
                </div>
            </div>
        </section>
        
        <section className="about bg-light">
            <div className="container">
                <div className="grid-2">
                    <div className="center">
                    <AiIcons.AiOutlineClockCircle size={100}/>
                    </div>
                    <div>
                        <h3>About Us</h3>
                        <p>With Time Tracker you can elegantly control how much time you spend with your projects. You need to just sign up and try to add some
                           new projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <footer className="center bg-dark">
            <p>Time Tracker &copy; 2021</p>
        </footer>


        </>
    )
}
