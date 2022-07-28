import React from 'react';
import { BrowserRouter, Routes} from "react-router-dom";
import {Fragment} from 'react';
import './components/index.css';
import Home from './components/HomePage';
import Photolist from './components/Page2/PhotosList';
import Profile from './components/Profile';
import GetinTouch from './components/GetinTouch';
import Address from './components/Address';
import TermsAndConditions from './components/TermsAndConditions';
import Gallery from './components/gallery';
import { Route } from 'react-router';
import Refund from './components/Refund/Index';
import RefineSearch from './components/Refine Search';
import Event from './components/Event';
import WeddingPlanning from './components/Wedding planning'

const App =() => {
  return (
    <BrowserRouter>
    <Fragment>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Photolist" element={<Photolist/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/GetinTouch" element={<GetinTouch/>}/>
        <Route path="/Address" element={<Address/>}/>
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Refund" element={<Refund/>}/>
        <Route path="/RefineSearch" element={<RefineSearch/>}/>
        <Route path="/Event" element={<Event/>}/>
        <Route path="/WeddingPlanning" element={<WeddingPlanning/>}/>
   

      </Routes>
    </Fragment>
    </BrowserRouter>
         
    )
  };
 export default App;