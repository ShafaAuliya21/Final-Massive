/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PesananCard from "./PesananCard";
import PesananNavigation from "./PesananNavigation";
import ZerentLogo from "../../assets/pesanan/ZerentLogo.svg";
import ArrowDownIcon from "../../assets/pesanan/ArrowDownIcon.svg";
import PesananQrCode from "../../assets/pesanan/PesananQrCode.png";
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

function PesananPerpanjangan() {
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
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  // const handleCompleteRental = async (productId) => {
  //   try {
  //     const rentalDocRef = doc(db, "rentals", productId);
  //     await updateDoc(rentalDocRef, {
  //       rentalStatus: "sudah direview",
  //     });
  //     console.log("Rental status updated successfully");
  //     handleClosePopup();
  //     window.location.reload();
  //   } catch (e) {
  //     console.error("Error updating document: ", e);
  //   }
  // };
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
      <Footer />

      {open && (
        <PopupPerpanjangan
          product={selectedProduct}
          onClose={handleClosePopup}
          //   onComplete={handleCompleteRental}
        />
      )}
      {chatOpen && <PopupChat onClose={handleCloseChatPopup} />}
    </div>
  );
}

function PopupPerpanjangan({ product, onClose, onComplete }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
      <div className="bg-white p-12 rounded-lg shadow-lg relative w-[77.5rem] h-[40.75rem]">
        <div className="flex items-center mb-10">
          <img src={ZerentLogo} alt="" />
          <h1 className="font-bold text-4xl">Pembayaran Sewa</h1>
        </div>
        <div>
          <p className="mb-4">
            Isi pilihan secara lengkap agar pembayaran dapat dilakukan.
          </p>
          <div className="flex mb-4">
            <div className="flex flex-col justify-between mb-5 mr-4">
              <h2 className="font-bold text-[#003F62] mb-2">Durasi Sewa</h2>
              <div className="w-[22.5rem] h-[3rem] px-2 flex items-center border border-black rounded-md pr-4">
                <input
                  type="date"
                  placeholder="Start date"
                  className="outline-none w-[80%] mr-2"
                />
                <p className="mr-2">&rarr;</p>
                <input
                  type="date"
                  placeholder="End date"
                  className="outline-none w-[80%]"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[#003F62] mb-2">Detail Pembayaran</h2>
            <div className="bg-[#DFECF6] flex flex-col p-4 rounded-md w-[20.8rem]">
              <div className="flex flex-col gap-y-3 py-4 border-t border-b border-[#AFAFAF]">
                <div className="flex justify-between w-full">
                  <p className="text-lg">Harga</p>
                  <p className="text-lg">Rp.200.000</p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-lg">Biaya Penanganan</p>
                  <p className="text-lg">Rp.5.000</p>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-lg">Potongan Harga</p>
                  <p className="text-lg">Rp0</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <h1 className="font-bold text-2xl">Total</h1>
                <h1 className="font-bold text-2xl">Rp205.000</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${PesananQrCode})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "397px",
            height: "591px",
          }}
          className="absolute top-0 right-16 bottom-0 my-auto"
        >
          <div className="flex flex-col w-full h-full items-center justify-end">
            <button
              className="bg-[#003F62] w-[11.8rem] h-[2.8rem] rounded-xl font-bold text-white mb-3 hover:opacity-60 ease-in-out duration-300"
              onClick={() => onComplete(product.id)}
            >
              Selesai
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-3xl font-semibold"
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

export default PesananPerpanjangan;
