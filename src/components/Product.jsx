/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import WishlistIcon from "../assets/product/WishlistIcon.svg";
import LikeIcon from "../assets/product/LikeIcon.svg";
import FiveStarIcon from "../assets/product/FiveStarIcon.svg";
import FourStarIcon from "../assets/product/FourStarIcon.svg";

function Product({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Detailproduct", { state: { product } });
  };

  const renderStars = () => {
    const stars = [];
    if (product.productRating == 5) {
      stars.push(<img src={FiveStarIcon} alt="Star" />);
    } else if (product.productRating == 4) {
      stars.push(<img src={FourStarIcon} alt="Star" />);
    }
    return stars;
  };

  return (
    <div
      className="font-poppins bg-white w-fit pl-6 py-4 rounded-xl border border-[#D8D9E0] relative cursor-pointer hover:opacity-90"
      onClick={handleClick}
    >
      <img
        src={product.productImage}
        alt=""
        className="w-[244px] h-[244px] mb-4"
      />
      <div className="">
        <h1 className="">{product.productName}</h1>
        <img src="" alt="" />
        <div className="flex items-center gap-x-2 mb-4">
          {renderStars()}
          <p className=" bg-[#E9F5FE] px-1 font-medium text-[#003F62]">
            {product.productDistance} Km
          </p>
        </div>
        <p className="font-bold text-[#363842] text-2xl mb-4">
          Rp {product.productHarga}
        </p>
        <div className="flex gap-x-4">
          <button
            className="text-[#EDA415] bg-white font-bold py-2 px-12 border border-black rounded-lg 
          hover:opacity-50"
          >
            Sewa
          </button>
          <img
            src={WishlistIcon}
            alt=""
            className="w-fit cursor-pointer hover:opacity-50"
          />
        </div>
      </div>
      <img
        src={LikeIcon}
        alt=""
        className="absolute right-2 top-2 w-12 cursor-pointer hover:opacity-50"
      />
    </div>
  );
}

export default Product;
