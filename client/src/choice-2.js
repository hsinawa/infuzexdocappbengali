import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter , Route ,Link , Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store'

const Choice2=()=>{


    return(
        <Provider store={store} ><App/></Provider>
    )

}

export default Choice2;