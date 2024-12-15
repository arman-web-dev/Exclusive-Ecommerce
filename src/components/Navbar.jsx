import React, { useState } from "react";
import Container from "./Container";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link
import { useAuth } from "./ContextApi";

const Navbar = () => {
  let { info } = useAuth();
  let [search, setSearch] = useState("");
  let [searchFilter, setSearchFilter] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setSearchFilter([]);
    } else {
      setSearch(e.target.value);
      let filteredData = info.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchFilter(filteredData);
    }
  };

  // Menu items with links
  const MenuItem = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center mt-[20px] mb-4">
          <div className="w-1/4">
            <h2 className="font-bold text-[24px] font-[inter] text-[#000]">
              Exclusive
            </h2>
          </div>
          <div className="w-[40%]">
            <ul className="flex gap-12 justify-center">
              {MenuItem.map((menu, index) => (
                <li
                  key={index}
                  className="relative group font-sans font-normal text-[14px] text-[#000000] cursor-pointer"
                >
                  <Link
                    to={menu.path} // Add the link path
                    className="relative inline-block transition-colors duration-300 ease-in-out hover:text-black"
                  >
                    {menu.name}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[35%]">
            <div className="flex items-center justify-between">
              <div className="w-[80%] relative">
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="What are you looking for?"
                  className="py-[10px] pl-[20px] w-full bg-[#F5F5F5] outline-none rounded-[4px]"
                />
                <div className="absolute z-30 w-full h-[180px] overflow-y-auto cursor-pointer">
                  {searchFilter.map((item, idx) => (
                    <div key={idx} className="bg-white py-[10px] px-3">
                      <h1>{item.title}</h1>
                    </div>
                  ))}
                </div>
              </div>
              <FaRegHeart />
              <BsCart3 />
              <FaRegUserCircle />
            </div>
          </div>
        </div>
      </Container>
      <hr />
    </nav>
  );
};

export default Navbar;
