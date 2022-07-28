import React from "react";
import { Card} from "react-bootstrap";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Experiences from "../../HomePage/popular Experiences";
import Decoration from "../../HomePage/popular decoration";
import './index.css'

const list=[
    {
        id:1,
        image: "https://res.cloudinary.com/debi2p5ek/image/upload/c_fill,g_face,h_350,w_330/14198-ruthson-zimmerman-ws4wd-vj9m0-unsplash-2-1-1-331a1fd5.jpg",
        title:"for him"
    },
    {
        id:2,
        image: "https://realstatus.in/wp-content/uploads/2021/09/Trending-Whatsapp-New-Status-Video-2022-Download-Trending-4K-Status.jpg",
        title:"for her"
    },
    {
        id:3,
        image: "https://www.namesnack.com/images/namesnack-delightful-business-names-2400x3613-20211130.jpg?crop=1:1,smart&width=1200&dpr=2",
        title:"for kids"
    },
    {
        id:4,
        image: "https://www.smartparents.sg/sites/default/files/buyers-guide-comfy-baby-towels-and-robes-main.jpg",
        title:"for babies"
    },
    {
        id:5,
        image: "https://curiousworld-static-files.s3.amazonaws.com/blog/hand-gestures.jpg",
        title:"for mother"
    },
    {
        id:6,
        image: "https://boomsumo.com/wp-content/uploads/2019/06/Fathers-Day-Quotes-Happy-Fathers-Day-Messages-and-Wishes-1.jpg",
        title:"for father"
    },
    {
        id:7,
        image: "https://traveltomorrow.com/wp-content/uploads/2021/09/retire.jpg",
        title:"for parents"
    },
    {
        id:8,
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        title:"for friends"
    },
    {
        id:9,
        image: "https://accudatasc.com/wp-content/uploads/2020/12/conference-room-1.jpg",
        title:"for corporate"
    },
    {
        id:10,
        image: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
        title:"for family"
    },
    {
        id:11,
        image: "https://accudatasc.com/wp-content/uploads/2020/12/conference-room-1.jpg",
        title:"for corporate"
    },
    {
        id:12,
        image: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
        title:"for family"
    }


]

const Photolist = ()=> {
    return(
        <div>
            <Navbar/>
        
        <div>
            
                <ul className="Photolist_main">
                    <li className="photolist_list">
                    <Card>
           {list.map(item=>(
            <div key={item.id}>
                <img className="Photolist_image" src={item.image}/>
                <div className="Photolist_title"><p >{item.title}</p>
                    </div>
                </div>
                ))} 
                </Card>
                    </li>
                    
                </ul>
                <div>
                <Experiences/>
                <br/>
                <div className="Decoration_PhotoList">
                <Decoration/>
                </div>
                </div>
                
                
                
        </div>
            <Footer/>
        </div>
    )
}
export default Photolist;