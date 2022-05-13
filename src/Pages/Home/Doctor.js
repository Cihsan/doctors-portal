import React from 'react';
import bg from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';

const Doctor = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'

        }} className=''>
            <div class="flex items-center">
                    <img src={doctor} class="lg:max-w-lg rounded-lg mt-[-100px] hidden lg:block" alt='' />
                <div class="flex-col lg:flex-row">
                    <div className='p-5'>
                        <p className='text-primary'>Appointment</p>
                        <h1 class="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p class="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;