import React, { useContext, useState } from "react";
import { FaBorderAll } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { apiData } from "./ContextApi";
const  Acceories = () => {

    let data = useContext(apiData);

    let [currentPage, setCurrentPage] = useState(1);
    let [perPage, setPerPage] = useState(30);

    const handlePerPage = (e) => {
        setPerPage(e.target.Value)
    }


    return (
        <>
            <section>
                <div className="container mx-auto mt-20">
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
                                <p className=" font-josef text-base text-[#3F509E]">
                                    Per Page:
                                </p>
                                <input
                                onChange={handlePerPage}
                                    type="number"
                                    className="border px-2 py-2 border-gray-300 w-20 h-9 font-lato outline-none text-xs"
                                    min="1"
                                    defaultValue="30"
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
                </div>
            </section>
        </>
    );
};

export default Acceories;

