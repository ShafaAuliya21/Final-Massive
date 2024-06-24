import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ChatIcon from "../../assets/chat/ChatIcon.svg";
import SearchIcon from "../../assets/navbar/SearchIcon.svg";
import ChatCard from "./ChatCard";
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

function Chat() {
  const [selectedChat, setSelectedChat] = useState(chatCards[0]);

  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <section className="flex ">
        {/* Left */}
        <section className="w-[40%]  px-12 py-6 ">
          <div className="w-fit flex items-center gap-x-8 mb-8">
            <img src={ChatIcon} alt="" />
            <h1 className="font-bold text-4xl">Chat</h1>
          </div>
          <div className="bg-white rounded-3xl w-full flex pl-4 border border-[#B3B3B3] mb-4">
            <img src={SearchIcon} alt="" className="mr-2" />
            <input type="text" placeholder="Search" className="outline-none" />
            <button className="bg-[#EDA415] py-2 px-10 rounded-3xl font-bold text-white hover:opacity-80 ml-auto">
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
        <section className="w-full border-l border-[#B3B3B3]">
          <div className="w-full flex items-center px-12 py-4">
            <img
              src={selectedChat.img}
              alt=""
              className="mr-4 [56px] h-[56px]"
            />
            <div>
              <h2 className="font-medium">{selectedChat.user}</h2>
              <p className="text-sm text-[#4BC76E]">Online</p>
            </div>
            <img src={ArrowDown} alt="" className="ml-auto" />
          </div>
          <div className="w-full relative h-full bg-[#D7D7D778] bg-opacity-45 pt-4 ">
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
            {/* User Input */}
            <div className="w-full absolute bottom-0 px-16 bg-[#D7D7D778] bg-opacity-45 py-3 flex justify-center border-t border-[#BFBFBF]">
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
          </div>
        </section>
      </section>
    </div>
  );
}

export default Chat;
