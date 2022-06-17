import React from "react";
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import EditDoctor from "../admin/editdoc";
import GetCompounder from "../compounder/allcompounder";
import CompounderRegister from "./compunderreg";
import DailySchedule from "./dailyschedule";
import PatientsList from "./patientslist";
import UpdateProfile from "./updateprofile";


const DoctorPage=()=>{
    const doctor = JSON.parse(localStorage.getItem('doctor'))

    console.log('This is doc page' , doctor._id )

    return(
        <div>
        



            <ul className='makebig'  >
            
                    <li ><Link to='/drpage/dailyschedule'   className='stylebar'   > দৈনিক কর্মসূচী</Link>  </li>
                    <li ><Link to='/drpage/addcompounder'   className='stylebar' >কম্পাউন্ডার যোগ করুন</Link>   </li>
                     <li ><Link to={`/drpage/update/${doctor._id}`}   className='stylebar'>আমার প্রোফাইল আপডেট করুন</Link>   </li> 
                    <li ><Link to='/drpage/compounderinfo'  className='stylebar'>কম্পাউন্ডার দেখুন</Link>   </li>
                    <li ><Link to='/drpage/allpatients'   className='stylebar'   > সকল রোগী</Link>  </li>
                  
                </ul>


                <Switch>
                <Route path="/drpage" exact  component={DailySchedule}  ></Route>
                <Route path="/drpage/dailyschedule"  component={DailySchedule}  ></Route>
<Route path="/drpage/allpatients"  component={PatientsList}  ></Route>
<Route path="/drpage/addcompounder"  ><CompounderRegister docid={doctor._id} /></Route>
 <Route path="/drpage/update/:doctor" component={UpdateProfile}  ><UpdateProfile/></Route>
 <Route path='/drpage/compounderinfo' >< GetCompounder docid={doctor._id} /></Route> 



</Switch>


        </div>
    )


}

export default DoctorPage;