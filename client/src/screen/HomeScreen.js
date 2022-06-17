import React from "react";
import DocumentMeta from 'react-document-meta';
import AllDoctors from "./alldoctor";
import './general.css'
import DoctorBySpecialization  from "./doctorbyspec";
import DoctorByIllness from "./doctorbyillness";

const HomeScreen=()=>{

    const meta = {
        title: 'Doctrap',
        description: 'Home Page of DocTrap ',
        canonical: '',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags,doctrap,illness,medical,best doctors , dr , drs '
          }
        }
      };




    return(

        <DocumentMeta {...meta}>

<div>

<img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" id="homescreen-image" />
 <h1> আপনি নিরাপদ হাতে আছেন
 </h1>



</div>


<AllDoctors/>

<DoctorBySpecialization/>

<DoctorByIllness/>





            </DocumentMeta>
     
    )


}


export default HomeScreen ;