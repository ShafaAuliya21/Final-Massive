import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import PopupAlamat from "./PopupAlamat";
import ZerentLogo from "../assets/navbar/ZerentLogo.png";
import NotifikasiIcon from "../assets/navbar/NotifikasiIcon.svg";
import PesananIcon from "../assets/navbar/PesananIcon.svg";
import PembayaranIcon from "../assets/navbar/PembayaranIcon.svg";
import SearchIcon from "../assets/navbar/SearchIcon.svg";
import SearchIcon2 from "../assets/navbar/SearchIcon2.svg";
import PopupSemua from "../assets/navbar/PopupSemua.svg";
import PopupCamera from "../assets/navbar/PopupCamera.svg";
import PopupPakaian from "../assets/navbar/PopupPakaian.svg";
import PopupKendaraan from "../assets/navbar/PopupKendaraan.svg";
import PopupHobi from "../assets/navbar/PopupHobi.svg";
import PopupPeralatan from "../assets/navbar/PopupPeralatan.svg";
import UserIcon from "../assets/navbar/UserIcon.svg";

function Navbar() {
  const [userEmail, setUserEmail] = useState(null);
  const [popupAlamat, setPopupAlamat] = useState(false);

  const handleOpenPopup = () => {
    setPopupAlamat(true);
  };

  const handleClosePopup = () => {
    setPopupAlamat(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out success");
      })
      .catch((error) => {
        console.log("Sign out error", error);
      });
  };

  return (
    <div className="font-poppins">
      <div className="bg-[#003F62] flex justify-evenly items-center py-2">
        <img src={ZerentLogo} alt="" className="h-16" />
        <div className="bg-white rounded-3xl h-fit flex pl-4">
          <img src={SearchIcon} alt="" className="mr-2" />
          <input type="text" placeholder="Search" className="outline-none" />
          <button className="bg-[#EDA415] py-2 px-10 rounded-3xl font-bold text-white hover:opacity-80">
            Cari
          </button>
        </div>
        <div className="flex h-fit gap-x-2 cursor-pointer hover:opacity-80">
          <img src={NotifikasiIcon} alt="" />
          <p className="font-bold text-white">Notifikasi</p>
        </div>
        <div className="flex items-center h-fit gap-x-2 cursor-pointer hover:opacity-80">
          <img src={PesananIcon} alt="" />
          <p className="font-bold text-white">
            <Link to="/Pesanan">Pesanan</Link>
          </p>
        </div>
        <div className="flex h-fit gap-x-2 cursor-pointer hover:opacity-80">
          <img src={PembayaranIcon} alt="" />
          <p className="font-bold text-white">Pembayaran</p>
        </div>
        {userEmail ? (
          <button
            className="bg-[#EDA415] flex py-2 px-4 gap-x-2 items-center rounded-lg font-bold text-white h-fit hover:opacity-80"
            // onClick={handleLogout}
          >
            <img src={UserIcon} alt="" />
            <Link to="/Profile">User</Link>
          </button>
        ) : (
          <button className="bg-[#EDA415] py-2 px-6 rounded-lg font-bold text-white h-fit hover:opacity-80">
            <Link to="/Daftar">Daftar</Link>
          </button>
        )}
      </div>
      <div className="bg-[#F6FCFF] py-4 px-2 flex justify-evenly items-center border-b-2 border-[#002F4A]">
        <div className="flex flex-col relative group">
          <button className="bg-[#EDA415] py-4 px-6 rounded-lg font-bold text-white h-fit hover:opacity-80">
            Pilih Kategori Barang
          </button>
          <div className="bg-white w-full py-4 shadow-lg absolute top-14 z-10 hidden group-hover:block ">
            <ul className="cursor-pointer space-y-6 px-4">
              <div className="flex items-center hover:opacity-60">
                <img src={PopupSemua} alt="" className="mr-4" />
                <li className="font-bold">Semua</li>
              </div>
              <div className="flex items-center hover:opacity-60">
                <img src={PopupCamera} alt="" className="mr-4" />
                <li className="font-bold">Elektronik</li>
              </div>
              <div className="flex items-center hover:opacity-60">
                <img src={PopupPakaian} alt="" className="mr-4" />
                <li className="font-bold">Pakaian</li>
              </div>
              <div className="flex items-center hover:opacity-60">
                <img src={PopupKendaraan} alt="" className="mr-4" />
                <li className="font-bold">Kendaraan</li>
              </div>
              <div className="flex items-center hover:opacity-60">
                <img src={PopupHobi} alt="" className="mr-4" />
                <li className="font-bold">Hobi</li>
              </div>
              <div className="flex items-center hover:opacity-60">
                <img src={PopupPeralatan} alt="" className="mr-4" />
                <li className="font-bold">Peralatan</li>
              </div>
            </ul>
          </div>
        </div>

        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/">Beranda</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Katalog">Katalog</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Favorite">Favorite</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Chat">Chat</Link>
        </ul>
        <ul className="text-lg py-2 px-3 rounded-lg hover:bg-[#003F62] hover:text-white cursor-pointer">
          <Link to="/Bantuan">Bantuan</Link>
        </ul>
        <div
          className="flex bg-white border border-[#002F4A] rounded-lg px-6 py-2 cursor-pointer"
          onClick={handleOpenPopup}
        >
          <p className="text-gray-400 mr-8">Masukkan Alamat</p>
          <img src={SearchIcon2} alt="" />
        </div>
      </div>
      {popupAlamat && <PopupAlamat onClose={handleClosePopup} />}
    </div>
  );
}

export default Navbar;
