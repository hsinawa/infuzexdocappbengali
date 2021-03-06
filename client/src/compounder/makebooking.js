import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { GetDoctorById } from '../actions/doctoraction';
import { GetDoctorByIdReducer } from '../reducers/doctorreducer';

import Loader from '../component/loader';
import Calendar from 'react-calendar';
import { BookPatientsAction } from '../actions/bookingaction';


const CompounderBooking=({doctorid})=>{

    const [docid , setdocid] = useState(doctorid)
    const [time , settime ] = useState('')
    const [bookingdate, onChange] = useState(new Date());
const [field , setfield] = useState('')


const [name , setname ] = useState('')
const [lname , setlname ] = useState('')
const [contactnumber , setcontactnumber ] = useState()

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();

const compounder = JSON.parse(localStorage.getItem('compounder'))

var dd2 = today.getDate() + 7

var maxdate = yyyy + '-' + mm + '-' + dd2;

const dispatch = useDispatch()

useEffect( ()=>{
    dispatch(GetDoctorById( {doctorid} ))
} , [] )

const dridstate = useSelector(state=>state.GetDoctorByIdReducer)
const { loading, doctors ,error} = dridstate

var day2=bookingdate.toString().substr(0,3)

const bookappointment=()=>{

    var date =  bookingdate.toString().substr(0,15)
   // alert(date)


  
  if(compounder)
  {

    const details = {
        name:name ,
        lname:lname ,
        status:'Own Compounder' ,
        contactnumber:contactnumber ,
        doctorid:doctorid ,
        userid:compounder._id ,
        date:date ,
        slot:field
    }

    dispatch(BookPatientsAction(details))
    window.location.href=`/bookingconfirmation`
  }
 


  alert('Please take a screenshot of this page')

// alert(bookingdate ,'timing is' , field)

     document.getElementById('show-date').innerHTML=bookingdate + field + 'Booking Confirmed'
 }


 const showcontact=()=>{
    // alert(doctors.contactnumber)
     document.getElementById('show-number').innerHTML=doctors.contactnumber
 }

var timevar = []
//timevar =  doctors.checked




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



<h4 style={{float:'left', marginLeft:'5%'}} > ??????</h4>
<br/>
<input type='text' value={name} placeholder='??????' 

required
style={{width:'90%' , marginLeft:'5%'  }}
onChange={ (e)=>{ setname(e.target.value) } }  />
<br/><br/><br/>


<h4 style={{float:'left', marginLeft:'5%'}} > ????????? ????????? ???????????????</h4>
<br/>
<input type='text' value={lname} placeholder='????????? ????????? ???????????????' 
style={{width:'90%', marginLeft:'5%'}}

onChange={ (e)=>{ setlname(e.target.value) } }  />
<br/><br/><br/>


<h4 style={{float:'left', marginLeft:'5%'}} > ??????????????????????????? ??????????????? ??????????????? </h4>
<br/>
<input 
style={{width:'90%', marginLeft:'5%'}}
type='Number' value={contactnumber} placeholder='??????????????????????????? ??????????????? ???????????????'

required
onChange={ (e)=>{ setcontactnumber(e.target.value) } }  />


<br/><br/><br/>

<br/><br/><br/><br/><br/><br/><br/><br/><br/>

<button 
value='submit' 
//onClick={bookappointment}

className='docdes-box1' style={{backgroundColor:'#0EB9B8' , color:'white'}}  > ????????? ????????????????????????????????????????????????</button>





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

export default CompounderBooking;