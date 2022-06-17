
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetBookingsByUserIdAction } from '../actions/bookingaction';
import { GetBookingsByUserIdReducer } from '../reducers/bookingreducer';
import { GetAllDoctorAction } from '../actions/doctoraction';
import { GetAllDoctorReducer } from '../reducers/doctorreducer';
import { useEffect } from 'react';
import Loader from '../component/loader'

const BookingList = ({ userid }) => {

    const user = localStorage.getItem('currentuser')

    const dispatch = useDispatch()

    const bookingstate = useSelector(state => state.GetBookingsByUserIdReducer)
    const { orders, error, loading } = bookingstate




    useEffect(() => {

        dispatch(GetBookingsByUserIdAction())


    }, [dispatch])



    return (
        <div>
            <div className="error"  >


                <br></br>

                <h1 style={{ textAlign: 'center' }} >বুকিং তালিকা</h1>

                <table className='table' id="customers"  >



                    <tr>
                        <th scope="col"  >
                            বুকিং আইডি</th>
                        <th scope="col" >
                            ডাক্তারের নাম</th>
                        <th scope="col" >বিশেষত্ব</th>


                        <th scope="col" >
                            যোগাযোগের ঠিকানা</th>
                        <th scope="col"  >
                            অ্যাপয়েন্টমেন্ট বুকড এর জন্য</th>
                        <th scope="col" >স্লট</th>


                    </tr>


                    {loading && (<Loader />)}
                    {orders && (
                        orders.map(ord => {

                            if (userid === ord.userid) {
                                return <tr>

                                    <td data-label="বুকিং আইডি" >{ord._id}</td>
                                    <td data-label="ডাক্তারের নাম" > {ord.doctorname}  </td>

                                    <td data-label="বিশেষত্ব" > {ord.speciality}  </td>

                                    <td data-label="যোগাযোগের ঠিকানা" >{ord.contactnumber}
                                        <br /> {ord.email}
                                    </td>
                                    {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                    <td data-label="অ্যাপয়েন্টমেন্ট বুকড এর জন্য" > {ord.date} </td>
                                    <td data-label="স্লট" >{ord.slot}</td>

                                </tr>
                            }





                        })
                    )}







                </table>

            </div>

        </div>
    )
}

export default BookingList