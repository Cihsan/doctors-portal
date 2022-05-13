import React from 'react';
import quite from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';


const Testimonial = () => {
    return (
        <div className='py-10'>
            <div className="flex justify-between items-center mt-5">
                <div>
                    <p className='text-primary font-bold'>Testimonial</p>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quite} alt="" />
                </div>
            </div>
            <div className='no-flex md:flex'>
                <Testimonials name='Winson Herry' location='California' pic={people1}></Testimonials>
                <Testimonials name='Winson Herry' location='California' pic={people2}></Testimonials>
                <Testimonials name='Winson Herry' location='California' pic={people3}></Testimonials>

            </div>
        </div>
    );
};

export default Testimonial;

const Testimonials = ({ location, name, pic }) => {
    return (
        <div className=''>

            <div className={`pl-2 py-5 card lg:card-side bg-base-100 shadow-xl `}>
                <div className="card-body">
                    <p>
                        It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content
                    </p>
                    <div className="flex gap-5 items-center">
                    <div className='avatar'>
                        <div className="w-24 rounded-full ring ring-primary ring-offset-2"><img src={pic} alt="Album" />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-name">{name}</h2>
                        <p>{location}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}