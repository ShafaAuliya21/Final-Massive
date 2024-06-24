/* eslint-disable react/prop-types */
import React from "react";

function ChatCard(props) {
  return (
    <div
      className="font-poppins flex items-center relative py-4 px-2 rounded-xl cursor-pointer border border-[#BFBFBF]
     hover:bg-[#d9d9d978]"
      onClick={props.onClick}
    >
      <img src={props.img} alt="" className="mr-2 w-[56px] h-[56px]" />
      <div>
        <h2 className="font-medium">{props.user}</h2>
        <p className="text-sm text-[#BFBFBF]">{props.snippet}</p>
      </div>
      <p className="absolute right-2 top-2 text-xs text-[#BFBFBF]">
        {props.time}
      </p>
    </div>
  );
}

export default ChatCard;
