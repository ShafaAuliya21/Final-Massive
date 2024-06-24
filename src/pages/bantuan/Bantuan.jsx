import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaqItem from "./FaqItem";
import BannerBantuan from "../../assets/bantuan/BannerBantuan.svg";
import AkunIcon from "../../assets/bantuan/AkunIcon.svg";
import InformasiIcon from "../../assets/bantuan/InformasiIcon.svg";
import LainnyaIcon from "../../assets/bantuan/LainnyaIcon.svg";
import PembayaranIcon from "../../assets/bantuan/PembayaranIcon.svg";
import PengembalianIcon from "../../assets/bantuan/PengembalianIcon.svg";
import PenggelapanIcon from "../../assets/bantuan/PenggelapanIcon.svg";

const faqData = [
  {
    question: "Bagaimana cara menyewa barang di Zerent?",
    answer: "Untuk melakukan peminjaman barang hal pertama yang.....",
  },
  {
    question:
      "Bagaimana jika barang yang sedang disewa rusak ketika sedang digunakan?",
    answer: "Untuk melakukan peminjaman barang hal pertama yang.....",
  },
  {
    question: "Bagaimana cara pengaduan kerusakan barang?",
    answer: "Untuk melakukan peminjaman barang hal pertama yang.....",
  },
  {
    question: "Bagaimana cara pembayaran di Zerent?",
    answer: "Untuk melakukan peminjaman barang hal pertama yang.....",
  },
  {
    question:
      "Apakah ada biaya tambahan yang perlu saya bayar selain biaya sewa? ",
    answer: "Untuk melakukan peminjaman barang hal pertama yang.....",
  },
  {
    question: "Bagaimana cara pengambilan dan pengembalian barang yang disewa?",
    answer: "Untuk melakukan peminjaman barang hal pertama yang.....",
  },
];

function Bantuan() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>

      {/* Banner Image */}
      <div>
        <img src={BannerBantuan} alt="" className="w-full" />
      </div>

      {/* Panduan Section */}
      <section className="py-20">
        <h1 className="text-2xl text-center text-[#EDA415] font-bold mb-2">
          Panduan
        </h1>
        <h2 className="text-4xl text-center text-[#003F62] font-bold mb-24">
          Pilih Topik Sesuai Kendala Penyewaanmu
        </h2>
        <div className="flex justify-evenly mb-14">
          <div className="flex items-center justify-center w-[23.75rem] h-[7.5rem] border border-[#D6D6D6] rounded-xl gap-x-4 cursor-pointer hover:opacity-70">
            <img src={AkunIcon} alt="" />
            <h2 className="font-bold text-lg">Akun dan Keamanan</h2>
          </div>
          <div className="flex items-center justify-center w-[23.75rem] h-[7.5rem] border border-[#D6D6D6] rounded-xl gap-x-4 cursor-pointer hover:opacity-70">
            <img src={PembayaranIcon} alt="" />
            <h2 className="font-bold text-lg">Pembayaran</h2>
          </div>
          <div className="flex items-center justify-center w-[23.75rem] h-[7.5rem] border border-[#D6D6D6] rounded-xl gap-x-4 cursor-pointer hover:opacity-70">
            <img src={PenggelapanIcon} alt="" />
            <h2 className="font-bold text-lg">
              Penipuan & <br /> Penggelapan
            </h2>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex items-center justify-center w-[23.75rem] h-[7.5rem] border border-[#D6D6D6] rounded-xl gap-x-4 cursor-pointer hover:opacity-70">
            <img src={PengembalianIcon} alt="" />
            <h2 className="font-bold text-lg">Pengembalian Dana</h2>
          </div>
          <div className="flex items-center justify-center w-[23.75rem] h-[7.5rem] border border-[#D6D6D6] rounded-xl gap-x-4 cursor-pointer hover:opacity-70">
            <img src={InformasiIcon} alt="" />
            <h2 className="font-bold text-lg">Informasi Umum</h2>
          </div>
          <div className="flex items-center justify-center w-[23.75rem] h-[7.5rem] border border-[#D6D6D6] rounded-xl gap-x-4 cursor-pointer hover:opacity-70">
            <img src={LainnyaIcon} alt="" />
            <h2 className="font-bold text-lg">Lainnya</h2>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col items-center py-40">
        <h1 className="text-2xl text-center text-[#EDA415] font-bold mb-2">
          Frequently Asked Question
        </h1>
        <h2 className="text-4xl text-center text-[#003F62] font-bold mb-24">
          Pertanyaan yang Sering Diajukan
        </h2>
        {/* FAQ Item */}
        <div className="w-[70%] space-y-12">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default Bantuan;
