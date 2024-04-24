import React from 'react';
import "./Hero.css";
import {HiLocaitionMarker} from 'react-icons/hi';

const Hero = () => {
    return(
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                {/* Left side */}
                <div className='flexColStart hero-left'>
                    <div className='hero-title'>
                        <div className="orange-circle"/>
                        <h1>
                            Discover <br/>
                            Your Most Suitable <br/>Property
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span>
                            Find a wide variety of properties that suit your personal preferences
                        </span>
                        <span>
                            Simplify the process of discovering your dream residency
                        </span>
                    </div>

                    <div className="search-bar">
                        <HiLocaitionMarker color="var(--blue)" size={25}/>
                    </div>
                </div>
                {/* Right side*/}
                <div className='flexCenter hero-right'>
                    <div className='image-container'>
                        <img src='./hero-image.png' alt='hero image'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero