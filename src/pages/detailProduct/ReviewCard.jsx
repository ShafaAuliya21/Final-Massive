import React from "react";
import reviewImg from "../../assets/detailProduct/reviewImg.svg";
import reviewFiveStar from "../../assets/detailProduct/reviewFiveStar.svg";

function ReviewCard() {
  return (
    <div className="w-[32.8rem] h-[12.25rem] bg-[#E2F4FF] px-8 flex items-center rounded-xl">
      <div className="mr-9">
        <img src={reviewImg} alt="" className="mb-2" />
        <h1 className="text-center text-lg font-medium">Audrey</h1>
      </div>
      <div className="w-full">
        <img src={reviewFiveStar} alt="" className="mb-2" />
        <p className="text-lg font-medium">
          Siap makasih puas dengan pelayanannya. Akan saya rekomendasikan ke
          orang lain.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
