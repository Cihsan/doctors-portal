import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const TimeSet = ({ date, setdate }) => {
    const [open,setOpen]=useState(null)
    const [services, setservice] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setservice(data))
    }, [])
    return (
        <div>
            <p className='text-center text-lg'>Available Appointments on {format(date, 'PP')}.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =>
                        <div className={`card lg:card-side bg-base-100 shadow-xl p-5`}>
                            <div className="card-body">
                                <h2 className="card-title">{service.name}</h2>
                                <p>
                                    {
                                        service?.slots?.length > 0
                                        ?<span>{service.slots[0]}</span>
                                        :<span className='text-red-500'>No Available Slots</span>
                                    }
                                </p>
                                <p>{service.slots.length } {service.slots.length> 1 ?'SPACES':'SPACE'}  AVAILABLE</p>
                                <label onClick={()=>setOpen(service)} 
                                disabled={service.slots.length===0} 
                                 for="my-modal-6" class="btn btn-primary">Book Appointment</label>
                            </div>
                            {open && <Modal date={date} open={open} setOpen={setOpen}></Modal>}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TimeSet;