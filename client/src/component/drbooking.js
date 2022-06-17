import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';
import Calendar from 'react-calendar';
import './drbooking.css';
import Loader from './loader';

import { BookPatientsAction } from '../actions/bookingaction';


const DrBooking=({doctorid})=>{

    const [docid , setdocid] = useState(doctorid)
    const [time , settime ] = useState('')
    const [bookingdate, onChange] = useState(new Date());
const [field , setfield] = useState('')

const user = JSON.parse(localStorage.getItem('currentuser'))
const admin=JSON.parse(localStorage.getItem('admin'))
const doctor = JSON.parse(localStorage.getItem('doctor'))
const compounder = JSON.parse(localStorage.getItem('compounder'))





    var today = new Date();
  

    var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();


var day2=bookingdate.toString().substr(0,3)
var dd2 = today.getDate() + 7

var maxdate = yyyy + '-' + mm + '-' + dd2;

const dispatch = useDispatch()
    const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
    const { loading, doctors ,error} = dridstate

    


    const bookappointment=()=>{

       var date =  bookingdate.toString().substr(0,15)
      // alert(date)

       if(user)
       {
           const details = {
               name:user.name ,
               lname:user.lname ,
               email:user.email ,
               contactnumber:user.contactnumber ,
               doctorid:doctorid ,
               userid:user._id ,
               status:'Registered User' ,
               date:date ,
               slot:field , 
               doctorname:doctors.name ,
          speciality:doctors.field 
           }

           dispatch(BookPatientsAction(details))
           window.location.href=`/bookingconfirmation`

       }

       if(doctor)
       {
           const details = {
               name:doctor.name ,
               lname:doctor.lname ,
               email:doctor.email ,
               contactnumber:doctor.contactnumber ,
               doctorid:doctorid ,
               status:'Doctor' ,
               userid:doctor._id ,
               date:date ,
               slot:field , 
               doctorname:doctors.name ,
          speciality:doctors.field 
           }

           dispatch(BookPatientsAction(details))
           window.location.href=`/bookingconfirmation`

       }

       if(compounder)
       {
        const details = {
            name:compounder.name ,
            lname:compounder.lname ,
            email:compounder.email ,
            contactnumber:compounder.contactnumber ,
            doctorid:doctorid ,
            status:'Compounder' ,
            userid:compounder._id ,
            date:date ,
            slot:field ,
            doctorname:doctors.name ,
          speciality:doctors.field 
        }

        dispatch(BookPatientsAction(details))
        window.location.href=`/bookingconfirmation`

       }
      



   // alert(bookingdate ,'timing is' , field)
   alert('Please take a screenshot of this page')
        document.getElementById('show-date').innerHTML=bookingdate + field
       
    }


    const showcontact=()=>{
       // alert(doctors.contactnumber)
        document.getElementById('show-number').innerHTML=doctors.contactnumber
    }

var timevar = []
timevar =  doctors.checked



    return(
        <div>

 {loading ? (<Loader/>) : error ? ( <p> There's an error </p> ) :
 (
     <div>

<form onSubmit={bookappointment} >

<div id='calendar-position' >
<Calendar onChange={onChange} value={bookingdate}

dateFormat = 'dd/MM/yyyy'

minDate =  { new Date()  }

maxDate = { new Date( yyyy , mm-1 , dd2 ) }
maxDetail = 'month'
minDetail = 'month'


/>














{

day2==='Mon'?(
    <p>
        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.mon && doctors.mon.map(rev => {

   

    return <option value={rev} >

 
        {rev} 




        </option>

})

}
</select>
        </p>

):(
   day2==='Tue' ? (
    <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

    {
     
    doctors.tue && doctors.tue.map(rev => {
        return <option value={rev} >
    
     
            {rev} 
    
    
    
    
            </option>
    
    })
    
    }
    </select>
   ) : (
       day2==='Wed' ? (
        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.wed && doctors.wed.map(rev => {
    return <option value={rev} >

 
        {rev} 




        </option>

})

}
</select>
    ) : (
        day2==='Thu' ? (
            <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

            {
             
            doctors.thu && doctors.thu.map(rev => {
                return <option value={rev} >
            
             
                    {rev} 
            
            
            
            
                    </option>
            
            })
            
            }
            </select>
        )  : (
            day2==='Fri' ? (
                <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.fri && doctors.fri.map(rev => {
    return <option value={rev} >

 
        {rev} 




        </option>

})

}
</select>
            )  : (
                day2==='Sat'?(
                    <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.sat && doctors.sat.map(rev => {
    return <option value={rev} >

 
        {rev} 




        </option>

})

}
</select>
                ) : (
                    day2==='Sun' ? (
                        <select value={field} onChange={ (e)=>{ setfield(e.target.value) } } id='select-doc' style={{marginTop:'30px' , marginBottom:'30px' }}  >

{
 
doctors.sun && doctors.sun.map(rev => {
    return <option value={rev} >

 
        {rev} 




        </option>

})

}
</select>
                    ) : (
                        <p> </p>
                    )
                )
            )
        )
    )
   )
)

}









<br/>








<br/>






<br/>









</div>



<button 
value='submit' 
//onClick={bookappointment}

className='docdes-box1' style={{backgroundColor:'#0EB9B8' , color:'white'  }}  > &nbsp; &nbsp;   বুক অ্যাপয়েন্টমেন্ট</button>
<h4>বা
</h4>
<span  className='docdes-box1' style={{backgroundColor:'white' , border:'1px solid black'  }} 

onClick={ showcontact }


>

<i class="fa fa-phone" aria-hidden="true"></i>  
 ক্লিনিকে কল করুন</span>




</form>


<br/>




<p id="show-number" ></p>
<p id="show-date" ></p>



         </div>
 )
}       
                          


        </div>
    )

}

export default DrBooking;