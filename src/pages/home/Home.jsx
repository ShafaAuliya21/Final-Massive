import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import HeroFirstSlide from "./HeroFirstSlide";
import HeroSecondSlide from "./HeroSecondSlide";
import HeroThirdSlide from "./HeroThirdSlide";
import HeroFourthSlide from "./HeroFourthSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CameraIcon from "../../assets/home/CameraIcon.svg";
import PakaianIcon from "../../assets/home/PakaianIcon.svg";
import KendaraanIcon from "../../assets/home/KendaraanIcon.svg";
import HobiIcon from "../../assets/home/HobiIcon.svg";
import PeralatanIcon from "../../assets/home/PeralatanIcon.svg";
import EyeIcon from "../../assets/home/EyeIcon.svg";
import AlarmIcon from "../../assets/home/AlarmIcon.svg";
import ClipboardIcon from "../../assets/home/ClipboardIcon.svg";
import SewaImg from "../../assets/home/SewaImg.svg";

function Home() {
  // Firestore
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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

  return (
    <div className="bg-white font-poppins ">
      <Navbar></Navbar>
      {/* Hero Section */}
      <div className="mx-auto my-auto max-w-fit mb-8">
        <Slider {...heroSettings} className="max-h-[505px]">
          <HeroFirstSlide />
          <HeroSecondSlide />
          <HeroThirdSlide />
          <HeroFourthSlide />
        </Slider>
      </div>

      {/* Kategori */}
      <section className="py-16">
        <h2 className="font-bold text-2xl text-[#EDA415] text-center mb-2">
          Kategori
        </h2>
        <h3 className="font-bold text-4xl text-[#003F62] text-center mb-12">
          Kami Sediakan yang Anda Butuhkan
        </h3>
        <div className="flex justify-center gap-x-12">
          <div
            className="bg-[#e6f4fd] w-[11.5rem] h-[14.5rem] flex flex-col items-center justify-center gap-y-8 rounded-xl 
          hover:opacity-70 cursor-pointer ease-in-out duration-500"
          >
            <img src={CameraIcon} alt="" />
            <p className="font-bold text-2xl text-center">Elektronik</p>
          </div>
          <div
            className="bg-[#e6f4fd] w-[11.5rem] h-[14.5rem] flex flex-col items-center justify-center gap-y-8 rounded-xl 
          hover:opacity-70 cursor-pointer ease-in-out duration-500"
          >
            <img src={PakaianIcon} alt="" />
            <p className="font-bold text-2xl text-center">Pakaian</p>
          </div>
          <div
            className="bg-[#e6f4fd] w-[11.5rem] h-[14.5rem] flex flex-col items-center justify-center gap-y-8 rounded-xl 
          hover:opacity-70 cursor-pointer ease-in-out duration-500"
          >
            <img src={KendaraanIcon} alt="" />
            <p className="font-bold text-2xl text-center">Kendaraan</p>
          </div>
          <div
            className="bg-[#e6f4fd] w-[11.5rem] h-[14.5rem] flex flex-col items-center justify-center gap-y-8 rounded-xl 
          hover:opacity-70 cursor-pointer ease-in-out duration-500"
          >
            <img src={HobiIcon} alt="" />
            <p className="font-bold text-2xl text-center">Hobi</p>
          </div>
          <div
            className="bg-[#e6f4fd] w-[11.5rem] h-[14.5rem] flex flex-col items-center justify-center gap-y-8 rounded-xl 
          hover:opacity-70 cursor-pointer ease-in-out duration-500"
          >
            <img src={PeralatanIcon} alt="" />
            <p className="font-bold text-2xl text-center">Peralatan</p>
          </div>
        </div>
      </section>

      {/* Produk */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <section className="bg-[#F6FCFF] py-12">
          <h1 className="font-bold text-4xl text-[#003F62] text-center mb-6">
            Produk
          </h1>
          <div className="mx-auto my-auto pl-6 w-[80%] h-[80%]">
            <Slider {...settings} className="">
              {data.map((item) => (
                <Product key={item.id} id={item.id} product={item} />
              ))}
            </Slider>
          </div>
        </section>
      )}

      {/* Cara Sewa */}
      <section className="py-20">
        <div className="flex justify-evenly">
          {/* Item */}
          <div className="">
            <h1 className="text-[#003F62] font-bold text-2xl mb-4">
              Cara Sewa
            </h1>
            <h2 className="text-[#EDA415] font-bold text-4xl mb-8">
              Sewa Mudah Hanya dengan 3 Langkah
            </h2>
            <div className="flex items-center gap-x-4 mb-8">
              <img
                src={EyeIcon}
                alt=""
                className="p-4 bg-[#DAEAF3] rounded-xl"
              />
              <p className="font-bold text-lg">
                Pilih Produk{" "}
                <span className="font-normal ">
                  <br />
                  Menyewa barang yang dibutuhkan
                </span>
              </p>
            </div>
            <div className="flex items-center gap-x-4 mb-8">
              <img
                src={AlarmIcon}
                alt=""
                className="p-4 bg-[#EDA415] rounded-xl"
              />
              <p className="font-bold text-lg w-[27rem]">
                Pemakaian dan Perpanjang{" "}
                <span className="font-normal ">
                  <br />
                  Mengunggah foto/video yang memperlihatkan kondisi barang saat
                  diterima
                </span>
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <img
                src={ClipboardIcon}
                alt=""
                className="p-4 bg-[#DAEAF3] rounded-xl"
              />
              <p className="font-bold text-lg w-[28rem]">
                Pengembalian Barang{" "}
                <span className="font-normal ">
                  <br />
                  Mengisi form selesai sewa dengan menyertakan foto/video barang
                  sesudah dipakai
                </span>
              </p>
            </div>
          </div>
          {/* Image */}
          <div>
            <img src={SewaImg} alt="" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
