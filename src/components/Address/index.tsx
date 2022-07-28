import React from "react";
import './index.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Address =()=>{
    return(
        <div>
            <Navbar/>
            <div className="mainAddress">
            <h3 className="Addresses">Addresses </h3> 
            <br/>
            <div className="inputAddress">
            <input  className="boxAddress" title="Name" placeholder="Name *" type="text" required/>
            <input className="boxAddress" title="Mobile Number" placeholder="Mobile Number *" type="text" required/>
            </div>
            <br/>
            <div className="inputAddress">
            <input className="boxAddress" title="Address" placeholder="Address *" type="text" required/>
            <input className="boxAddress" title="Pincode" placeholder="Pincode *" type="text" required/>
            </div>
            <br/>
            <div className="inputAddress">
            <input className="boxAddress" title="State" placeholder="State " type="text" required/>
            <input className="boxAddress" title="Town" placeholder="Town " type="text"/>
            </div>
            <div>
            <button className="buttonAddress"type="submit"> DELIVER HERE</button>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Address;