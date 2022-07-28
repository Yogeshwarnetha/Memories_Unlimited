import React from "react";
import { NavItem } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './index.css'

const list = [
    {
        id:1,
        image: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_417,w_5000,h_2500,r_0,c_crop,q_80,fl_progressive/w_1650,f_auto,c_fit/chlorofeel-hotels-resorts-llp/amish-thakkar-BEdxXAiRfRM-unsplash_dkni04"
    },
    {
        id:2,
        image: "http://gbc-education.org/wp-content/uploads/sites/2/2022/03/charanjeet-dhiman.jpg"
    },
    
    {
        id:3,
        image: "https://images.unsplash.com/photo-1619734089700-842e56497353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFsZGl8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        id:4,
        image: "https://bondwithbrands.com/wp-content/uploads/2021/12/Untitled-design-13-2-450x300.jpg"
    },
    {
        id:5,
        image: "https://www.seventhsecond.co.uk/wp-content/uploads/2020/08/Bride-And-Groom-Wedding-Dance-Floor.jpg"
    },
    {
        id:6,
        image: "https://images.unsplash.com/photo-1617995469003-af6e42b42a5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80"
    },
    {
        id:7,
        image: "http://candlflooring.com/wp-content/uploads/2018/09/arseniy-mukhachev-746603-unsplash.jpg"
    },
    {
        id:8,
        image: "https://static.wixstatic.com/media/nsplsh_c060fda1a7844203a8bf7996690eccab~mv2.jpg/v1/fill/w_640,h_630,al_c,q_85,usm_1.20_1.00_0.01,enc_auto/nsplsh_c060fda1a7844203a8bf7996690eccab~mv2.jpg"
    },
    {
        id:9,
        image: "https://www.citylit.ac.uk/media/catalog/product/cache/f47e1b8a08d9dcd5f86ed80364515058/c/r/craft_focus_grammar_syntax_a_taster.jpg"
    },
    {
        id:10,
        image: "https://c.ndtvimg.com/2019-11/4upemsq_party-generic_295x200_03_November_19.jpg"
    },
    {
        id:11,
        image: "https://www.ctvnews.ca/polopoly_fs/1.5193335.1605659073!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg"
    },
    {
        id:12,
        image: "https://rlv.zcache.com.au/lots_of_fireworks_postcard-re2155ce6191e49b6b5bd497d1dae9999_ucbjp_307.jpg"
    },
    {
        id:13,
        image: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id:14,
        image: "https://res.cloudinary.com/mommy-nearest/image/upload/c_crop,h_2150,w_4838,x_0,y_33/c_scale,f_auto,fl_lossy,q_75,w_848/u0uwe9b1zyiehhw5qj4c"
    },
    {
        id:15,
        image: "https://cdn.shopify.com/s/files/1/0549/5639/2609/products/Untitleddesign_1_86729ff2-5da9-46e6-99e6-f105bfdd2d5d_1024x1024@2x.png?v=1620337078"
    },
    {
        id:16,
        image: "https://ghost.noissue.co/content/images/2021/06/the-creative-exchange-UbujEmVOTXg-unsplash.jpg"
    }

]
const Gallery = ()=> {
    return(
        <div>
            <Navbar/>
        <div className="gallery1">
            
                {list.map(item =>(
                <div key={item.id}>
                    <img className="galleryimage" src={item.image}/>
                </div>
                ))}
            
        </div>
        <Footer/>
        </div>
    )
}
export default Gallery;