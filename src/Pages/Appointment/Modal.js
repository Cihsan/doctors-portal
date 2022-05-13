import { format } from 'date-fns';
import React from 'react';

const Modal = ({ open, date ,setOpen }) => {
    const handleForm=(event)=>{
        event.preventDefault()
        const date = event.target.date.value
        const slot = event.target.slot.value
        const name = event.target.name.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        console.log(date,slot,name,phone,email);
        setOpen(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Book Appointment: {open.name}</h3>
                   
                    <form onSubmit={handleForm} className='grid grid-col-1 gap-2'>
                        <input type="text" name='date' value={format(date, 'PP')} className="input input-bordered"  />
                        <select name='slot' class="select select-bordered">
                           {
                               open.slots.map(slot=><option>{slot}</option>)
                           }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered"  />
                        <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered"  />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered"  />
                        <button className='btn btn-primary' type='submit'>Submit</button>
                        {/* <input type="submit" value='Submit' className='btn btn-primary' /> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;