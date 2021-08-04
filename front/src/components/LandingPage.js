import React from 'react'
import * as AiIcons from 'react-icons/ai';
import '../Landing.css';

export const LandingPage = () => {
    return (
        <> 
        <header className="showcase">
        <title>Time Tracker</title>
            <div className="content">
                <imc src="logo.png" className="logo" alt="Time Tracker" />
                <div className="title">
                    Welcome to use Time Tracker
                </div>
                <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit eu odio eu vestibulum.
                </div>
            </div>
        </header>

        <section className="services">
            <div className="container grid-3 center">
                <div>
                <AiIcons.AiFillHome size={32}/>
                <h3>Home</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                <AiIcons.AiFillRightCircle size={32}/>
                <h3>Sign Up</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                <AiIcons.AiFillInfoCircle size={32}/>
                <h3>Info</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit eu odio eu vestibulum. Pellentesque auctor risus efficitur metus gravida egestas. 
                           Aliquam lacinia feugiat dolor, a bibendum eros. Quisque maximus turpis a erat tempor tempor.</p>
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
