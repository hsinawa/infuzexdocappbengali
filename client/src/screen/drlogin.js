import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';

import { LoginUser } from "../actions/doctoraction";
import { LoginDocUserReducer } from "../reducers/doctorreducer";

import Loader from "../component/loader";


const DoctorLogin = () => {


  



    const loginreducer = useSelector(state=>state.LoginDocUserReducer)

    const {loading , error} = loginreducer

    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    

    const dispatch = useDispatch()

    const login=(e)=>{

        e.preventDefault()

        const user ={
            name : name , 
            email:email ,
            password:password
        }


      dispatch(LoginUser(user))
      document.getElementById('Message').innerHTML=error
    }

    const meta = {
        title: 'Doctrap',
        description: 'Doctor Signup ',
        canonical: 'http://example.com/path/to/page',
        meta: {
            charset: 'utf-8',
            name: {
                keywords:  `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness
                
                
                `
            }
        }
    };


    useEffect( ()=>{

        if(localStorage.getItem('doctor'))
        {
            window.location.href='/drpage'
        }


    } ,[])








    return (
      

            <DocumentMeta {...meta}>
                  <div>


                  <br/> <br/> <br/>

             
<div id="loginbox" >
<form onSubmit={login}   >
    <h1> ডাক্তার লগইন</h1>
    <h5> এখানে নতুন ? <a href="/drsignup"> 
এখানে নিবন্ধন করুন </a>  </h5>
    <hr/>

<label className="formtext" >ইমেইল প্রদান করুন</label>
                <input type="text"

value={email} 
                    required
                  
                    onChange={ (e)=>{ setemail(e.target.value) } }   
                    placeholder='ইমেইল প্রদান করুন' />



<label className="formtext" >
পাসওয়ার্ড লিখুন</label>
                <input type="password"
value={password}
                   
                    required

                    onChange={ (e)=>{ setpassword(e.target.value) } } 
                  

                    placeholder='পাসওয়ার্ড লিখুন' />   




<button  type='submit' className='box1' id="signupbtn"

style={{marginTop:'10px'}}


>প্রবেশ করুন
</button>

{loading && <Loader/>}
<p id='Message'   ></p>

<p>
আপনি কি কম্পাউন্ডার? <a href='/compounderlogin'>এখানে লগইন করুন</a> </p>

</form>

</div>








                  </div>
             </DocumentMeta>


        
    )




}


export default DoctorLogin;