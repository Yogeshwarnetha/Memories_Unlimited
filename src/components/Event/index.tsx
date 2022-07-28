import React from "react";
import './index.css';
import { Eventlist } from "./images";
import { SocialEvents } from "./images";
import { CorporateEvents } from "./images"
import Decoration from "../HomePage/popular decoration";
import Navbar from "../Navbar1";
import Footer from "../Footer";
import {AiOutlineStar} from 'react-icons/ai'
import { IconContext } from "react-icons/lib";
// import CardEvent from './CardEvent';

const Event =()=>{
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="Event1">
                <div className="Crafting">
                     <p>Crafting <span className="Event_main">Experiences </span><br/>
                        and bringing life to <br/>
                        <span className="Event_main">celebrations</span></p>

                        <span className="Event2">
                            <p>
                        Decorations . Photography. <br/>
                        Flowrists . Event organizing . <br/>
                        Parties . Anniversary . Reunions. <br/>
                        Corporate events and many more</p>
                        </span>
                        <div >
                     <button className="Event_button"type="submit">see all services</button>
                        </div>
                </div>
                     <div className="EventBackground">
                         <img className="Event_Image1" src="https://res.cloudinary.com/dfhisjy9w/image/upload/v1658746478/Screenshot_from_2022-07-25_16-20-02_mdfbvo.png"/>
                    </div>
            </div>
            <div className="Event_2">
                <p className="Event_Services">Our Services</p>
                <div className="map-container">
                {Eventlist.map(item=>(
                <div key={item.id}>
                <img className="Event_image" src={item.image}/>
                <div className="Event_head"><p >{item.head}</p>
                    </div>
                </div>
                ))} 
                </div>
            </div>
            <div>
                <p className="Event_Social">Social Events
                <button className="Social_button" type="submit">see all </button> </p>
                </div>

                <div className="Event_3">
                <div className="map-container">
                {SocialEvents.map(item=>(
                <div key={item.id}>
                <img className="Event_image" src={item.image}/>
                <div className="Event_head"><p >{item.head}</p>
                    </div>
                </div>
                ))} 
                </div>

            </div>
            <div>
                <p className="Event_Social">Corporate Events
                <button className="Social_button" type="submit">see all </button> </p>
                </div>

                <div className="Event_4">
                <div className="map-container">
                {CorporateEvents.map(item=>(
                <div key={item.id}>
                <img className="Event_image" src={item.image}/>
                <div className="Event_head"><p >{item.head}</p>
                    </div>
                </div>
                ))} 
                </div>
            </div>

            <Decoration/>
            
                 <div className="SocaialEvent_1">
                    
                        <div className="Events_social1">
                            <p className="Events_Social2">Social Events</p>
                            <p className="Events_Social3">A wedding is a one-time celebration to be cherished by you and <br/>
                                your loved ones. We listen to understand and execute your dream <br/>
                                of fairytale wedding to reality.</p>
                            <p className="Events_Social4">Birthday Parties<br/>
                                Family events/Occassions<br/>
                                Anniversaries<br/>
                                Reunions<br/>
                                Vacation Parties<br/>
                                inhouse celebrations</p>
                         </div>
                        <div className="EventBackground1">
                            <img className="Event_Image_1" src="https://www.happywedding.app/blog/wp-content/uploads/2021/12/Outdoor-Wedding-Decoration.jpg"/>
                        </div>
                        <div >
                     <button className="Event_button_Social"type="submit">Plan your celebrations</button>
                        </div>
                </div>
                {/* <div>
                    <CardEvent/>
                </div>
                 */}


<div className="SocaialEvent_1_1">
                    
                    <div className="Events_social1_1">
                        <p className="Events_Social2_1">Corporate Events</p>
                        <p className="Events_Social3_1">A wedding is a one-time celebration to be cherished by you and <br/>
                        your loved ones. We listen to understand and execute your dream<br/>
                         of fairytale wedding to reality. </p>
                        <p className="Events_Social4_1">
                        Distributor’s Meet<br/>
                        Customer Interaction Event<br/>
                        Product Launch<br/>
                        Company’s Official Meet<br/>
                        Press Conference<br/>
                        Brand Promotion

                        <span className="Event_Project">or what is the need of the Project.</span>
                        </p>
                     </div>
                    <div className="EventBackground1_1">
                        <img className="Event_Image_1_1" src="https://media.istockphoto.com/photos/bound-by-business-picture-id541114144?k=20&m=541114144&s=612x612&w=0&h=7Ted1V-1y0jP8w0zsxPWHDxE8T-U8TnMJ0D-9Tli3Yw="/>
                    </div>
                    <div >
                 <button className="Event_button_Social_1"type="submit">Plan your event</button>
                    </div>
            </div>
            <div>
                <p className="Event_Social">Services Gallery
                <button className="Social_button" type="submit">see all </button> </p>
                </div>

                <div className="Event_3">
                <div className="map-container">
                {SocialEvents.map(item=>(
                <div key={item.id}>
                <img className="Event_image" src={item.image}/>
                <div className="Event_head"><p >{item.head}</p>
                    </div>
                </div>
                ))} 
                </div>

            </div>
            <div>
                <p className="Event_Social">Social Events Gallery
                <button className="Social_button" type="submit">see all </button> </p>
                </div>

                <div className="Event_3">
                <div className="map-container">
                {SocialEvents.map(item=>(
                <div key={item.id}>
                <img className="Event_image" src={item.image}/>
                <div className="Event_head"><p >{item.head}</p>
                    </div>
                </div>
                ))} 
                </div>

            </div>
            <div>
                <p className="Event_Social">Corporate Events gallery
                <button className="Social_button" type="submit">see all </button> </p>
                </div>

                <div className="Event_4">
                <div className="map-container">
                {CorporateEvents.map(item=>(
                <div key={item.id}>
                <img className="Event_image" src={item.image}/>
                <div className="Event_head"><p >{item.head}</p>
                    </div>
                </div>
                ))} 
                </div>
            </div>
                <div>
                    <Footer/>
                </div>
        </div>
    )
}

export default Event;