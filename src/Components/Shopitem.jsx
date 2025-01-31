import { useContext, useEffect, useState } from "react";

import { TiArrowSortedDown } from "react-icons/ti";
import { FaBorderAll } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import Reusable2 from "./Reauseble2";
import { apiData } from "./ContextApi";

const Shopitem = () => {
  let data = useContext(apiData);

  let [category, setCategory] = useState([]);
  // let [price, setPrice] = useState([]);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
    // setPrice([...new Set(data.map((item) => item.price))]);
  }, [data]);

  let [categoryItems, setCategoryItems] = useState([]);

  const handleCategoryProducts = (cat) => {
    let filteredProducts = data.filter((item) => item.category === cat);
    setCategoryItems(filteredProducts);
  };

  let [catShow, setCatShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false);

  const handleCatShow = () => {
    setCatShow(!catShow);
  };

  const handlePriceShow = () => {
    setPriceShow(!priceShow);
  };

  let [priceItems, setPriceItems] = useState([]);

  const handlePriceProducts = (low, high) => {
    let filteredProducts = data.filter(
      (item) => item.price > low && item.price <= high
    );
    setPriceItems(filteredProducts);
  };

  let [currentPage, setCurrentpage] = useState(1);
  let [perPage, setPerPage] = useState(30);

  let lastItemIndex = currentPage * perPage;
  let firstItemIndex = lastItemIndex - perPage;

  let totalPages = Math.ceil(data.length / perPage);
  let currentPageProducts = data.slice(firstItemIndex, lastItemIndex);

  let Pages = [];

  for (let i = 1; i < totalPages; i++) Pages.push(i);

  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentpage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentpage(currentPage - 1);
    }
  };

  const handleGoToPage = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  const handlePerPage = (e) => {
     setPerPage(parseInt(e.target.value || 30));
  }

  return (
    <>
      
      <div className=" container mx-auto mt-20">
        <div className=" flex gap-3">
          <div className=" w-[30%]">
            <h3 className=" font-josef text-[22px] text-[#151875]">
              Ecommerce Acceories & Fashion item{" "}
            </h3>
            <h5 className=" text-[18px] text-[#8A8FB9]">
              About 9,620 results (0.62 seconds)
            </h5>
          </div>

          <div className=" flex gap-2 w-[65%] ml-24">
            <div className=" flex gap-2 items-center">
              <p className=" font-josef text-base text-[#3F509E]">Per Page:</p>
              <input
              onChange={handlePerPage}
                type="text"
                className="border px-2 py-2 border-gray-300 w-20 h-9 font-lato outline-none text-xs"
                min=""
                defaultValue=""
              />
            </div>

            <div className=" flex gap-2 items-center">
              <label
                htmlFor="sort"
                className=" font-lato font-normal text-base text-[#3F509E]"
              >
                Sort By:
              </label>
              <select
                id="sort"
                className=" border px-3 py-2 w-40 h-9 border-gray-300 rounded bg-white outline-none text-xs"
              >
                <option>Best Match</option>
                <option>Low To High</option>
                <option>High To Low</option>
                <option>New Arrivals</option>
              </select>
            </div>

            <div className=" flex gap-2 items-center">
              <p className=" font-josef text-base text-[#3F509E]  font-normal">
                View:
              </p>
              <button
                title="Grid veiw"
                className=" border border-gray-300 rounded p-2 hover:bg-gray-200"
              >
                <FaBorderAll />
              </button>
              <button
                title="List veiw"
                className=" border border-gray-300 rounded p-2 hover:bg-gray-200"
              >
                <FaListUl />
              </button>
            </div>

            <div className=" flex gap-2 items-center">
              <input
                type="text"
                placeholder="Search"
                className=" border border-gray-300 outline-none rounded w-56 h-9 px-3 py-2"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap mt-20">
          <div className=" w-[24%]">
            <div className="">
              <h3
                onClick={handleCatShow}
                className=" text-black font-bold flex items-center gap-3 cursor-pointer"
              >
                Shop by Category
                <TiArrowSortedDown />
              </h3>
              {catShow && (
                <ul className=" w-52 h-36 overflow-y-scroll">
                  {category.map((categories) => (
                    <li
                      onClick={() => handleCategoryProducts(categories)}
                      key={categories}
                      className=" capitalize py-3 border-b-2 cursor-pointer text-secondary"
                    >
                      {categories}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className=" mt-10">
              <h3
                onClick={handlePriceShow}
                className=" text-black font-bold flex items-center gap-3 cursor-pointer"
              >
                Shop by Pricing
                <TiArrowSortedDown />
              </h3>
              {priceShow && (
                <ul className=" w-52 h-36 overflow-y-scroll">
                  <li
                    onClick={() => handlePriceProducts(0, 100)}
                    className=" capitalize py-3 border-b-2 cursor-pointer text-secondary"
                  >
                    $0.00 - $100.00
                  </li>
                  <li
                    onClick={() => handlePriceProducts(100.01, 200)}
                    className=" capitalize py-3 border-b-2 cursor-pointer text-secondary"
                  >
                    $100.01 - $200.00
                  </li>
                  <li
                    onClick={() => handlePriceProducts(200.01, 500)}
                    className=" capitalize py-3 border-b-2 cursor-pointer text-secondary"
                  >
                    $200.01 - $500.00
                  </li>
                  <li
                    onClick={() => handlePriceProducts(500.01, 10000)}
                    className=" capitalize py-3 border-b-2 cursor-pointer text-secondary"
                  >
                    $500.01 - $10000.00
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className=" flex flex-wrap w-[75%]">
            {categoryItems.length > 0
              ? categoryItems.map((item) => (
                  <Reusable2
                    key={item}
                    photo={item.thumbnail}
                    title={item.title}
                    price={item.price}
                  />
                ))
              : priceItems.length > 0
              ? priceItems.map((item) => (
                  <Reusable2
                    key={item}
                    photo={item.thumbnail}
                    title={item.title}
                    price={item.price}
                  />
                ))
              : currentPageProducts.map((item) => (
                  <Reusable2
                    key={item}
                    photo={item.thumbnail}
                    title={item.title}
                    price={item.price}
                  />
                ))}
          </div>
        </div>

        <div className=" flex gap-2 justify-center text-gray-600 pt-10 mt-10">
          <button
            onClick={handlePrevPage}
            className=" px-4 py-2 border-2 text-base"
          >
            Previous
          </button>
          {Pages.map((item) => (
            <button
              onClick={() => handleGoToPage(item)}
              key={item}
              className={` px-4 py-2 border-2 text-base ${
                item === currentPage ? " bg-red-400 text-white" : ""
              }`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className=" px-4 py-2 border-2 text-base"
          >
            Next
          </button>
        </div>
      </div>
    
    </>
  );
};

export default Shopitem;

