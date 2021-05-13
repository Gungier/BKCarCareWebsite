import React from 'react';
import "./style.css";
import { Button } from '../Button';

function Services() {
    return (
        <div className='service-container'>
            <h1>SERVICES</h1>
            <h5>Oil Change</h5>
            <div className="service-btns">
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                ></Button>
            <h5>Tire Rotation</h5>
            <div className="service-btns">
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                ></Button>
                </div>
                </div>
              
        </div>
    )
};

export default Services;
