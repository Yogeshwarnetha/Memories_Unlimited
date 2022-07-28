import React from "react";
import { IconContext } from "react-icons/lib";
import { AiFillStar, AiOutlineStar }from "react-icons/ai"
import { RiCamera3Fill } from "react-icons/ri"
import { BiDish } from "react-icons/bi"
import './index.css';
import { ServicesImages } from "./ServicesImages";

const WeddingPlanning=()=>{
    return(
        <div>
             <div className="Event1">
                <div className="Crafting">
                     <p><span className="Wedding_color">Luxery</span><br/>
                        <span className="Wedding_color">at your doorstep</span>                     
                     </p>
                <div className="icons">
                        <div className="Wedding1">
                            <div className="for-icons">
                                <IconContext.Provider value={{ className: "icon" }}>
                                <AiFillStar/>
                                <p className="Nav_iconfont">Wedding Planning</p>
                                </IconContext.Provider>
                            </div>
                        </div>

                        <div className="Wedding2">
                            <div className="for-icons">
                                 <IconContext.Provider value={{ className: "icon" }}>
                                 <AiFillStar />
                                <p className="Nav_iconfont">Sangeet</p>
                                </IconContext.Provider>
                            </div>
                        </div>

                        <div className="Wedding3">
                            <div className="for-icons">
                            <IconContext.Provider value={{ className: "icon" }}>
                             <RiCamera3Fill/>
                            <p className="Nav_iconfont">Photography Services</p>
                            </IconContext.Provider>
                        </div> 
                    </div>

                    <div className="Wedding4">
                    <div className="for-icons">
                    <IconContext.Provider value={{ className: "icon" }}>
                    <BiDish/>
                    <p className="Nav_iconfont">Catering</p>
                    </IconContext.Provider>
                    </div> 
                    </div>

                    <div className="Wedding5">
                    <div className="for-icons">
                    <IconContext.Provider value={{ className: "icon" }}>
                    <AiFillStar/>
                    <p className="Nav_iconfont">Banquet Halls</p>
                    </IconContext.Provider>
                    </div> 
                    </div>

                </div>
                        <div >
                     <button className="Event_button"type="submit">see all services</button>
                        </div>
                </div>
                     <div className="WeddingBackground">
                         <img className="Event_Image1" src="https://media.weddingz.in/images/5b0286a0d1454df89340acb3a46baf2d/ludhiana-gardens-ludhiana-garden-6.jpg"/>
                    </div>
            </div>
            <div>
            <div className="map-container1">
                {ServicesImages.map(item=>(
                <div key={item.id}>
                <img className="Wedding_image" src={item.image}/>
                <div className="Wedding_head"><p >{item.head}</p>
                    </div>
                </div>
                ))} 
                </div>
            </div>

            <div className="Wedding_watch">
                <p>watch<br/>
                most loved <br/>
                Wedding gala</p>
                <div >
                     <button className="Wedding_button"type="submit">Plan your wedding</button>
                        </div>
            </div>

                    <div className="Wedding_Mu_1">
                        <div>
                            <img className="Wedding_Mu1" src="https://res.cloudinary.com/dfhisjy9w/image/upload/v1658926334/Screenshot_from_2022-07-27_18-21-54_d9hji9.png" />
                        </div>
                        <span className="Wedding_Planning_mu">
                            <p>
                            <span className="Wedding_Mu1_1">The Memories Unlimited</span>  <br/>
                            <span className="Wedding_Mu1_2">Wedding Planner</span><br/>
                            <span className="Wedding_Mu1_3">A wedding is a one-time celebration to be cherished by you and<br/>
                                your loved ones. We listen to understand and execute your dream<br/>
                                of fairytale wedding to reality. We are offering services in Jalandhar,<br/>
                                Moga, Chandigarh, Amritsar, Bathinda, Hoshiarpur, Ferozepur.  We <br/>
                                use our expertise and finesse to make your day a special one. We <br/>
                                provide you all our resources and contacts, managing abilities and <br/>
                                organizing all wedding services such as Theme Décor, Logistics, <br/>
                                Hospitality etc to make your perfect day free of worries and <br/>
                                tensions & Lets you enjoy the day with your loved ones and <br/>
                                invitees. We profound your wedding to a Concept Wedding from <br/>
                                very beginning.</span>
                            </p>
                            <div>
                                <button className="Wedding_button1" type="submit">Plan your wedding</button>
                            </div>
                        </span>
                    </div>

                    <div className="Wedding_Mu_2">
                        <div>
                            <img className="Wedding_Mu2" src="https://res.cloudinary.com/dfhisjy9w/image/upload/v1658926334/Screenshot_from_2022-07-27_18-21-54_d9hji9.png" />
                        </div>
                        <span className="Wedding_Planning_mu1">
                            <p>
                            <span className="Wedding_Mu2_1">The Memories Unlimited</span>  <br/>
                            <span className="Wedding_Mu2_2">Wedding Planner</span> <br/>
                            <span className="Wedding_Mu2_3">A wedding is a one-time celebration to be cherished by you and<br/>
                                your loved ones. We listen to understand and execute your dream<br/>
                                of fairytale wedding to reality. We are offering services in Jalandhar,<br/>
                                Moga, Chandigarh, Amritsar, Bathinda, Hoshiarpur, Ferozepur.  We <br/>
                                use our expertise and finesse to make your day a special one. We <br/>
                                provide you all our resources and contacts, managing abilities and <br/>
                                organizing all wedding services such as Theme Décor, Logistics, <br/>
                                Hospitality etc to make your perfect day free of worries and <br/>
                                tensions & Lets you enjoy the day with your loved ones and <br/>
                                invitees. We profound your wedding to a Concept Wedding from <br/>
                                very beginning.</span>
                            </p>
                            <div>
                                <button className="Wedding_button2" type="submit">Contact Us</button>
                            </div>
                        </span>
                    </div>


                    <div className="Wedding_Mu_3">
                        <div>
                            <img className="Wedding_Mu3" src="https://res.cloudinary.com/dfhisjy9w/image/upload/v1658926334/Screenshot_from_2022-07-27_18-21-54_d9hji9.png" />
                        </div>
                        <span className="Wedding_Planning_mu2">
                            <p>
                            <span className="Wedding_Mu3_1">The Memories Unlimited</span>  <br/>
                            <span className="Wedding_Mu3_2">Wedding Planner</span> <br/>
                            <span className="Wedding_Mu3_3">A wedding is a one-time celebration to be cherished by you and<br/>
                                your loved ones. We listen to understand and execute your dream<br/>
                                of fairytale wedding to reality. We are offering services in Jalandhar,<br/>
                                Moga, Chandigarh, Amritsar, Bathinda, Hoshiarpur, Ferozepur.  We <br/>
                                use our expertise and finesse to make your day a special one. We <br/>
                                provide you all our resources and contacts, managing abilities and <br/>
                                organizing all wedding services such as Theme Décor, Logistics, <br/>
                                Hospitality etc to make your perfect day free of worries and <br/>
                                tensions & Lets you enjoy the day with your loved ones and <br/>
                                invitees. We profound your wedding to a Concept Wedding from <br/>
                                very beginning.</span>
                            </p>
                            <div>
                                <button className="Wedding_button3" type="submit">Contact Us</button>
                            </div>
                        </span>
                    </div>

                    
                    <div className="Wedding_Mu_4">
                        <div>
                            <img className="Wedding_Mu4" src="https://res.cloudinary.com/dfhisjy9w/image/upload/v1658926334/Screenshot_from_2022-07-27_18-21-54_d9hji9.png" />
                        </div>
                        <span className="Wedding_Planning_mu3">
                            <p>
                            <span className="Wedding_Mu4_1">The Memories Unlimited</span>  <br/>
                            <span className="Wedding_Mu4_2">Wedding Planner</span> <br/>
                            <span className="Wedding_Mu4_3">A wedding is a one-time celebration to be cherished by you and<br/>
                                your loved ones. We listen to understand and execute your dream<br/>
                                of fairytale wedding to reality. We are offering services in Jalandhar,<br/>
                                Moga, Chandigarh, Amritsar, Bathinda, Hoshiarpur, Ferozepur.  We <br/>
                                use our expertise and finesse to make your day a special one. We <br/>
                                provide you all our resources and contacts, managing abilities and <br/>
                                organizing all wedding services such as Theme Décor, Logistics, <br/>
                                Hospitality etc to make your perfect day free of worries and <br/>
                                tensions & Lets you enjoy the day with your loved ones and <br/>
                                invitees. We profound your wedding to a Concept Wedding from <br/>
                                very beginning.</span>
                            </p>
                            <div>
                                <button className="Wedding_button4" type="submit">Contact Us</button>
                            </div>
                        </span>
                    </div>


                    <div className="Wedding_Mu_5">
                        <div>
                            <img className="Wedding_Mu5" src="https://res.cloudinary.com/dfhisjy9w/image/upload/v1658926334/Screenshot_from_2022-07-27_18-21-54_d9hji9.png" />
                        </div>
                        <span className="Wedding_Planning_mu4">
                            <p>
                            <span className="Wedding_Mu5_1">The Memories Unlimited</span>  <br/>
                            <span className="Wedding_Mu5_2">Wedding Planner</span> <br/>
                            <span className="Wedding_Mu5_3">A wedding is a one-time celebration to be cherished by you and<br/>
                                your loved ones. We listen to understand and execute your dream<br/>
                                of fairytale wedding to reality. We are offering services in Jalandhar,<br/>
                                Moga, Chandigarh, Amritsar, Bathinda, Hoshiarpur, Ferozepur.  We <br/>
                                use our expertise and finesse to make your day a special one. We <br/>
                                provide you all our resources and contacts, managing abilities and <br/>
                                organizing all wedding services such as Theme Décor, Logistics, <br/>
                                Hospitality etc to make your perfect day free of worries and <br/>
                                tensions & Lets you enjoy the day with your loved ones and <br/>
                                invitees. We profound your wedding to a Concept Wedding from <br/>
                                very beginning.</span>
                            </p>
                            <div>
                                <button className="Wedding_button5" type="submit">Contact Us</button>
                            </div>
                        </span>
                    </div>


                    <div className="Wedding_Mu_6">
                        <div>
                            <img className="Wedding_Mu6" src="https://shoppass-bsite.s3.ap-southeast-1.amazonaws.com/upload/3612/2022/03/30/1648574725183887258.jpg" />
                        </div>
                        <span className="Wedding_Planning_mu5">
                            <p>
                            <span className="Wedding_Mu6_1">The Memories Unlimited</span>  <br/>
                            <span className="Wedding_Mu6_2">Wedding Planner</span> <br/>
                            <span className="Wedding_Mu6_3">A wedding is a one-time celebration to be cherished by you and<br/>
                                your loved ones. We listen to understand and execute your dream<br/>
                                of fairytale wedding to reality. We are offering services in Jalandhar,<br/>
                                Moga, Chandigarh, Amritsar, Bathinda, Hoshiarpur, Ferozepur.  We <br/>
                                use our expertise and finesse to make your day a special one. We <br/>
                                provide you all our resources and contacts, managing abilities and <br/>
                                organizing all wedding services such as Theme Décor, Logistics, <br/>
                                Hospitality etc to make your perfect day free of worries and <br/>
                                tensions & Lets you enjoy the day with your loved ones and <br/>
                                invitees. We profound your wedding to a Concept Wedding from <br/>
                                very beginning.</span>
                            </p>
                            <div>
                                <button className="Wedding_button6" type="submit">Contact Us</button>
                            </div>
                        </span>
                    </div>
                <div>
                    <span className="Wedding_gallery">Our Gallery</span>
                </div>

        </div>
    )
}

export default WeddingPlanning;