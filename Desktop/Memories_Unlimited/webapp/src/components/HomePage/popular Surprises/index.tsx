import React from "react";
import { IconContext, icons } from "react-icons/lib";
import {TbCurrencyRupee} from 'react-icons/tb'
import { Card } from 'react-bootstrap';
import './index.css';
 
const list = [
    {
        id: 1,
        image: "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/bwcogx3kq39azr3q_1644231328.jpeg",
        price: 7999,
        price1: 9999,
        head: "Rooftop candle night dinner with surprise cake"

    },
    {
        id: 2,
        image: "https://im.indiatimes.in/content/2022/Feb/Valentine12_6208b96330e9e.jpg?w=725&h=474&cc=1",
        price: 8999,
        price1: 10999,
        head: "Rooftop candle night dinner with surprise cake"
    },
    {
        id: 3,
        image: "https://www.comfortedkitty.com/wp-content/uploads/2021/06/image4-4-1200x675-cropped.jpg",
        price: 9999,
        price1: 11999,
        head: "Rooftop candle night dinner with surprise cake"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1594066521341-330a79387ec3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlY2lhbCUyMG9jY2FzaW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        price: 6999,
        price1: 7999,
        head: "Rooftop candle night dinner with surprise cake",
        
    }
]
const Surprises = ()=> {
    return(
        <div className="surmain">
            <h3 className="surHeading">Popular Surprises</h3>
            <ul className="list">
                <li className="surimageexpcard">
                <div >
                    <Card>
                    {list.map(item =>(
                    <div key={item.id}>
                    <img className="surimage" src = {item.image}  />
                    <p className="surHead"> {item.head}</p>
                   <div className="suricon_price"> <IconContext.Provider value={{className:"suricon"}}>
                  < TbCurrencyRupee/>
                  </IconContext.Provider>
                    <p>{item.price}</p>
                    <p className="suricon1">
                <IconContext.Provider value={{className:"suricon"}}>
               <p className="suricon1"></p>
                  < TbCurrencyRupee/>
                  </IconContext.Provider></p>
                    <p className="surDiscoun1">{item.price1}</p>
                    
                    </div>
                    <p className="surCus">Customizable. Romantic</p>
                    </div>
                ))}
            
                  </Card>
                  </div>
                </li>
            </ul>
             
        </div>

    )
}
export default Surprises;