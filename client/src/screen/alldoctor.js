import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import Loader from "../component/loader";
import { GetAllDoctorAction } from "../actions/doctoraction";
import { GetAllDoctorReducer } from "../reducers/doctorreducer";
import { ad, satellite } from "fontawesome";
import DoctorGrid from "../Header/doctorgrid";
import $ from 'jquery';
import './doctorgrid.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const AllDoctors=()=>{

const alldoctos = useSelector(state=>state.GetAllDoctorReducer)
const {loading , doctors , error} = alldoctos


const dispatch = useDispatch()

useEffect( ()=>{


    dispatch(GetAllDoctorAction())
}  ,[])






    return(
        <div>
<br/><br/><br/><br/>
            <h2 id='smallh2' >একটি ইন-ক্লিনিকে পরামর্শের জন্য একটি অ্যাপয়েন্টমেন্ট বুক করুন</h2>
            <h4 style={{color:'grey'}} id='smallh6'  >সমস্ত বিশেষত্ব জুড়ে অভিজ্ঞ ডাক্তার খুঁজুন</h4>

            
              
           

      


            <div className="gridcontain1"  >
             
            {loading ? <h1> <Loader/> </h1> :error ? (<h1>কিছু ভুল হয়েছে</h1>) :
            
            
    (

        
        
        doctors.slice(0, 3).map(prod=>{
         

return <div 
//className="card" 
id="content" 

>
                <DoctorGrid prod={prod}  />
                
                </div>




         

          
              
                
        })


    ) } 




<a href="/alldoctors" style={{textDecoration:'none' , color:'black' }} >
<p className='docdes-box1' 

//id="navigationbutton"

style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white' }} 
>
সবগুলো দেখ
 </p>
</a>
</div>


        </div>
    )


}

export default AllDoctors;