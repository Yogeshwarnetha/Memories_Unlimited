import React from "react";
import { IconContext } from "react-icons/lib";
import { AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiFillYoutube } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import './index.css';

const Footer = () => {
    return(
        <div>
        <div className="footer">
            <h3>Shop Gifts</h3>
            <h3>Location Based Surprises</h3>
            <h3>Browse Experiences</h3>
            <h3>Browse Experiences</h3>
            <h4>Terms & Conditions | Privacy Policy | Frequently asked Questions  </h4>
        </div>
        <div >
            <input className="Email_Submit" type="text" placeholder="Enter Email address and get latest ideas and unique gifts to your inbox"/>
            <button className="Email_button" type="submit">Subscribe</button>
            </div>
                <div className="FooterIcons">
                <IconContext.Provider value={{className:"icon"}}>
                  <AiFillFacebook/>
                  </IconContext.Provider>
                  
                  
                  <IconContext.Provider value={{className:"icon"}}>
                  <AiFillLinkedin/>
                  </IconContext.Provider>
                  
                  <IconContext.Provider value={{className:"icon"}}>
                  <BsPinterest/>
                  </IconContext.Provider>

                  <IconContext.Provider value={{className:"icon"}}>
                  <AiFillInstagram/>
                  </IconContext.Provider>

                  <IconContext.Provider value={{className:"icon"}}>
                  <AiFillYoutube/>
                  </IconContext.Provider>
                </div>
                 
        
        
        <div className="Copyrights">
                    <p>Copy rights 2022 @ Marcamor Branding Pvt Ltd.</p>
                 </div>
        </div>
    )
}
export default Footer