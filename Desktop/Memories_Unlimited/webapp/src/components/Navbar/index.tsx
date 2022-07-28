import React, { useState } from "react";
import './index.css';
import {AiOutlineHeart} from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import{BiShoppingBag} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';


 const Navbar =()=>{
    

    
    return(
        
    <div>
        <div className="navbar-container">

            <ul>
            <li className="logo">Memories Unlimited</li>
                <div className="head1">
                    <li>Experiences</li>
                    <li>Gifts</li>
                    <li>Weddings</li>
                    <li>Events</li>
                    <li><div className="navbar2">
                    <input className="search-input" placeholder="Search" type="text" value="" name="search" />
                    </div></li>

        <li>
                <div className="icons">
                <div className="for-icons">
                    <IconContext.Provider value={{ className: "icon" }}>
                    <AiOutlineHeart />
                    </IconContext.Provider>
                    <p className="Nav_iconfont">Wishlist</p>
                </div>

                <div className="for-icons">
                    <IconContext.Provider value={{ className: "icon" }}>
                    <BiShoppingBag />
                    </IconContext.Provider>
                    <p className="Nav_iconfont">Your Cart</p>
                </div>
                <div className="for-icons">
                    <IconContext.Provider value={{ className: "icon" }}>
                    <CgProfile />
                  </IconContext.Provider>
                  <p className="Nav_iconfont">Profile</p>

                   
                </div> 
                </div>
        </li>

                <li><input className="mobilenumber" type="text" value="+91-9874561230" /></li>

        </div>
    </ul>
            <div className="navbar3">
                <ul>
                    <li >Popular Gifts</li>
                    <li className="navbar3_1">How it works</li>
                    <li className="navbar3_1">Reach us</li>
                    <li className="navbar3_1">Testimonials</li>
                    <li className="navbar3_1">Same day delivery</li>
                    <li className="navbar3_1">Share your idea</li>
                    <li className="navbar3_1">location</li>
                </ul>
            </div>
    </div>
</div>
    
    )
}
export default Navbar;
