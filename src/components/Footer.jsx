import React from "react";
import Facebook from "../assets/footer/Facebook.png";
import Messenger from "../assets/footer/Messenger.svg";
import Telegram from "../assets/footer/Telegram.svg";

function Footer() {
  return (
    <div className="font-poppins bg-[#E2F4FF] flex px-24 py-20 relative">
      <div className="space-y-7">
        <h2 className="font-bold text-2xl text-[#003F62]">Zerent</h2>
        <p className="text-[#002F4A] w-[21rem] text-sm">
          Zerent adalah platform e-commerce inovatif yang mengkhususkan dalam
          penyewaan barang dari berbagai kategori. Zerent juga menyediakan fitur
          permintaan untuk penyediaan stok barang yang kalian butuhkan.
        </p>
        <div className="flex gap-x-4">
          <img src={Facebook} alt="" />
          <img src={Messenger} alt="" />
          <img src={Telegram} alt="" />
        </div>
      </div>
      <div className="mx-auto">
        <h3 className="font-bold text-lg text-[#003F62] mb-4">
          Terus ikuti Perkembangan
        </h3>
        <p className="text-[#002F4A] text-sm w-[21rem] mb-8">
          Bergabunglah dengan mailling list kami untuk terus mengikuti
          perkembangan info-info menarik dari kami
        </p>
        <div className="bg-white rounded-3xl h-fit w-fit flex pl-4 border border-black">
          <input
            type="text"
            placeholder="Masukkan Email"
            className="outline-none text-sm"
          />
          <button className="bg-[#EDA415] py-2 px-4 rounded-3xl font-bold text-white text-sm hover:opacity-80">
            Bergabung
          </button>
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="font-bold text-lg text-[#003F62]">Logo</h3>
        <ul className="text-[#002F4A] text-sm font-medium">Bantuan</ul>
        <ul className="text-[#002F4A] text-sm font-medium">
          Pengembalian Barang
        </ul>
        <ul className="text-[#002F4A] text-sm font-medium">
          Syarat & Ketentuan
        </ul>
        <ul className="text-[#002F4A] text-sm font-medium">FAQ</ul>
      </div>
      <p className="text-sm text-center absolute border-t-2 border-black bottom-3 right-0 left-0 w-[90%] mx-auto w pt-2">
        Copyright © 2024 CurtinaAmbhilasa
      </p>
    </div>
  );
}

export default Footer;
