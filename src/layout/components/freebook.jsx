import React from 'react'
import List from "../../../public/list.json";
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Freebook() {
    // Filter the data to get only the free books
    const Filterdata = List.filter(data => data.category === "Free");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div >
                <h1 className='font-bold py-2'>Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos eius est, dolore non voluptatum, sint minus deserunt sed optio laboriosam repudiandae</p>
            </div>
            <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
           </div>
        </>
    )
}
