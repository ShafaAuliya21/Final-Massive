/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PesananCard from "./PesananCard";
import PesananNavigation from "./PesananNavigation";
import SearchIcon2 from "../../assets/navbar/SearchIcon2.svg";
import CameraIcon from "../../assets/pesanan/CameraIcon.svg";
import ChatIcon from "../../assets/chat/ChatIcon.svg";
import SearchIcon from "../../assets/navbar/SearchIcon.svg";
import ChatCard from "../chat/ChatCard";
import ProfileImg from "../../assets/chat/ProfileImg.png";
import ArrowDown from "../../assets/chat/ArrowDown.svg";
import SmileIcon from "../../assets/chat/SmileIcon.svg";
import PaperclipIcon from "../../assets/chat/PaperclipIcon.svg";
import SendIcon from "../../assets/chat/SendIcon.svg";
import ChatIcon1 from "../../assets/chat/ChatIcon1.png";
import ChatIcon2 from "../../assets/chat/ChatIcon2.png";
import ChatIcon3 from "../../assets/chat/ChatIcon3.png";

const chatCards = [
  {
    user: "Jasmine",
    time: "16.43",
    snippet: "Oke ditunggu yaa",
    img: ProfileImg,
    messages: [
      {
        from: "user",
        text: "Hallo, siang ini saya ingin mengambil kamera yang sudah saya sewa, apakah bisa diambil?",
      },
      { from: "other", text: "Selamat datang, ada yang bisa dibantu?" },
      {
        from: "other",
        text: "Tentu saja, kakak bisa mengambil kamera yang telah disewa. Jam berapa diambilnya kak? Apakah ada waktu tertentu yang spesifik untuk diambilnya?",
      },
      { from: "user", text: "Saya ingin mengambilnya jam 2 siang" },
      {
        from: "other",
        text: "Baik, silahkan datang, jam 2 siang akan saya siapkan kamera Canon 1500D untuk Anda. Silakan konfirmasi lokasi pengambilan dan durasi sewa yang diinginkan.",
      },
    ],
  },
  {
    user: "Max",
    time: "09.12",
    snippet: "All good here, how about you?",
    img: ChatIcon1,
    messages: [
      { from: "user", text: "Hey Max, how's it going?" },
      { from: "other", text: "All good here, how about you?" },
      { from: "user", text: "Hey Max, how's it going?" },
      { from: "other", text: "All good here, how about you?" },
    ],
  },
  {
    user: "Michelle Guiterrez",
    time: "16.43",
    snippet: "Thanks a lot! Great work.",
    img: ChatIcon2,
    messages: [
      { from: "user", text: "Michelle, the project is complete." },
      { from: "other", text: "Thanks a lot! Great work." },
    ],
  },
  {
    user: "Toko Amanah",
    time: "09.12",
    snippet: "Sure, please provide the details.",
    img: ChatIcon3,
    messages: [
      { from: "user", text: "Hi, I'd like to review my purchase." },
      { from: "other", text: "Sure, please provide the details." },
    ],
  },
];

function PesananDigunakan() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Popup
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleOpenChatPopup = () => {
    setChatOpen(true);
  };

  const handleCloseChatPopup = () => {
    setChatOpen(false);
  };
  // Firebase
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check user id
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Get Pesanan
  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "rentals"),
          where("userId", "==", userId),
          where("rentalStatus", "==", "digunakan")
        );
        const querySnapshot = await getDocs(q);
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataArray);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleCompleteRental = async (productId) => {
    try {
      const rentalDocRef = doc(db, "rentals", productId);
      await updateDoc(rentalDocRef, {
        rentalStatus: "kerusakan",
      });
      console.log("Rental status updated successfully");
      handleClosePopup();
      window.location.reload();
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Navigation */}
      <section className="pt-12">
        <h1 className="text-[#003F62] text-2xl font-bold mb-10 ml-20">
          Pesanan Saya
        </h1>
        <PesananNavigation />
      </section>

      {/* Pesanan Card */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <section className="mx-auto w-fit mb-12">
          {data.map((item) => (
            <PesananCard
              key={item.id}
              product={item}
              onClick={() => handleOpenPopup(item)}
              onChatClick={() => handleOpenChatPopup()}
            />
          ))}
        </section>
      )}
      {open && (
        <PopupLaporanKerusakan
          product={selectedProduct}
          onClose={handleClosePopup}
          onComplete={handleCompleteRental}
        />
      )}
      {chatOpen && <PopupChat onClose={handleCloseChatPopup} />}

      <Footer />
    </div>
  );
}

