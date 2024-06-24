import HeroImgSlide3 from "../../assets/home/HeroImgSlide3.png";

function HeroThirdSlide() {
  return (
    <div className="h-[555px] flex bg-[#F6FCFF] items-center justify-evenly py-16">
      <div className="mr">
        <img src={HeroImgSlide3} alt="" className="" />
      </div>
      <div className="">
        <h1 className="text-black text-[2.8rem] font-bold mb-6">
          Temukan Peluang, <br /> Sewakan Barangmu
        </h1>
        <div className="space-x-4">
          <button className="w-[8.9rem] h-[3.75rem] bg-[#003F62] text-white font-bold rounded-xl">
            Katalog
          </button>
          <button className="w-[8.9rem] h-[3.75rem] bg-white text-[#003F62] border border-[#003F62] font-bold rounded-xl">
            Bergabung
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroThirdSlide;
