import React from "react";
import './index.css';
import Navbar from "../Navbar";
import Footer from "../Footer";

const GetinTouch =()=> {
    return(
        <div>
            <Navbar/>
        
        <div className="main_getintouch">
            <h3 className="GetinTouch">Get in touch </h3> 
            <br/>
        <div className="input_getintouch">
            <input className="box_getintouch" title="Name" placeholder="Name *" type="text" required/>
        </div>
        <br/>
        <div className="input_getintouch">
            <input className="box_getintouch" title="Name" placeholder="Mobile Number *" type="text" required/>
        </div>
        <br/>
        <div className="input_getintouch">
            <input className="box_getintouch" title="Name" placeholder="Select Category *" type="text" required/>
    
        </div>
        <br/>
        <div className="input_getintouch">
            <input className="messagebox_getintouch" title="Name" placeholder="Name" type="text" />
            <button className="button_getintouch"type="submit">SUBMIT</button>
        </div>
        
        <div>
            <img className="image_getintouch" src="https://media.istockphoto.com/photos/female-hands-holding-a-soft-rose-rose-in-the-garden-picture-id1299788321?b=1&k=20&m=1299788321&s=170667a&w=0&h=oAQ9upTwR_50A1wGEWOK-FrSkW7ByL6hCRJf-Fx6jfk="/>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
export default GetinTouch;