import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import TimeSet from './TimeSet';

const Appointment = () => {
    const [date,setdate]=useState(new Date())
    return (
        <div>
            <div style={{
            background:`url(${bg})`,
            backgroundSize:'cover'
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content lg:flex justify-center">
                <div className='w-50 block'>
                <DayPicker
                 mode="single"
                 selected={date}
                 onSelect={setdate}
                ></DayPicker>
                
                </div>
                    <div>
                    <img src={chair} className="md:max-w-lg rounded-lg shadow-2xl" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <TimeSet date={date} setdate={setdate}></TimeSet>
        </div>
    );
};

export default Appointment;