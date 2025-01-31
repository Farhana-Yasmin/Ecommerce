import React, { useContext, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuSearchX } from "react-icons/lu";
import { TiArrowSortedDown } from "react-icons/ti";
import { apiData } from "./ContextApi";


const ShopLeftSide = () => {
  const data = useContext(apiData);

  let [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  let [categoryShow, setCategoryShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false);
  let [beautyFilter, setBeautyFilter] = useState([]);

  const handleCategory = (c) => {
    let filteredProducts = data.filter((item) => item.category == c);
    setBeautyFilter(filteredProducts);
  };

  const handlPriceShow = () => {
    setPriceShow(!priceShow);
  };

  let [pricIitem, setPriceItem] = useState([]);

  const handlPriceProducts = (low, high) =>{
    let filteredProducts = data.filter((item) => item.price > low && item.price <= high);
       setPriceItem(filteredProducts)
}

  return (
    <>
      <section>
        <div className="container bg-[#FFFFFF] mx-auto mt-20">
          <div className="wraper flex">
            <div className=" w-[24%]">
              <div className="">
                <h3
                  onClick={() => setCategoryShow(!categoryShow)}
                  className=" text-black flex font-josef font-bold items-center gap-3 cursor-pointer"
                >
                  Product Brand
                  <TiArrowSortedDown />
                </h3>
                {categoryShow && (
                  <ul className=" w-52 h-36 overflow-y-scroll">
                    {category.map((item) => (
                      <li
                        className=" capitalize py-3 border-b-2 cursor-pointer text-secondary"
                        key={item}
                        onClick={() => handleCategory(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="">
                <h3
                  onClick={handlPriceShow}
                  className=" text-black font-josef font-bold flex items-center gap-3 cursor-pointer mt-10"
                >
                  Product Pricce
                  <TiArrowSortedDown />
                </h3>
                {priceShow && (
                  <ul className=" w-52 h-36 overflow-y-scroll">
                    <li onClick={()=>handlPriceProducts(0, 100)} className=" capitalize py-3 border-b-2 cursor-pointer text-secondary">
                      $0.00 - $100.00
                    </li>
                    <li onClick={()=>handlPriceProducts(100.01,200)}  className=" capitalize py-3 border-b-2 cursor-pointer text-secondary">
                      $100.01 - $200.00
                    </li>
                    <li onClick={()=>handlPriceProducts(200.01,500)}  className=" capitalize py-3 border-b-2 cursor-pointer text-secondary">
                      $200.01 - $500.00
                    </li>
                    <li onClick={()=>handlPriceProducts(500.01,10000)}  className=" capitalize py-3 border-b-2 cursor-pointer text-secondary">
                      $500.01 - $10000.00
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="">
              {beautyFilter.length == 0 ?
                 data.map((item) => (
                    <div
                      key={item}
                      className=" w-[921px] h-[240px] flex shadow-md mb-10"
                    >
                      <div className=" w-[35%] flex items-center px-4">
                        <img
                          className=" bg-[#F5F5F5] w-[400px] h-[197px]"
                          src={item.thumbnail}
                          alt=""
                        />
                      </div>
                      <div className=" w-[65%] ml-8 mt-6">
                        <div className=" flex">
                          <h4 className=" font-josef font-bold text-[18px] text-[#111C85]">
                            {item.title}
                          </h4>
                          <div className=" flex items-center ml-32">
                            <span>
                              <GoDotFill
                                className="text-yellow-500"
                                size="24"
                              />
                            </span>
                            <span>
                              <GoDotFill className="text-primary" size="24" />
                            </span>
                            <span>
                              <GoDotFill className="text-[#8568FF]" size="24" />
                            </span>
                          </div>
                        </div>
                        <div className=" flex items-center mt-2">
                          <span className=" text-sm text-secondary font-bold">
                            ${item.price}
                          </span>
                          <span className=" text-sm text-primary font-bold ml-4">
                            $52.00
                          </span>
                          <span className=" ml-10">
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-[#B2B2B2]" />
                          </span>
                        </div>
                        <div className=" h-16 mt-5">
                          <p className=" text-[#9295AA] text-[16px]">
                            {item.description}
                          </p>
                        </div>
                        <div className=" flex items-center gap-6 mt-4">
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <LuShoppingCart />
                          </span>
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <FaRegHeart />
                          </span>
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <LuSearchX />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  pricIitem.length > 0 
                  ?
                  pricIitem.map((item) => (
                    <div
                      key={item}
                      className=" w-[921px] h-[230px] flex shadow-md mb-10"
                    >
                      <div className=" w-[35%] flex items-center px-4">
                        <img
                          className=" bg-[#F5F5F5] w-[400px] h-[197px]"
                          src={item.thumbnail}
                          alt=""
                        />
                      </div>
                      <div className=" w-[65%] ml-8 mt-6">
                        <div className=" flex">
                          <h4 className=" font-josef font-bold text-[18px] text-[#111C85]">
                            {item.title}
                          </h4>
                          <div className=" flex items-center ml-32">
                            <span>
                              <GoDotFill
                                className="text-yellow-500"
                                size="24"
                              />
                            </span>
                            <span>
                              <GoDotFill className="text-primary" size="24" />
                            </span>
                            <span>
                              <GoDotFill className="text-[#8568FF]" size="24" />
                            </span>
                          </div>
                        </div>
                        <div className=" flex items-center mt-2">
                          <span className=" text-sm text-secondary font-bold">
                            {item.price}
                          </span>
                          <span className=" text-sm text-primary font-bold ml-4">
                            $52.00
                          </span>
                          <span className=" ml-10">
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-[#B2B2B2]" />
                          </span>
                        </div>
                        <div className=" h-16 mt-5">
                          <p className=" text-[#9295AA] text-[16px]">
                            {item.description}
                          </p>
                        </div>
                        <div className=" flex items-center gap-6 mt-4">
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <LuShoppingCart />
                          </span>
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <FaRegHeart />
                          </span>
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <LuSearchX />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                  : 
                  beautyFilter.map((item) => (
                    <div
                      key={item}
                      className=" w-[921px] h-[230px] flex shadow-md mb-10"
                    >
                      <div className=" w-[35%] flex items-center px-4">
                        <img
                          className=" bg-[#F5F5F5] w-[400px] h-[197px]"
                          src={item.thumbnail}
                          alt=""
                        />
                      </div>
                      <div className=" w-[65%] ml-8 mt-6">
                        <div className=" flex">
                          <h4 className=" font-josef font-bold text-[18px] text-[#111C85]">
                            {item.title}
                          </h4>
                          <div className=" flex items-center ml-32">
                            <span>
                              <GoDotFill
                                className="text-yellow-500"
                                size="24"
                              />
                            </span>
                            <span>
                              <GoDotFill className="text-primary" size="24" />
                            </span>
                            <span>
                              <GoDotFill className="text-[#8568FF]" size="24" />
                            </span>
                          </div>
                        </div>
                        <div className=" flex items-center mt-2">
                          <span className=" text-sm text-secondary font-bold">
                            {item.price}
                          </span>
                          <span className=" text-sm text-primary font-bold ml-4">
                            $52.00
                          </span>
                          <span className=" ml-10">
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-yellow-400" />
                          </span>
                          <span>
                            <MdOutlineStar className=" text-[#B2B2B2]" />
                          </span>
                        </div>
                        <div className=" h-16 mt-5">
                          <p className=" text-[#9295AA] text-[16px]">
                            {item.description}
                          </p>
                        </div>
                        <div className=" flex items-center gap-6 mt-4">
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <LuShoppingCart />
                          </span>
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <FaRegHeart />
                          </span>
                          <span className=" flex items-center justify-center w-8 h-8 rounded-full shadow-md border bg-[#FFFFFF]">
                            <LuSearchX />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopLeftSide;




