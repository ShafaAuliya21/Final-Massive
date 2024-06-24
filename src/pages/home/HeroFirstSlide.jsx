import HeroImg from "../../assets/home/HeroImg.png";
import PlaystoreLogo from "../../assets/home/PlaystoreLogo.png";

function HeroFirstSlide() {
  return (
    <div className="h-[555px] flex bg-[#F6FCFF] items-center justify-evenly py-16">
      <div className="">
        <h1 className="text-[#003F62] text-[2.8rem] font-bold mb-2">
          TERPENUHI DENGAN RENTAL
        </h1>
        <h2 className="text-[#003F62] text-2xl mb-12">
          Aplikasi Penyedia Kebutuhan Sementara
        </h2>
        <div className="flex bg-[#003F62] py-2 px-5 rounded-xl w-fit items-center">
          <img src={PlaystoreLogo} alt="" className="mr-4" />
          <p className="text-white font-bold text-lg">Download Now</p>
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
}

export default HeroFirstSlide;
