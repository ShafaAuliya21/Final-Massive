import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import ReviewCard from "./ReviewCard";
import oneBlackStar from "../../assets/detailProduct/oneBlackStar.svg";
import calendarIcon from "../../assets/detailProduct/calendarIcon.svg";
import SearchIcon2 from "../../assets/navbar/SearchIcon2.svg";
import TokoImg from "../../assets/detailProduct/TokoImg.png";
import boxJaminanImg from "../../assets/detailProduct/boxJaminanImg.svg";
import truckJaminanImg from "../../assets/detailProduct/truckJaminanImg.svg";
import shieldJaminanImg from "../../assets/detailProduct/shieldJaminanImg.svg";
import { addToRentals } from "../../firestore";
import { onAuthStateChanged } from "firebase/auth";

function DetailProduct() {
  const navigate = useNavigate();

  // Firestore
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deposit, setDeposit] = useState(0);

  // Get Data
  const [userId, setUserId] = useState(null);
  const location = useLocation();
  const { product } = location.state || {};

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, [product]);

  const handleRentNow = async () => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const differenceMs = endDateObj - startDateObj;
    const durationInDays = differenceMs / (1000 * 60 * 60 * 24);
    const roundedDuration = Math.round(durationInDays);

    const rentalDetails = {
      startDate,
      endDate,
      rentalDuration: roundedDuration,
      deposit,
      jumlahBarang,
    };

    if (!userId) {
      alert("Harap login sebelum memesan barang");
      return;
    } else if (!deposit) {
      alert("Harap masukkan jumlah deposit");
      return;
    } else if (!startDate) {
      alert("Harap masukkan durasi sewa");
      return;
    } else if (!endDate) {
      alert("Harap masukkan durasi sewa");
      return;
    } else if (!jumlahBarang) {
      alert("Harap masukkan jumlah barang");
      return;
    } else if (userId.length > 1) {
      await addToRentals(product, userId, rentalDetails);
      alert("Produk berhasil dipesan");
    }
  };

  // Durasi Sewa
  const [jumlahBarang, setJumlahBarang] = useState(0);

  const addJumlahBarang = () => {
    setJumlahBarang(jumlahBarang + 1);
  };
  const minusJumlahBarang = () => {
    setJumlahBarang(jumlahBarang - 1);
  };

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar />
      {/* Top */}
      <section className="flex relative justify-evenly py-6">
        <div className="flex absolute left-4 gap-x-4 ">
          <Link to={"/"}>
            <p className="hover:opacity-70">Beranda &gt; </p>
          </Link>
          <Link to={"/Katalog"}>
            <p className="hover:opacity-70">Katalog &gt; </p>
          </Link>
          <Link to={"/Detailproduct"}>
            <p className="hover:opacity-70">Detail Produk &gt; </p>
          </Link>
        </div>
        <div>
          <img src={product.productImage} alt="" />
        </div>
        <div className="">
          <div className="flex items-center mb-2">
            <h1 className="text-4xl mr-2">{product.productName}</h1>
            <div className="bg-[#D9D9D9] flex items-center h-fit px-2 gap-x-1">
              <p className="text-sm font-medium">{product.productRating}</p>
              <img src={oneBlackStar} alt="" />
            </div>
          </div>
          <h2 className="font-bold text-4xl mb-8">
            Rp {product.productHarga}/ Hari
          </h2>
          <div className="w-[34.4rem] flex items-center justify-between mb-5">
            <h2 className="text-lg">Harga Deposit</h2>
            <div className="w-[22.5rem] h-[3rem] flex border border-black rounded-md pr-4">
              <p className="bg-[#003F62] px-4 pt-3 mr-2 rounded-l-md text-sm text-white">
                Rp
              </p>
              <input
                type="text"
                placeholder="100.000"
                value={deposit}
                className="outline-none"
                onChange={(e) => setDeposit(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[34.4rem] flex items-center justify-between mb-5">
            <h2 className="text-lg">Durasi Sewa</h2>
            <div className="w-[22.5rem] h-[3rem] px-2 flex items-center border border-black rounded-md pr-4">
              <input
                type="date"
                placeholder="Start date"
                value={startDate}
                className="outline-none w-[80%] mr-2"
                onChange={(e) => setStartDate(e.target.value)}
              />
              <p className="mr-2">&rarr;</p>
              <input
                type="date"
                placeholder="End date"
                value={endDate}
                className="outline-none w-[80%]"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[34.4rem] flex items-center justify-between mb-5">
            <h2 className="text-lg">
              Jumlah Barang <br />
              <span className="text-sm">(Tersisa 2 barang)</span>
            </h2>
            <div className="w-[22.5rem] h-[3rem] flex items-center justify-between border border-black rounded-md">
              <button
                className="bg-[#003F62] h-full px-4 mr-2 rounded-l-md text-sm text-white hover:opacity-70 ease-in-out duration-300"
                onClick={minusJumlahBarang}
              >
                -
              </button>
              <p>{jumlahBarang}</p>
              <button
                className="bg-[#003F62] h-full px-4 rounded-r-md text-sm text-white hover:opacity-70 ease-in-out duration-300"
                onClick={addJumlahBarang}
              >
                +
              </button>
            </div>
          </div>
          <div className="w-[34.4rem] flex items-center justify-between mb-8">
            <h2 className="text-lg">Pilih Lokasi Anda</h2>
            <div className="w-[22.5rem] h-[3rem] px-2 flex justify-between items-center border border-black rounded-md pr-4">
              <input
                type="text"
                placeholder="Masukkan Alamat"
                className="outline-none w-[80%] mr-2"
              />
              <img src={SearchIcon2} alt="" />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="w-[18rem] h-[2.75rem] bg-[#EDA415] rounded-md font-bold text-white hover:opacity-70 ease-in-out duration-300"
              onClick={handleRentNow}
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Middle */}
      <section className="flex justify-evenly border-black border-t border-b py-6">
        {/* Left */}
        <div className="flex items-center">
          <div className="mr-3">
            <img src={TokoImg} alt="" />
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-xl font-bold mr-2">Toko Serba Ada</h2>
              <div className="bg-[#D9D9D9] flex items-center h-fit px-2 gap-x-1">
                <p className="text-sm font-medium">4</p>
                <img src={oneBlackStar} alt="" />
              </div>
            </div>
            <p>Aktif 5 menit lalu</p>
            <div className="space-x-2">
              <button className="w-[7rem] bg-[#003F62] py-1 text-[#E6ECEF] font-bold rounded-md hover:opacity-70 ease-in-out duration-300">
                Chat
              </button>
              <button className="w-[8rem] bg-[#003F62] py-1 text-[#E6ECEF] font-bold rounded-md hover:opacity-70 ease-in-out duration-300">
                Lihat Produk
              </button>
            </div>
          </div>
        </div>
        {/* Right */}
        <div>
          <h2 className="mb-2">Toko ini memiliki jaminan</h2>
          <div className="flex gap-x-4">
            <div className="w-[12.3rem] h-[6.5rem] relative bg-[#FCF1DC] p-3 rounded-xl">
              <p className="font-medium text-sm">
                Pengembalian/ <br />
                Penukaran Barang <br /> yang Rusak
              </p>
              <img
                src={boxJaminanImg}
                alt=""
                className="absolute right-4 bottom-1"
              />
            </div>
            <div className="w-[12.3rem] h-[6.5rem] relative bg-[#C8F4BCCC] p-3 rounded-xl">
              <p className="font-medium text-sm">Pengiriman Cepat</p>
              <img
                src={truckJaminanImg}
                alt=""
                className="absolute right-0 bottom-0"
              />
            </div>
            <div className="w-[12.3rem] h-[6.5rem] relative bg-[#D7DCEC] p-3 rounded-xl">
              <p className="font-medium text-sm">
                100% Mitra <br />
                Terpercaya
              </p>
              <img
                src={shieldJaminanImg}
                alt=""
                className="absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deskripsi */}
      <section className="flex justify-between py-16 px-32">
        <div>
          <h2 className="text-[#003F62] text-2xl font-bold mb-4">
            Deskripsi Produk
          </h2>
          <p className="text-lg w-[31.15rem]">{product.productDesc}</p>
        </div>
        <div>
          <h2 className="text-[#003F62] text-2xl font-bold mb-4">
            Kondisi Produk
          </h2>
          <p className="text-lg w-[32rem]">{product.productKondisi}</p>
        </div>
      </section>

      {/* Review */}
      <section className="px-32 py-6">
        <h2 className="text-[#003F62] text-2xl font-bold mb-4">Ulasan</h2>
        <div className="flex gap-x-6">
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>

      {/* Produk Serupa */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <section className="px-32 py-6">
          <h2 className="text-[#003F62] text-2xl font-bold mb-4">
            Produk Serupa
          </h2>
          <div className="flex gap-x-10">
            {data.slice(0, 4).map((item) => (
              <Product key={item.id} id={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default DetailProduct;
