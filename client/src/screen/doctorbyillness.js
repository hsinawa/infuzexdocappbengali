import React from "react";
import DocumentMeta from 'react-document-meta';
import { BrowserRouter, Link } from "react-router-dom";
import './docbyillness.css'

const DoctorByIllness=()=>{

    return(
        <div>






<h2 className='h2-header' >
যেকোনো স্বাস্থ্য উদ্বেগের জন্য অনলাইনে শীর্ষ চিকিৎসকদের সাথে পরামর্শ করুন</h2>

<br/>


<div className='Doc-by-Spec'  >

<a href='/acne-issues' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://thumbs.dreamstime.com/b/unhappy-teen-girl-struggling-acne-unhappy-teen-girl-struggling-acne-pimples-skin-face-problem-concept-vector-modern-flat-99784709.jpg' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >ত্বক বা চুলের সমস্যা </h4>

                        <h5 className='consult-now' >এখনই পরামর্শ করুন</h5>
                    </p>
                </a>
           

               
                <a href='/cold-cough' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://img.freepik.com/free-vector/illustration-person-with-cold_23-2148405063.jpg?w=2000' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >সর্দি, কাশি বা জ্বর</h4>
                        <h5 className='consult-now' >এখনই পরামর্শ করুন</h5>
                    </p>
                </a>


                <a href='/child-not-feelingwell' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://media.istockphoto.com/vectors/sick-child-in-bed-vector-id1169998028?k=20&m=1169998028&s=170667a&w=0&h=lFvWE98tTOKDlJpgiOlFuz3SFe55fenQSGgiV5rnRBk=' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >বাচ্চা ভালো লাগছে না </h4>
                        <h5 className='consult-now' >এখনই পরামর্শ করুন
</h5>
                    </p>
                </a>



                <a href='/depression' style={{ textDecoration: 'none' }} >
                    <p>
                        <img src='https://img.freepik.com/free-vector/woman-depression-with-bewildered-thoughts-her-mind_102172-221.jpg?w=2000' id="img-docgrid1" />
                        <br />
                        <h4 style={{ color: 'black' }} >বিষণ্নতা বা উদ্বেগ</h4>
                        <h5 className='consult-now' >এখনই পরামর্শ করুন</h5>
                    </p>
                </a>

                
               

            </div>




            <div className="gridcontain1"  >


   




<a href='/doctor-by-symptom' style={{textDecoration:'none'}} >
<p className='docdes-box1' style={{backgroundColor:'black' , border:'2px solid black' , marginRight:'auto' , marginLeft:'left' , color:'white'  }} > সব দেখ </p>
</a>


</div>




        </div>
    )


}

export default DoctorByIllness