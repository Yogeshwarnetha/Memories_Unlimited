import React from "react";
import { IconContext, icons } from "react-icons/lib";
import {TbCurrencyRupee} from 'react-icons/tb'
import { Card } from 'react-bootstrap';
import './index.css';
 
const list = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1543886151-3bc2b944c718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVkZHl8ZW58MHx8MHx8&w=1000&q=80",
        price: 7999,
        price1: 9999,
        head: "Rooftop candle night dinner with surprise cake"

    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/top-view-chocolate-brownie-with-almond-cashew-nut-topping-rusty-wooden-table_35782-217.jpg?w=2000",
        price: 8999,
        price1: 10999,
        head: "Rooftop candle night dinner with surprise cake"
    },
    {
        id: 3,
        image: "https://www.thespruce.com/thmb/ZTghQfClR1di5wOFRPl9QaCo_Gs=/3000x2000/filters:fill(auto,1)/increase-humidity-for-houseplants-1902801-6-eadf73df8284421ca827c073d8a43fd2.jpg",
        price: 9999,
        price1: 11999,
        head: "Rooftop candle night dinner with surprise cake"
    },
    {
        id: 4,
        image: "https://t4.ftcdn.net/jpg/03/37/46/99/360_F_337469991_SrMOQzMp63I0daaWvxRuTYMK9fS22n7L.jpg",
        price: 6999,
        price1: 7999,
        head: "Rooftop candle night dinner with surprise cake",
        
    }
]
const Recommended = ()=> {
    return(
        <div className="recmain">
            <h3 className="recHeading">Recommended Gifts</h3>
            <ul className="list">
                <li className="recimageexpcard">
                <div >
                    <Card>
                    {list.map(item =>(
                    <div key={item.id}>
                    <img className="recimage" src = {item.image}  />
                    <p className="recHead"> {item.head}</p>
                   <div className="recicon_price"> <IconContext.Provider value={{className:"recicon"}}>
                  < TbCurrencyRupee/>
                  </IconContext.Provider>
                    <p>{item.price}</p>
                    <p className="recicon1">
                <IconContext.Provider value={{className:"recicon"}}>
               <p className="recicon1"></p>
                  < TbCurrencyRupee/>
                  </IconContext.Provider></p>
                    <p className="recDiscoun1">{item.price1}</p>
                    
                    </div>
                    <p className="recCus">Customizable. Romantic</p>
                    </div>
                ))}
            
                  </Card>
                  </div>
                </li>
            </ul>
             
        </div>

    )
}
export default Recommended;