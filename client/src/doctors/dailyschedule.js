import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from 'react-rating'
import './tablestyle.css'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";

const DailySchedule = () => {

    const dispatch = useDispatch()


    const patientstate = useSelector(state => state.GetPatientsByUserIdReducer)

    const { orders, error, loading } = patientstate


    const doc = localStorage.getItem('doctor')
    useEffect(() => {

        if (localStorage.getItem('doctor')) {
            dispatch(GetPatientsByUserIdAction())
        }
        else {
            window.location.href = '/drlogin'
        }



    }, [dispatch])


    const today = new Date()

    var checkdate = today.toString().substring(0, 15)

   

    return (
        <div>

            <div className="error" id='customers'  >


                <br></br>

                <h1 style={{ textAlign: 'center' }} >
ডাক্তারের সময়সূচী</h1>

                <table   className='table' id="customers" 
                >



                   
                        <tr>
                            <th scope="col"  >বুকিং আইডি</th>
                            <th scope="col" > রোগীর নাম </th>


                            <th scope="col" > 
যোগাযোগের ঠিকানা  </th>
                            <th scope="col"  > অ্যাপয়েন্টমেন্ট বুক করা হয়েছে  </th>
                            <th scope="col" >স্লট
</th>
                            <th scope="col" >দ্বারা বুক করা হয়েছে</th>
                        </tr>
                  


                    {/* {loading && ( <Loading/> ) }   */}
                    {orders && (
                        orders.map(ord => {

                            if (ord.date === checkdate) {
                                return  <tr>
<td data-label="বুকিং আইডি" >{ord._id}</td>
                                    <td data-label="রোগীর নাম" > {ord.name} {ord.lname} </td>



                                    <td data-label="
যোগাযোগের ঠিকানা" >{ord.contactnumber}
                                        <br /> {ord.email}
                                    </td>
                                    {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                    <td data-label="অ্যাপয়েন্টমেন্ট বুক করা হয়েছে" > {ord.date} </td>
                                    <td data-label="স্লট
" >{ord.slot}</td>
                                    <td data-label="দ্বারা বুক করা হয়েছে" >{ord.status}</td>
    </tr>


                                   

                                 
                            }


                        })
                    )}






                </table>

            </div>

        </div>
    )
}

export default DailySchedule