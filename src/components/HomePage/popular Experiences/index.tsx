import React from "react";
import { IconContext, icons } from "react-icons/lib";
import {TbCurrencyRupee} from 'react-icons/tb'
import { Card } from 'react-bootstrap';
import './index.css';
 
const list = [
    {
        id: 1,
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/9f/c1/8d.jpg",
        price: 7999,
        price1: 9999,
        head: "Rooftop candle night dinner with surprise cake"

    },
    {
        id: 2,
        image: "https://www.one-stop-party-ideas.com/images/50th-Birthday-Balloons.jpg",
        price: 8999,
        price1: 10999,
        head: "Rooftop candle night dinner with surprise cake"
    },
    {
        id: 3,
        image: "https://static.standard.co.uk/2021/08/12/11/christina-hernandez-D6zm7zVYNLk-unsplashjpg?width=1200&auto=webp&quality=75",
        price: 9999,
        price1: 11999,
        head: "Rooftop candle night dinner with surprise cake"
    },
    {
        id: 4,
        image: "https://www.namesnack.com/images/namesnack-event-planning-business-names-6000x4000-20200728.jpeg?crop=21:16,smart&width=420&dpr=2",
        price: 6999,
        price1: 7999,
        head: "Rooftop candle night dinner with surprise cake",
        
    }
]
const Experiences = ()=> {
    return(
        <div className="expmain">
            <h3 className="ExpHeading">Popular Experiences</h3>
            <ul className="list">
                <li className="expimageexpcard">
                <div >
                    <Card>
                    {list.map(item =>(
                    <div key={item.id}>
                    <img className="expimage" src = {item.image}  />
                    <p className="expHead"> {item.head}</p>
                   <div className="expicon_price"> <IconContext.Provider value={{className:"expicon"}}>
                  < TbCurrencyRupee/>
                  </IconContext.Provider>
                    <p>{item.price}</p>
                    <p className="expicon1">
                <IconContext.Provider value={{className:"expicon"}}>
               <p className="expicon1"></p>
                  < TbCurrencyRupee/>
                  </IconContext.Provider></p>
                    <p className="ExpDiscoun1">{item.price1}</p>
                    </div>
                    <p className="expCus">Customizable. Romantic</p>
                    </div>
                ))}
            
                  </Card>
                  </div>
                </li>
            </ul>
             
        </div>

    )
}
export default Experiences;