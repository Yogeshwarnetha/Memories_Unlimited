import React, { useState } from "react";
import './index.css';
import {AiOutlineHeart} from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import{BiShoppingBag} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';


 const Navbar =()=>{
    

    
    return(
        
    <div>
        <div className="navbar-container1">

            <ul>
            <li className="logo1">Memories Unlimited</li>
                <div className="head_1">
                    <li>Experiences</li>
                    <li>Gifts</li>
                    <li>Weddings</li>
                    <li>Events</li>
                    <li><div className="navbar_2">
                    <input className="search_input1" placeholder="Search" type="text" value="" name="search" />
                    </div></li>

        <li>
                <div className="icons1">
                <div className="for-icons1">
                    <IconContext.Provider value={{ className: "icon1" }}>
                    <AiOutlineHeart />
                    </IconContext.Provider>
                    <p className="Nav_iconfont1">Wishlist</p>
                </div>

                <div className="for-icons1">
                    <IconContext.Provider value={{ className: "icon1" }}>
                    <BiShoppingBag />
                    </IconContext.Provider>
                    <p className="Nav_iconfont1">Your Cart</p>
                </div>
                <div 
                className="for-icons1">
                    <IconContext.Provider value={{ className: "icon1" }}>
                    <CgProfile />
                  </IconContext.Provider>
                  <p className="Nav_iconfont1">Profile</p>

                   
                    </div> 
                </div>
        </li>

                <li><input className="mobilenumber1" type="text" value="+91-9874561230" /></li>

        </div>
    </ul>
            <div className="navbar_3">
                <ul>
                    <li >Popular Gifts</li>
                    <li className="navbar3_2">How it works</li>
                    <li className="navbar3_2">Reach us</li>
                    <li className="navbar3_2">Testimonials</li>
                    <li className="navbar3_2">Same day delivery</li>
                    <li className="navbar3_2">Share your idea</li>
                    <li className="navbar3_2">location</li>
                </ul>
            </div>
    </div>
</div>
    
    )
}
export default Navbar;
