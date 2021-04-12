import React from 'react';
import '../App.css';
import images from './images';
import { Button } from './Button';
import './BnK.css';

function BnK() {
    return (
        <div className='bnk-container'>
            <image src='./images/orangeLamboHoodUp.jpg' /> 
            <h1>SERVICE YOU CAN RELY ON</h1>
            <div className="bNk-btns">
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Foo-Bar <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default BnK