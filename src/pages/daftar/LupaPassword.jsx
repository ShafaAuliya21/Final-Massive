import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrolleyImg from "../../assets/daftar/TrolleyImg.svg";
import QuestionImg from "../../assets/daftar/QuestionImg.svg";
import AtauImg from "../../assets/daftar/AtauImg.svg";

function LupaPassword() {
  return (
    <div className="h-screen bg-[#F0FAA1] relative font-poppins">
      <div className="bg-white rounded-l-[3rem] right-0 p-14 absolute w-[65%] h-screen shadow-2xl">
        <img
          src={TrolleyImg}
          alt=""
          className="absolute top-0 bottom-0 -left-[28rem] my-auto"
        />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl text-center mb-8">
            Lupa password kamu?
          </h1>
          <img src={QuestionImg} alt="" className="w-fit" />
          <input
            type="text"
            placeholder="Masukkan email "
            className="text-base font-normal w-[34rem] h-[4rem] px-8 mt-2 mb-6 outline-none rounded-lg shadow-lg border border-[#C8C8C8]"
          />
          <button className="w-[34rem] h-[4rem] font-bold text-white text-xl bg-[#EDA415] rounded-lg hover:opacity-70">
            Kirim permintaan
          </button>
          <img src={AtauImg} alt="" className="mx-auto" />
          <div className="font-medium text-center">
            Belum akun baru?{" "}
            <Link to="/Daftar" className="text-[#EDA415] cursor-pointer">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LupaPassword;
