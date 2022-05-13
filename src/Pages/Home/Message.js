import React from 'react';
import bg from '../../assets/images/appointment.png';

const Message = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'

        }}>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm ">
                    <h1 className='text-center text-3xl text-white'>Stay connected with us</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <textarea class="textarea textarea-bordered " placeholder="Your Message" re></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;