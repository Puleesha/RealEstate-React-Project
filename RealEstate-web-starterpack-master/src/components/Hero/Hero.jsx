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
                            Most Suitable <br/>Property
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span>
                            Find a variety of properties that suit your preferences
                        </span>
                        <span>
                            Overcome all difficulties in finding your dream residency
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