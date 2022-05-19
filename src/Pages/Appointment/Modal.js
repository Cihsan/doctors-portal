import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase_init';

const Modal = ({ open, date, setOpen }) => {
    const { _id, name } = open;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleForm = (event) => {
        event.preventDefault()
        // const date = event.target.date.value
        // const name = event.target.name.value
        // const phone = event.target.phone.value
        // const email = event.target.email.value
        // console.log(date,slot,name,phone,email);
        const slot = event.target.slot.value

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
            });
        setOpen(null)
    }
    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Book Appointment: {open.name}</h3>

                    <form onSubmit={handleForm} className='grid grid-col-1 gap-2'>
                        <input type="text" name='date' value={format(date, 'PP')} className="input input-bordered" />
                        <select name='slot' class="select select-bordered">
                            {
                                open.slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user.displayName} className="input input-bordered" />
                        <input type="email" name='email' disabled value={user.email} className="input input-bordered" />
                        <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered" />
                        <button className='btn btn-primary' type='submit'>Submit</button>
                        {/* <input type="submit" value='Submit' className='btn btn-primary' /> */}
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Modal;