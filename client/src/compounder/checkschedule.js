import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetPatientsByUserIdAction } from "../actions/bookingaction";
import { GetPatientsByUserIdReducer } from "../reducers/bookingreducer";

import { GetCompounderPatientsByUserIdAction } from '../actions/compounderaction';


const CheckSchedule=({doctorid})=>{

    const dispatch = useDispatch()

    const today = new Date()

    var checkdate = today.toString().substring(0, 15)


const patientstate = useSelector(state=>state.GetPatientsByUserIdReducer)

const {orders , error , loading } = patientstate


const doc = localStorage.getItem('compounder')

    useEffect( ()=>{

        if(localStorage.getItem('compounder'))
        {
            dispatch(GetCompounderPatientsByUserIdAction())
        }
        else{
            window.location.href='/compounder'
        }



    } ,[dispatch]  )




    return(
        <div>
          
            <div className="error"  >
                

                <br></br>
                
                               <h1 style={{textAlign:'center'  }} >ডাক্তারের সময়সূচী</h1>
                
                               <table   className='table' id="customers"  >
                                  
                                       <tr  > 
                
                                          <th scope="col" >বুকিং আইডি
</th>
                                           <th scope="col" >
রোগীর নাম</th>
                                          
                
                                           <th scope="col" >
যোগাযোগের ঠিকানা</th>
                                           <th scope="col" >
অ্যাপয়েন্টমেন্ট বুকড এর জন্য</th>
                                           <th scope="col" >স্লট</th>
                                           <th scope="col" >
দ্বারা বুক করা হয়েছে</th>
                                         
                                           {/* <th> Status </th>
                                           <th> Appointment Booked On </th> */}
                                           
                                           
                                     </tr>
                                      
                                    
                                          {/* {loading && ( <Loading/> ) }   */}
                                           {orders && (
                                              orders.map( ord =>{

                                                if (ord.date === checkdate)
                                                {
                                                    return <tr >
                
                                                    <td data-label="বুকিং আইডি" >{ord._id}</td>
                                                     <td data-label="রোগীর নাম" > {ord.name} {ord.lname} </td>
                                                  
                                                    
                                                  
                                                     <td data-label="যোগাযোগের ঠিকানা" >{ord.contactnumber}
                                                     <br/> {ord.email}
                                                     </td>
                                                     {/* <td>{ord.createdAt.substr(0,10)}</td> */}
                                                     <td data-label="
অ্যাপয়েন্টমেন্ট বুকড এর জন্য" > {ord.date} </td>
                                                     <td data-label="স্লট">{ord.slot}</td>
                                                     <td data-label="
দ্বারা বুক করা হয়েছে" >{ord.status}</td>
                                                     
                                                     {/* <td>Dr. {doc.name}</td> */}
                                                
               
               
                                                    
                                               
               
                                                 </tr>
                                                }

                                               
                                              } )
                                          )  } 
                                          
                                              
                                     
                
                                   
                
                               </table>

</div>                

        </div>
    )
}

export default CheckSchedule