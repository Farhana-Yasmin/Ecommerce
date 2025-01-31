import { useContext } from "react";
import { apiData } from "./ContextApi";
import Slider from "react-slick";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuSearchX } from "react-icons/lu";


const Featured = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  const data = useContext(apiData);

  return (
    <>
      <section>
        <div className="container relative px-14 mx-auto">
          <div className=" text-center mb-4">
            <h2 className="font-josef font-bold text-[46px] text-[#1A0B5B] pt-20">Featured Products</h2>
          </div>
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="!w-[90%] shadow-lg mb-5 group">

                <div className="relative bg-[#F6F7FB] flex justify-center pt-12 pb-8 overflow-hidden">
                  <img src={item.thumbnail} alt="" />
                  <div className="absolute -left-32 group-hover:left-3 duration-500 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                    <p><LuShoppingCart className=" text-[#1c1c1d]" /></p>
                    <p><FaRegHeart className=" text-[#1c1c1d]" /></p>
                    <p><LuSearchX className=" text-[#1c1c1d]" /></p>
                  </div>

                </div>
                <div className=" text-center py-5">
                  <h2 className=" font-lato font-bold text-[18px] text-primary">{item.title}</h2>
                  <h5 className=" font-josef font-normal text-[14px] text-[#151875]">Code - Y523201</h5>
                  <p className=" font-josef font-normal text-[14px] text-[#151875]">${item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Featured;