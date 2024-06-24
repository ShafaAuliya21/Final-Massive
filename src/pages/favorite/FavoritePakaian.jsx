import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import FavoriteNavigation from "./FavoriteNavigation";
import SearchIcon from "../../assets/navbar/SearchIcon.svg";
import PakaianImg from "../../assets/product/PakaianImg.png";

function FavoritePakaian() {
  return (
    <div className="font-poppins">
      <Navbar />

      {/* Search Bar */}
      <section className="px-20 py-12 flex items-center justify-between">
        <h1 className="text-4xl text-center text-[#003F62] font-bold">
          Favorit Saya
        </h1>
        <div className="bg-white rounded-3xl h-fit flex pl-4 pr-20 py-2 border border-black ">
          <img src={SearchIcon} alt="" className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
        </div>
      </section>

      {/* Navigation */}
      <FavoriteNavigation />

      {/* Product Section (Dummy Data) */}
      <section>
        <div className="grid grid-cols-1 gap-y-10 gap-x-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit mx-auto mb-12"></div>
      </section>
      <Footer />
    </div>
  );
}

export default FavoritePakaian;