function PopupLaporanKerusakan({ product, onClose, onComplete }) {
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
      <div className="w-[62.5rem] h-[95%] flex flex-col justify-center items-center relative bg-white rounded-3xl">
        <h1 className="text-[#003F62] font-bold text-4xl mb-8">
          Pengaduan Kerusakan
        </h1>
        <div className="flex justify-evenly w-full">
          {/* Left */}
          <div className="space-y-4 w-fit">
            <h2 className="text-[#003F62] font-medium ">
              Apa yang ingin Anda ajukan?
            </h2>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              Penukaran Barang
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              Pengembalian Barang
            </label>
            <h2 className="text-[#003F62] font-medium ">
              Apa permasalahan yang Anda Hadapi?
            </h2>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              Produk tidak berfungsi dengan baik
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              Produk tidak lengkap
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              Produk kotor dan tidak layak
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              Produk tidak sesuai deskripsi dan <br /> foto
            </label>
            <h2 className="text-[#003F62] font-medium ">Nomor Telepon</h2>
            <div className="w-[22.5rem] h-[3rem] flex border border-black rounded-md pr-4">
              <p className="bg-[#003F62] px-2 pt-3 mr-2 rounded-l-md text-sm text-white">
                +62
              </p>
              <input
                type="text"
                placeholder="Masukkan nomor telepon"
                className="outline-none"
              />
            </div>
            <h2 className="text-[#003F62] font-medium ">Alamat</h2>
            <div className="flex bg-white border border-[#002F4A] rounded-lg px-6 py-3 w-fit">
              <input
                type="text"
                placeholder="Masukkan Alamat"
                className="outline-none"
              />
              <img src={SearchIcon2} alt="" className="w-fit" />
            </div>
          </div>
          {/* Right */}
          <div className="w-fit">
            <p className="text-[#FF0000] text-sm mb-2">
              *Perhatikan kualitas media yang diunggah
            </p>
            <div className="mb-4">
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <div
                className="w-[18.5rem] pt-2 h-[6.6rem] flex flex-col justify-center items-center rounded-3xl border-2 border-dashed border-[#001622] cursor-pointer hover:opacity-70"
                onClick={handleDivClick}
              >
                <img
                  src={CameraIcon}
                  alt="Camera Icon"
                  className="w-fit mb-2"
                />
                <h2 className="text-sm">Unggah Foto</h2>
              </div>
            </div>
            <h2 className="text-[#003F62] font-medium mb-2">
              Tuliskan deskripsi kerusakan
            </h2>
            <textarea
              name=""
              id=""
              placeholder="Tuliskan komentar Anda"
              rows="10"
              className="w-full border border-[#666E73] rounded-lg mb-8 p-2"
            ></textarea>
            <button
              className="bg-[#EDA415] w-full h-[2.75rem] font-bold text-white rounded-lg hover:opacity-60"
              onClick={() => onComplete(product.id)}
            >
              Kirim
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-6 text-3xl font-semibold"
        >
          X
        </button>
      </div>
    </div>
  );
}

function PopupChat({ onClose }) {
  const [selectedChat, setSelectedChat] = useState(chatCards[0]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
      <div className="w-[62.5rem] h-[95%] flex justify-center items-center relative bg-white rounded-3xl">
        {/* Left */}
        <section className="w-[40%]  px-12 py-6 ">
          <div className="w-fit flex items-center gap-x-8 mb-8">
            <img src={ChatIcon} alt="" />
            <h1 className="font-bold text-4xl">Chat</h1>
          </div>
          <div className="bg-white rounded-3xl w-fit flex pl-4 border border-[#B3B3B3] mb-4 max-w-[20rem]">
            <img src={SearchIcon} alt="" className="mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-fit"
            />
            <button className="bg-[#EDA415] py-2 px-6 rounded-3xl font-bold text-white hover:opacity-80">
              Cari
            </button>
          </div>
          <div className="space-y-4">
            {chatCards.map((card, index) => (
              <ChatCard
                key={index}
                user={card.user}
                time={card.time}
                snippet={card.snippet}
                img={card.img}
                onClick={() => setSelectedChat(card)}
              />
            ))}
          </div>
        </section>
        {/* Right */}
        <section className="w-full h-full border-l border-[#B3B3B3] flex flex-col">
          <div className="w-full flex items-center px-12 py-4">
            <img
              src={selectedChat.img}
              alt=""
              className="mr-4 w-[56px] h-[56px]"
            />
            <div>
              <h2 className="font-medium">{selectedChat.user}</h2>
              <p className="text-sm text-[#4BC76E]">Online</p>
            </div>
            <img
              src={ArrowDown}
              alt=""
              className="ml-auto cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="w-full flex-1 bg-[#D7D7D778] bg-opacity-45 pt-4 overflow-y-auto">
            <h1 className="font-medium text-[#909098] text-center text-sm">
              Hari ini
            </h1>
            {/* Chat Bubble */}
            <div className="w-full space-y-4 px-12">
              {selectedChat.messages.map((message, index) => (
                <div
                  key={index}
                  className={`w-[11.5rem] p-2 rounded-xl ${
                    message.from === "user"
                      ? "bg-[#003F62] ml-auto text-white"
                      : "bg-white mr-auto text-black"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* User Input */}
          <div className="w-full px-16 bg-[#D7D7D778] bg-opacity-45 py-3 flex justify-center border-t border-[#BFBFBF]">
            <div className="w-full flex items-center px-3 mr-4 bg-white rounded-2xl border border-black">
              <img
                src={SmileIcon}
                alt=""
                className="mr-4 hover:bg-[#d9d9d978] cursor-pointer rounded-full h-fit"
              />
              <input
                type="text"
                placeholder="Ketik Pesan"
                className="outline-none w-full"
              />
              <img
                src={PaperclipIcon}
                alt=""
                className="ml-auto hover:bg-[#d9d9d978] cursor-pointer rounded-full"
              />
            </div>
            <img
              src={SendIcon}
              alt=""
              className="cursor-pointer hover:opacity-70"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default PesananDigunakan;
