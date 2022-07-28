import React from "react";
import { IconContext, icons } from "react-icons/lib";
import {TbCurrencyRupee} from 'react-icons/tb'
import { Card } from 'react-bootstrap';
import './index.css';
 
const list = [
    {
        id: 1,
        image: "https://www.namesnack.com/images/namesnack-event-planning-business-names-6000x4000-20200728.jpeg?crop=21:16,smart&width=420&dpr=2",
        price: 7999,
        price1: 9999,
        head: "Rooftop candle night dinner with surprise cake"

    },
    {
        id: 2,
        image: "https://cdn.shopify.com/s/files/1/0502/9239/2111/products/Birthday-Party-500-Piece-Jigsaw-Puzzle_1024x1024@2x.jpg?v=1635127840",
        price: 8999,
        price1: 10999,
        head: "Rooftop candle night dinner with surprise cake"
    },
    {
        id: 3,
        image: "https://www.kadvacorp.com/wp-content/uploads/2017/02/cheap-wedding-decorations.jpg",
        price: 9999,
        price1: 11999,
        head: "Rooftop candle night dinner with surprise cake"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1615912688118-8ad07ba17eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmVhdGhlciUyMGJvYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 6999,
        price1: 7999,
        head: "Rooftop candle night dinner with surprise cake",
        
    }
]
const Decoration = ()=> {
    return(
        <div className="decmain">
            <h3 className="decHeading">Popular Decoration</h3>
            <ul className="list">
                <li className="decimageexpcard">
                <div >
                    <Card>
                    {list.map(item =>(
                    <div key={item.id}>
                    <img className="decimage" src = {item.image}  />
                    <p className="decHead"> {item.head}</p>
                   <div className="decicon_price"> <IconContext.Provider value={{className:"decicon"}}>
                  < TbCurrencyRupee/>
                  </IconContext.Provider>
                    <p>{item.price}</p>
                    <p className="decicon1">
                <IconContext.Provider value={{className:"decicon"}}>
               <p className="decicon1"></p>
                  < TbCurrencyRupee/>
                  </IconContext.Provider></p>
                    <p className="decDiscoun1">{item.price1}</p>
                    
                    </div>
                    <p className="decCus">Customizable. Romantic</p>
                    </div>
                ))}
            
                  </Card>
                  </div>
                </li>
            </ul>
             
        </div>

    )
}
export default Decoration;