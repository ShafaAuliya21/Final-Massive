/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Carousel from "./Carousel";
import Product from "../../components/Product";
import KatalogBannerImg1 from "../../assets/katalog/KatalogBannerImg1.svg";
import KatalogBannerImg2 from "../../assets/katalog/KatalogBannerImg2.svg";
import KatalogBannerImg3 from "../../assets/katalog/KatalogBannerImg3.svg";
import OneStarIcon from "../../assets/katalog/OneStarIcon.svg";

const slides = [KatalogBannerImg1, KatalogBannerImg2, KatalogBannerImg3];

function Katalog() {
  // Firestore
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataArray);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [fiveStar, setFiveStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [oneStar, setOneStar] = useState(false);

  return (
    <div className="font-poppins">
      <Navbar />

      <section className="flex ml-2 pl-4 pt-4 pb-12 relative">
        {/* Sidebar */}
        <div className="pr-2 mr-5">
          <h2 className="font-bold mb-4 text-[#003F62] text-lg">
            Urut Berdasarkan
          </h2>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 " />
            Terdekat
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Termurah
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Terlaris
          </label>

          <h2 className="font-bold mb-4 mt-12 text-[#003F62] text-lg">
            Lokasi
          </h2>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 " />
            Jabodetabek
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Bali
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Riau
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Batam
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Jawa Timur
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Jawa Tengah
          </label>

          <h2 className="font-bold mb-2 mt-12 text-[#003F62] text-lg">
            Kisaran Harga
          </h2>
          <div className="flex items-center px-1 py-2 w-fit border border-black rounded-lg">
            <p className="text-[#003F62] text-lg font-bold mr1">Rp</p>
            <input
              type="text"
              placeholder="0"
              className="w-[90px] outline-none text-center"
            />
            <p className="text-[#003F62] text-lg font-bold mr-2">-</p>
            <input
              type="text"
              placeholder="0"
              className="w-[90px] outline-none text-center"
            />
          </div>

          {/* Rating Toggle */}
          <h2 className="font-bold mb-2 mt-12 text-[#003F62] text-lg">
            Penilaian
          </h2>
          <div className="flex gap-x-2 mb-8">
            <div
              className={`flex items-center gap-x-3 border border-black w-fit px-3 pr5 cursor-pointer hover:opacity-80 ${
                fiveStar ? "bg-[#E2F4FF] font-bold" : "bg-white"
              }`}
              onClick={() => setFiveStar((curr) => !curr)}
            >
              <p>5</p>
              <img src={OneStarIcon} alt="" />
            </div>
            <div
              className={`flex items-center gap-x-3 border border-black w-fit px-3 cursor-pointer hover:opacity-80 ${
                fourStar ? "bg-[#E2F4FF] font-bold" : "bg-white"
              }`}
              onClick={() => setFourStar((curr) => !curr)}
            >
              <p>4</p>
              <img src={OneStarIcon} alt="" />
            </div>
            <div
              className={`flex items-center gap-x-3 border border-black w-fit px-3 cursor-pointer hover:opacity-80 ${
                threeStar ? "bg-[#E2F4FF] font-bold" : "bg-white"
              }`}
              onClick={() => setThreeStar((curr) => !curr)}
            >
              <p>3</p>
              <img src={OneStarIcon} alt="" />
            </div>
            <div
              className={`flex items-center gap-x-3 border border-black w-fit px-3 cursor-pointer hover:opacity-80 ${
                twoStar ? "bg-[#E2F4FF] font-bold" : "bg-white"
              }`}
              onClick={() => setTwoStar((curr) => !curr)}
            >
              <p>2</p>
              <img src={OneStarIcon} alt="" />
            </div>
            <div
              className={`flex items-center gap-x-3 border border-black w-fit px-3 cursor-pointer hover:opacity-80 ${
                oneStar ? "bg-[#E2F4FF] font-bold" : "bg-white"
              }`}
              onClick={() => setOneStar((curr) => !curr)}
            >
              <p>1</p>
              <img src={OneStarIcon} alt="" />
            </div>
          </div>

          <h2 className="font-bold mb-4 mt-12 text-[#003F62] text-lg">
            Jenis Pembatalan
          </h2>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 " />
            Tidak dapat dibatalkan
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            14 hari sebelum rental
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />7 hari sebelum rental
          </label>

          <h2 className="font-bold mb-4 text-[#003F62] text-lg mt-12">
            Jenis Pengiriman
          </h2>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 " />
            Diantar
          </label>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Ambil di tempat
          </label>
        </div>

        <section className="w-full ">
          {/* Slider */}
          <div className="max-w-full mx-auto mb-8 pl-8">
            <Carousel>
              {slides.map((s) => (
                <img src={s} alt="" className="mr-12" />
              ))}
            </Carousel>
          </div>

          {/* Loading */}
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <section className="grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 md:grid-cols-3 w-fit mx-auto mb-12">
              {data.map((item) => (
                <Product key={item.id} id={item.id} product={item} />
              ))}
            </section>
          )}
        </section>

        {/* Pagination (Absolute) */}
        <div className="flex text-2xl w-fit font-medium gap-x-2 absolute bottom-3 left-1/2 transform -translate-x-1/2">
          <button className="w-[2.5rem] h-[2.5rem] rounded-xl hover:bg-[#EDA415]">
            &lt;
          </button>
          <button className="w-[2.5rem] h-[2.5rem] rounded-xl bg-[#EDA415]">
            1
          </button>
          <button className="w-[2.5rem] h-[2.5rem] rounded-xl hover:bg-[#EDA415]">
            2
          </button>
          <button className="w-[2.5rem] h-[2.5rem] rounded-xl hover:bg-[#EDA415]">
            3
          </button>
          <button className="w-[2.5rem] h-[2.5rem] rounded-xl hover:bg-[#EDA415]">
            4
          </button>
          <button className="w-[2.5rem] h-[2.5rem] rounded-xl hover:bg-[#EDA415]">
            5
          </button>
          <button className="w-[2.5rem] h-[2.5rem] rounded-xl hover:bg-[#EDA415]">
            &gt;
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Katalog;
