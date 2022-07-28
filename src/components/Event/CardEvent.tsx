import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './index.css';

const Card_Event=[
    {
        id:1,
        image:"https://momlovesbest.com/wp-content/uploads/2020/01/Girl-First-Birthday-Party-Ideas-scaled.jpg",
        head:"Rooftop candle night dinner with surprise cake",
        data:"Browse thousands of gifts,experiences and memories for your loved ones and pick your favourite oneBrowse thousands of gifts,experiences and memories for your loved ones and pick your favourite oneBrowse thousands of gifts,experiences and memories."
    },
    {
        id:2,
        image:"https://media.istockphoto.com/photos/hindu-wedding-ceremony-picture-id638017890?k=20&m=638017890&s=612x612&w=0&h=Em76pi2hcd7D-7w40Y0hSz0wR5I5CEGdWQf1-rnXGQ4=",
        head:"Rooftop candle night dinner with surprise cake",
        data:"Browse thousands of gifts,experiences and memories for your loved ones and pick your favourite oneBrowse thousands of gifts,experiences and memories for your loved ones and pick your favourite oneBrowse thousands of gifts,experiences and memories."
    },
    {
        id:3,
        image:"https://media.istockphoto.com/photos/couple-enjoying-a-romantic-dinner-by-candlelight-picture-id506823516?k=20&m=506823516&s=612x612&w=0&h=dVL2Y34qttEn6hR0bpObP6UUxs3rCKD_dQnD7i5RJxw=",
        head:"Rooftop candle night dinner with surprise cake",
        data:"Browse thousands of gifts,experiences and memories for your loved ones and pick your favourite oneBrowse thousands of gifts,experiences and memories for your loved ones and pick your favourite oneBrowse thousands of gifts,experiences and memories."
    }
]


const CardEvent =()=>{
    return(
        <div>
            <Card className="CardEvent">
                <CardActionArea>
                    <div>
                        {Card_Event.map(item=>(
                            <div key={item.id}>
                                <img className="CardImage_Event"src={item.image}/>
                                <div><p >{item.head}</p>
                                <div><p >{item.data}</p>
                                </div>
                                
                                </div>
                            </div>
                        ))}
                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardEvent;