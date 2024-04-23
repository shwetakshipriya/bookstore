import React from "react";
import list from "../../public/list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";




// eslint-disable-next-line react/prop-types
function Freebook() {
  
  const filterData = list.filter((data) => data.category === "Free");
 
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
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-xl pb-2 ">Free Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolorum, voluptatem, quae, quos quas quia quibusdam quod fugiat
          voluptates doloremque error. Quisquam dolorum,
          
        </p>
      </div>
      <div> 
      <Slider {...settings}>
      {filterData.map((item) => (
              // eslint-disable-next-line react/prop-types
              <Cards item={item} key={item.id} />
            ))}
      </Slider>
      </div>


    </div>
    </>
  );
}

export default Freebook;


















