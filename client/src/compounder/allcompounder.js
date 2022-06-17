import React , {useState, useEffect} from 'react'
import {Link , useParams } from 'react-router-dom'
import Rating from 'react-rating'
import { GetCompounderById } from '../actions/compounderaction'
import { GetCompounderByIdReducer } from '../reducers/compounderreducer'
import { useDispatch, useSelector } from 'react-redux'
import DocumentMeta from 'react-document-meta';
import axios from 'axios';
import './comp.css'
import Loader from '../component/loader'
import { DeleteCompounderAction } from '../actions/compounderaction'

const GetCompounder=({docid})=>{

    const dispatch = useDispatch()

    const dridstate = useSelector(state=>state.GetCompounderByIdReducer)
    const { loading, compounders ,error} = dridstate

    

    useEffect(() => {
        dispatch(GetCompounderById( {docid} ))

    }, [])

  


    return(
        <div>

<table className='table' id="customers"  >
               <thead>
                   <tr>
                   <th scope="col" >ব্যবহারকারী আইডি</th>
                   <th scope="col" >নাম</th>
                   <th scope="col" >ইমেইল</th>
                   <th scope="col" >যোগাযোগের নম্বর</th>
                   <th scope="col" >মুছে ফেলা</th>
                   
                   
                  
                   
                       </tr>
                
               </thead>

               <tbody>
                   {loading && (<Loader/>) }
                   
                   {compounders && ( compounders.map(use=>{
                       return <tr>

                           <td data-label="ব্যবহারকারী আইডি" > {use._id} </td>
                           <td data-label="নাম" > {use.name} </td>
                           <td data-label="ইমেইল" > {use.email} </td>
                           <td data-label="যোগাযোগের নম্বর" > { use.contactnumber } </td>
                             <td data-label="মুছে ফেলা" > <i id="del" className="far fa-trash-alt" onClick={ ()=>{ dispatch(DeleteCompounderAction(use._id)) } }  ></i> 
                          </td>
                          
                          


                           </tr>
                   }) ) }
               </tbody>
           </table>
    
    </div>

   





       
    )



}

export default GetCompounder;