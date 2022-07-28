import React from "react";
import './index.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { profile } from "console";


const Profile = () => {
    return(
        <div className="MainProfile">
            <Navbar/>
        <div>
        <div className="main_Yourprofile">
            <h3 className="YourProfile">Your Profile </h3> 
            <br/>
            <div className="input_Yourprofile">
            <input  className="box_Yourprofile" title="Firstname" placeholder="First Name *" type="text" required/>
            <input className="box_Yourprofile" title="Lastname" placeholder="Last Name" type="text" />
            </div>
            <br/>
            <div className="input_Yourprofile">
            <input className="box_Yourprofile" title="Email Id" placeholder="Email ID *" type="text" required/>
            <input className="box_Yourprofile" title="Mobile Number" placeholder="Mobile Number *" type="text" required/>
            </div>
            <br/>
            <div className="input_Yourprofile">
            <input className="box_Yourprofile" title="Address line 1" placeholder="Address line 1 *" type="text" required/>
            <input className="box_Yourprofile" title="Address line 2" placeholder="Address line 2" type="text"/>
            </div>
            <br/>
            <div className="input_Yourprofile">
            <input className="box_Yourprofile" title="Pincode" placeholder="Pincode" type="text" required/>
            <input className="box_Yourprofile" title="Town" placeholder="Town" type="text"/>
            </div>
            <br/>
            <div className="input_Yourprofile">
            <input className="box_Yourprofile" title="State" placeholder="State" type="text"/>
            <input className="box_Yourprofile"  title="Alternative Mobile Number" placeholder="Alternative Mobile Number" type="text"/>
            </div>
            <br/>
           
            <button className="button_Yourprofile"type="submit"> UPDATE</button>
            <div className="image_Yourprofile1">
            <div className="style-image_Yourprofile" style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/953/270/HD-wallpaper-gifts-boxes-ribbons-red-black.jpg)`}}>
                <p className="change_Yourprofile">
             
                Changing<br/>
                Moments<br/>
                into <br/>
                Beautiful
                <p className="mem_color_Yourprofile">Memories</p>
                <p className="sub_mem1_Yourprofile">Gifts.Experiences.Unique</p>
                <p className="sub_mem_Yourprofile">Surprises.Events.Weddings.Other</p>
                <p className="sub_mem_Yourprofile">Services Corporate. many more</p>
                </p>
                <br/>
                <a href="https://www.sulekha.com/memories-unlimited-madhapur-hyderabad-contact-address">
                <button className="redirect_Yourprofile">Explore memories</button>
                </a>
                </div>
                </div>
            </div>
            
            </div>
            <Footer/>
        </div>
    )
}
export default Profile;