import React from 'react';
import Services from './Services';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
const Service = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-lg text-primary font-bold'>OUR SERVICES</p>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                    <Services title='Fluoride Treatment' text='There is best Fluoride Treatment for you cost efficiat' pic={fluoride}></Services>
                    <Services title='Cavity Filling' text='There is best Cavity Filling for you cost efficiat' pic={cavity}></Services>
                    <Services title='Teeth Whitening' text='There is best Teeth Whitening for you cost efficiat' pic={whitening}></Services>
                </div>
        </div>
    );
};

export default Service;