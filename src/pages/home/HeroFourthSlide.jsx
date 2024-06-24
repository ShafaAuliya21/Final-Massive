import HeroImgSlide4 from "../../assets/home/HeroImgSlide4.png";

function HeroFourthSlide() {
  return (
    <div className="h-[555px] flex bg-[#F6FCFF] items-center justify-between py-16">
      <div className="pl-20">
        <h1 className="text-black text-[2.8rem] font-bold mb-6">
          Kualitas Barang Terjamin, <br /> Pastikan Sewa Lagi
        </h1>
        <div className="space-x-4">
          <button className="w-[8.9rem] h-[3.75rem] bg-[#003F62] text-white font-bold rounded-xl">
            Katalog
          </button>
          <button className="w-[8.9rem] h-[3.75rem] bg-white text-[#003F62] border border-[#003F62] font-bold rounded-xl">
            Request
          </button>
        </div>
      </div>
      <div className="">
        <img src={HeroImgSlide4} alt="" className="" />
      </div>
    </div>
  );
}

export default HeroFourthSlide;
