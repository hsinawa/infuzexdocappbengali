import React , {useState, useEffect} from 'react'
import {Link , useParams ,  useHistory ,useLocation  } from 'react-router-dom'
import Rating from 'react-rating'

import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import { RegisterNewUserAdmin } from "../actions/useraction";
import { RegisterUserReducer } from "../reducers/userreducer";
import { RegisterNewUserCompounder } from '../actions/useraction';
import Loader from "../component/loader";


const AddUserCompounder=()=>{


    const registreducer = useSelector(state => state.RegisterUserReducer)

    const dispatch = useDispatch()
    const { loading, error, success } = registreducer

    const [name, setname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [contactnumber, setcontactnumber] = useState();
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
   


    const register = (e) => {

        e.preventDefault()

        const user = {
            name: name,
            lname: lname,
            contactnumber: contactnumber,
            email: email,
            password: password
        }


        if (password === cpassword) {
            dispatch(RegisterNewUserCompounder(user))
        }
        else {
            document.getElementById('Message').innerHTML = 'Passwords Not Matched'
            //alert('Passwords Not Matched')
        }



    }


    const meta = {
        title: 'Doctrap',
        description: 'Signup Page for Doctrap',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: `react,meta,document,html,tags,signup , register , doctrap , docrap , practo , doctorbooking , illness 
            
            `
          }
        }
      };









    return(
        <div>



            <DocumentMeta {...meta}>
        <div>



           

              




                <p>

                    <form onSubmit={register} >

                        <div id="loginbox" >


                        <h2>কম্পাউন্ডার ব্যবহারকারী নিবন্ধন</h2>

                          

                            <hr />


                            <div className="boxgrid">

                            <p  >
                                    <label className="formtext" >নামের প্রথম অংশ</label>
                                    <input type="text"

                                        value={name}
                                        required
                                        onChange={(e) => { setname(e.target.value) }}

                                        placeholder='রত' />
                                </p>

                                <p style={{ marginLeft: '5px' }}>
                                    <label className="formtext">নামের শেষাংশ</label>


                                    <input type="text" placeholder='শেষ নাম লিখুন'

                                        value={lname}
                                        required
                                        onChange={(e) => { setlname(e.target.value) }}

                                    />

                                </p>



                                <p>
                                    <label className="formtext"




                                    >ইমেইল আইডি</label>
                                    <input type="text"

                                        value={email}
                                        required
                                        onChange={(e) => { setemail(e.target.value) }}

                                        placeholder='ইমেইল আইডি দিন' />

                                </p>


                                <p style={{ marginLeft: '5px' }} >

                                    <label className="formtext">যোগাযোগের নম্বর</label>
                                    <input type="Number"

                                        value={contactnumber}
                                        required
                                        onChange={(e) => { setcontactnumber(e.target.value) }}


                                        placeholder='যোগাযোগের নম্বর' />


                                </p>




                                <p>
                                    <label className="formtext">পাসওয়ার্ড</label>
                                    <input type="password"

                                        value={password}
                                        required
                                        onChange={(e) => { setpassword(e.target.value) }}


                                        placeholder='পাসওয়ার্ড লিখুন' />

                                </p>

                                <p style={{ marginLeft: '5px' }} >
                                    <label className="formtext">পাসওয়ার্ড নিশ্চিত করুন</label>
                                    <input type="password" placeholder='কনফার্ম পাসওয়ার্ড দিন'

                                        value={cpassword}
                                        required
                                        onChange={(e) => { setcpassword(e.target.value) }}



                                    />

                                </p>




                            </div>
                            <button type='submit' className='box1' id="signupbtn" style={{


                            }}  >এই রোগীর নিবন্ধন করুন</button>

                        

                            {loading && ( <Loader/> ) }

                            <br/><br/>


                            {error && ( <p  id="message" >ইমেলটি ইতিমধ্যেই নিবন্ধন</p> )  }

{success && ( <p  id="message" >সাফল্যের সাথে নিবন্ধিত</p> ) }








                        </div>


                    </form>




                </p>







       





        </div>
        </DocumentMeta>



        </div>
    )



}

export default AddUserCompounder