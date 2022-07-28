import React from "react";
import './index.css'
import Navbar from "../Navbar";
import Footer from "../Footer";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const RefineSearch =()=> {
    
    return(
        <div>
            <div>
            <Navbar/>
            </div>
                <div>
                    <div>
                        <p>Refine Search</p>
                        <p>Clear all</p>
                        <p>Category</p>
                        <ul>
                            <li>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Gift" />
                                <FormControlLabel control={<Checkbox />} label="Experiences" />
                                <FormControlLabel control={<Checkbox />} label="Celebrations" />
                                <FormControlLabel control={<Checkbox />} label="Others" />
                                <FormControlLabel control={<Checkbox />} label="Weddings" />
                                <FormControlLabel control={<Checkbox />} label="Weddings" />
                             </FormGroup>
                            </li>
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                </div>
    
            <div>
             <Footer/>  
            </div>
          
        </div>
    )
} 
export default RefineSearch;