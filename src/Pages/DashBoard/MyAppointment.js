import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase_init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            // fetch(`http://localhost:5000/booking?patient=${user.email}`)
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
                method:'GET',
                header:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user,appointments])

    const del = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE',
            body: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                toast('are you sure to delete')
            });
    }
    return (
        <div>
            <ToastContainer/>
            <h1>MyAppointment</h1>
            <div class="overflow-x-auto">
                <table class="table w-full mt-12">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td><button onClick={() => del(a._id)} className='btn'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;