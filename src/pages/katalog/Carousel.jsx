/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative font-poppins">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 60}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="font-bold bg-white text-2xl rounded-full px-2"
          onClick={prev}
        >
          &lt;
        </button>
        <button
          className="font-bold bg-white text-2xl rounded-full px-2"
          onClick={next}
        >
          &gt;
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
                        transition-all w-3 h-3 bg-white rounded-full
                        ${curr == i ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
