import React from 'react';
import CardMiniInfo from './CardMiniInfo';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const cardMini = () => {
    return (
       <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white'>
            <CardMiniInfo title='Opening Hours' text='text' bg="bg-gradient-to-r from-secondary to-primary" pic={clock}></CardMiniInfo>
            <CardMiniInfo title='Our location' text='text' bg="bg-accent" pic={marker}></CardMiniInfo>
            <CardMiniInfo title='Contact us now' text='text' bg="bg-gradient-to-r from-secondary to-primary" pic={phone}></CardMiniInfo>
        </div>
       </div>
    );
};

export default cardMini;