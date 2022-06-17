import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import './login.css'
import Loader from "../component/loader";
import { LoginUser } from "../actions/useraction";
import { LoginUserReducer } from "../reducers/userreducer";

const LoginScreen = () => {

    const loginreducer = useSelector(state=>state.LoginUserReducer)

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


    useEffect( ()=>{

        if(localStorage.getItem('currentuser'))
        {
            window.location.href='/'
        }


    } ,[])






    return (
        <div>

            <div className="boxgrid-notinuse" >

               




              <br/> <br/> <br/>

             
                    <div id="loginbox" >
                    <form onSubmit={login}   >
                        <h1> প্রবেশ করুন </h1>
                        <h5> এখানে নতুন ? <a href="/signup"> এখানে নিবন্ধন করুন </a>  </h5>
                        <hr/>

                    <label className="formtext" >ইমেইল প্রদান করুন</label>
                                    <input type="text"

value={email} 
                                        required
                                      
                                        onChange={ (e)=>{ setemail(e.target.value) } }   
                                        placeholder='ইমেইল প্রদান করুন' />



                    <label className="formtext" >পাসওয়ার্ড লিখুন</label>
                                    <input type="password"
value={password}
                                       
                                        required

                                        onChange={ (e)=>{ setpassword(e.target.value) } } 
                                      

                                        placeholder='পাসওয়ার্ড লিখুন' />   


                   

<button  type='submit' 
className='box1' 


id="signupbtn"

style={{marginTop:'10px'   }}


>প্রবেশ করুন</button>

{loading && <Loader/>}
<p id='Message'   ></p>


</form>

                    </div>


                
                 




            </div>





        </div>
    )


}


export default LoginScreen;