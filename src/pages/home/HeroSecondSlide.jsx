import HeroImgSlide2 from "../../assets/home/HeroImgSlide2.png";

function HeroSecondSlide() {
  return (
    <div className="h-[555px] flex bg-[#F6FCFF] items-center justify-evenly py-16">
      <div className="">
        <h1 className="text-black text-[2.8rem] font-bold mb-6">
          Sewa Apapun dengan <br /> Tenang, Harga Terjangkau
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
        <img src={HeroImgSlide2} alt="" className="" />
      </div>
    </div>
  );
}

export default HeroSecondSlide;
