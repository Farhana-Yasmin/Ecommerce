import React from "react";
import { GoDotFill } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuSearchX } from "react-icons/lu";

const Reusable2 = ({ photo, title, price }) => {
  return (
    <>
      <section>
        <div className="container mx-auto mt-10">
          <div className=" w-[95%] flex ml-5 justify-center">
            <div className=" h-[400px] w-[280px] group">
              <div className=" relative bg-[#F6F7FB] flex justify-center -pt-8 pb-2 overflow-hidden">
                <img className="" src={photo} alt="" />
                <div className="absolute -left-32 group-hover:left-3 duration-500 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  <p><LuShoppingCart className=" text-primary"/></p>
                  <p><FaRegHeart className=" text-primary"/></p>
                  <p><LuSearchX className=" text-primary"/></p>
                </div>
              </div>
              <h5 className="mt-5 font-lato font-bold text-center text-secondary">{title}</h5>
              <div className=" flex justify-center">
                <span><GoDotFill className="text-yellow-500" size="24"/></span>
                <span><GoDotFill className="text-primary" size="24"/></span>
                <span><GoDotFill className="text-[#8568FF]" size="24" /> </span>
              </div>
              <h6 className="mt-1 font-lato text-center text-secondary">${price}
              <span className=" text-primary ml-2">${price}</span>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reusable2;
