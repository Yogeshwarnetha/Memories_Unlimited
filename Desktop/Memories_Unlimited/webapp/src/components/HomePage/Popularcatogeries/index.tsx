import React from "react";
import { Card } from "react-bootstrap";
import './index.css';

const list = [
    { id: 1,
        image: "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGhhbmR8ZW58MHx8MHx8&w=1000&q=80",
        head: "Wedding Planner"
    },
    {
        id:2,
        image: "https://miro.medium.com/max/1400/1*bTABWLAcezb10ABePNoTaw.jpeg",
        head: "Birthday Celebration"
    },
    {
        id:3,
        image: "https://static.vecteezy.com/system/resources/previews/005/099/587/original/happy-valentine-s-day-poster-or-banner-with-sweet-hearts-and-cute-gift-box-on-red-background-promotion-and-shopping-template-or-background-for-love-and-valentine-s-day-concept-vector.jpg",
        head: "Valentine Gifts"
    },
    {
        id:4,
        image: "https://justhouseplants.com/wp-content/uploads/2021/10/Ficus-lyrata.jpg",
        head:   "Gift a plant"
    },
    {
        id:5,
        image: "https://m.media-amazon.com/images/I/516h8wxNcoL.jpg",
        head: "Gifts for her"
    },
    {
        id:6,
        image:"https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake1.jpg?v=1632143747",
        head: "Gifts for Dad"
    },
    {
        id:7,
        image:"https://images.unsplash.com/photo-1543886151-3bc2b944c718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVkZHl8ZW58MHx8MHx8&w=1000&q=80",
        head: "Valentine Gifts"
    },
    {
        id:8,
        image:"https://img.wallpapersafari.com/desktop/1440/900/38/94/U3r9pn.jpg",
        head: "Valentine Gifts"
    },
    {
        id:9,
        image:"https://cdn0.weddingwire.in/articles/images/3/5/1/9/img_59153/t30_goldcoupleringsforengagement-pixelenastudio-lead.jpg",
        head: "Valentine Gifts"
    }
]

const Popularcatogeries = ()=> {
    return(
        <div>
            <h3 className="Popular">Popular categories</h3>
            
                <ul className="card">
                    <li>
                    <div className="image">
                    <Card>
                {list.map(item =>(
                    <div key={item.id}>
                        <img className="image"src={item.image}  />
                        <p className="Text">{item.head}</p>
                    </div>
                ))}
                </Card>
                </div>
                    </li>
                </ul>
                
            </div>


       
    )
}
export default Popularcatogeries;