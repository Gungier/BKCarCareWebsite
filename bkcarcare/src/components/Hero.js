import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <h1>SERVICE YOU CAN RELY ON</h1>
            <div className="hero-btns">
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    LIST OF SERVICES
                </Button>
                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('Hey')}
                >
                    PHOTO GALLERY <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Hero
