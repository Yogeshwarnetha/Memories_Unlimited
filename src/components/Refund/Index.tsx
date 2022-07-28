import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './index.css';

const Refund = ()=> {
    return(
        <div>
            <Navbar/>
        
        <div className="Refund_main">
            <div><p className="RefundDetail_Refund">Refund Details(items)</p></div>
            <div><p className="AmountPaid_Refund">Amount Paid for items</p></div>
            <div><p className="Discount_Refund">Discount on MRP</p></div>
            <div><p className="Cancellation_Refund">Cancellation fee <div className="Refund_seeDetail">(See details)</div></p>
            </div>
            <div><p className="Refund_Refund">Refund Amount</p></div>
            <div><button className="button_Refund"type="submit">SUBMIT</button></div>

            <div className="image_Yourprofile">
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
        <Footer/>
        </div>
    )
}
export default Refund;