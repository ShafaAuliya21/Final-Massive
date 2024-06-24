import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import TrolleyImg from "../../assets/daftar/TrolleyImg.svg";
import PassIcon from "../../assets/daftar/PassIcon.svg";
import AtauImg from "../../assets/daftar/AtauImg.svg";
import FacebookIcon from "../../assets/daftar/FacebookIcon.svg";
import GoogleIcon from "../../assets/daftar/GoogleIcon.svg";

function Masuk() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
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
        <h1 className="font-bold text-5xl mb-8">Selamat Datang!</h1>
        <form onSubmit={signIn} className="mx-auto w-fit">
          <label htmlFor="" className="flex flex-col font-bold text-2xl mb-8">
            Email
            <input
              type="text"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="text-base font-normal w-[34rem] h-[4rem] px-8 mt-2 outline-none rounded-lg shadow-lg border border-[#C8C8C8]"
            />
          </label>
          <label htmlFor="" className="flex flex-col font-bold text-2xl mb-2">
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
          <div className="flex items-center mb-4">
            <input type="checkbox" name="" id="" className="mr-2" />
            <p>Ingat Saya</p>
            <p className="ml-auto text-[#4D4D4D] cursor-pointer">
              Lupa Password?
            </p>
          </div>
          <button className="h-[4rem] font-bold text-white text-xl w-full bg-[#EDA415] rounded-lg hover:opacity-70">
            Masuk
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
          Belum punya akun?{" "}
          <Link to="/Daftar" className="text-[#EDA415] cursor-pointer">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Masuk;
