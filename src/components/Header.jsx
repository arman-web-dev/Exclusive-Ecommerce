import React, { useState } from "react";
import Container from "./Container";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["English", "Bangla", "Spanish", "Japanese", "Norwegian"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <header className="bg-black">
      <Container>
        <div className="flex flex-wrap lg:flex-nowrap py-4 items-center justify-between">
          <div className="flex-1 text-center">
            <h1 className="text-[#fafafa] text-base lg:text-[14px] font-normal tracking-wide">
              Summer Sale For All Swim Suits And Free Express Delivery -
              <span className="font-semibold underline decoration-yellow-500">
                OFF 50%! Shop Now
              </span>
            </h1>
          </div>
          <div className="mt-2 lg:mt-0">
            <div className="relative inline-block">
              <button
                onClick={toggleMenu}
                className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-between w-40 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {selectedLanguage}
                {isOpen ? (
                  <HiChevronUp className="ml-2 w-5 h-5" />
                ) : (
                  <HiChevronDown className="ml-2 w-5 h-5" />
                )}
              </button>
              {isOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-md z-20">
                  {languages.map((language) => (
                    <li
                      key={language}
                      onClick={() => selectLanguage(language)}
                      className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900 text-sm"
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
