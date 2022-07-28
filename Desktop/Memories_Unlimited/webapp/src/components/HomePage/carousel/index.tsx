import React from "react";
import Slider from "react-slick";
import './index.css';

const list = [
    {
        id:1,
        image:"https://cdn.shopify.com/s/files/1/0101/5444/2810/products/25GC_2000x.png?v=1601069762"
    },
    {
        id:2,
        image:"https://static.vecteezy.com/system/resources/thumbnails/002/291/029/small/scenic-wedding-decorations-free-video.jpg"
    },
    {
        id:3,
        image:"https://blog-admin.voylla.com/voylla-blog/wp-content/uploads/2019/01/valentines-day-gifts-ideas.jpg"
    },
    {
        id:4,
        image:"https://sportshub.cbsistatic.com/i/2022/01/27/41916ece-54b7-44ea-8db0-757ef67697fd/pc-valentine-gifts-her-intro-image.jpg"
    }
]

const carousel = ()=> {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides"
      };
  
    return(
            <Slider {...settings}>
              {list.map((item) => {
                return (
                  <div className="wrapper" key={item.id}>
                    <img className="sliderImg" src={item.image} />
                  </div>
                );
              })}
            </Slider>
    )
}
export default carousel;