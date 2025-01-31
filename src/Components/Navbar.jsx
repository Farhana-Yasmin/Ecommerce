import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GiCrossedSabres } from "react-icons/gi";
import { apiData } from "./ContextApi";

const Navber = () => {
  let data = useContext(apiData);

  let [menuShow, setMenuShow] = useState(false);
  const handleMenu = () => {
    setMenuShow(!menuShow);
  };

  let [searchReasult, setSearchReasult] = useState([]);

  const handleSearch = (e) => {
    let filteredProducts = data.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setSearchReasult(filteredProducts);
    if (e.target.value == "") {
      setSearchReasult([]);
    }
  };

  return (
    <>
      <nav className="py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="">
              <img src={logo} alt="" />
            </div>
            <div className="">
              <ul
                className={` flex gap-10 ${menuShow === false ? "flex-row" : "flex-col"
                  }`}
              >
                <li className=" flex gap-0 items-center relative group text-primary">
                  <Link to={"/"}>Home</Link>
                  <FaAngleDown />
                  <ul className=" absolute z-30 top-6 left-0 hidden group-hover:block bg-white px-4">
                    <li>
                    <Link to={"/ShopLeftSide"}>ShopLeftSide</Link>
                    </li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                  </ul>
                </li>
                <li>
                  <Link to={"/Pages"}>Pages</Link>
                </li>
                <li>
                  <Link to={"/Products"}>Products</Link>
                </li>
                <li>
                  <Link to={"/Blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/Shop"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center relative">
              <input
                onChange={handleSearch}
                type="text"
                className="border-2 outline-none w-56 h-8 pl-4"
              />
              {searchReasult.length > 0 && (
                <div className=" absolute top-8 left-0 z-40 h-[500px] w-[300px] overflow-y-scroll bg-white">
                  {searchReasult.map((item) => (
                    <div key={item.id} className=" flex items-center">
                      <img className=" w-20" src={item.thumbnail} alt="" />
                      <h3>{item.title}</h3>
                    </div>
                  ))}
                </div>
              )}

              <button className="h-8 w-16 bg-primary flex items-center justify-center">
                <CiSearch className="text-[25px] text-white" />
              </button>
            </div>
            <div onClick={handleMenu} className="lg:hidden">
              {menuShow === false ? <FaBars /> : <GiCrossedSabres />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
