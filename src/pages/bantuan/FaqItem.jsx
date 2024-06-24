import React, { useState } from "react";
import ArrowDownIcon from "../../assets/bantuan/ArrowDownIcon.svg";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between cursor-pointer hover:opacity-70 "
        onClick={toggleOpen}
      >
        <h3 className="text-[#003F62] font-bold">{question}</h3>
        <img
          src={ArrowDownIcon}
          alt=""
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && <p className="text-[#003F62] font-medium mt-2">{answer}</p>}
    </div>
  );
}

export default FaqItem;
