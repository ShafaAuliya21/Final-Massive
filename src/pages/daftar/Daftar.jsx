import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import TrolleyImg from "../../assets/daftar/TrolleyImg.svg";
import PassIcon from "../../assets/daftar/PassIcon.svg";
import AtauImg from "../../assets/daftar/AtauImg.svg";
import FacebookIcon from "../../assets/daftar/FacebookIcon.svg";
import GoogleIcon from "../../assets/daftar/GoogleIcon.svg";

function Daftar() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/Masuk");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen bg-[#F0FAA1] relative font-poppins">
      <div className="bg-white rounded-l-[3rem] right-0 p-14 absolute w-[65%] h-screen shadow-2xl">
        <img
          src={TrolleyImg}
          alt=""
          className="absolute top-0 bottom-0 -left-[28rem] my-auto"
        />
        <h1 className="font-bold text-5xl mb-8">Daftar Dulu, Yuk!</h1>
        <form onSubmit={register} className="mx-auto w-fit">
          <label htmlFor="" className="flex flex-col font-bold text-2xl mb-8">
            Email
            <input
              type="text"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-base font-normal w-[34rem] h-[4rem] px-8 mt-2 outline-none rounded-lg shadow-lg border border-[#C8C8C8]"
            />
          </label>
          <label htmlFor="" className="flex flex-col font-bold text-2xl mb-10">
            Password
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-base font-normal w-[34rem] h-[4rem] px-8 mt-2 outline-none rounded-lg shadow-lg border border-[#C8C8C8]"
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <img src={PassIcon} alt="" />
              </span>
            </div>
          </label>
          <button className="h-[4rem] font-bold text-white text-xl w-full bg-[#EDA415] rounded-lg hover:opacity-70">
            Daftar
          </button>
        </form>
        <img src={AtauImg} alt="" className="mx-auto" />
        <div
          className="flex justify-center py-2 mb-4 w-[312px] mx-auto border border-black border-opacity-60 rounded-3xl 
        cursor-pointer hover:opacity-50"
        >
          <img src={FacebookIcon} alt="" className="mr-2" />
          <p className="font-medium">Lanjut dengan Facebook</p>
        </div>
        <div
          className="flex justify-center py-2 mb-4 w-[312px] mx-auto border border-black border-opacity-60 rounded-3xl 
        cursor-pointer hover:opacity-50"
        >
          <img src={GoogleIcon} alt="" className="mr-2" />
          <p className="font-medium">Lanjut dengan Google</p>
        </div>
        <div className="font-medium text-center">
          Sudah punya akun?{" "}
          <Link to="/Masuk" className="text-[#EDA415] cursor-pointer">
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Daftar;
