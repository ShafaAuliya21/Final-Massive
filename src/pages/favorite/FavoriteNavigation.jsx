import React from "react";
import { Link } from "react-router-dom";

function FavoriteNavigation() {
  return (
    <section className="mb-12">
      <div className="bg-[#E9F5FE] py-1 w-[90%] mx-auto flex justify-evenly items-center rounded-lg">
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Favorite">Semua</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Favoriteelektronik">Elektronik</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Favoritepakaian">Pakaian</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Favoritekendaraan">Kendaraan</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Favoritehobi">Hobi</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Favoriteperalatan">Peralatan</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Favoriterequest">Request</Link>
        </ul>
      </div>
    </section>
  );
}

export default FavoriteNavigation;
