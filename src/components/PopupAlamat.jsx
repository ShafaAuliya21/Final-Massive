import SearchIcon from "../assets/navbar/SearchIcon.svg";
import LokasiMapImg from "../assets/navbar/LokasiMapImg.svg";
import LocationIcon from "../assets/navbar/LocationIcon.svg";

function PopupAlamat({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
      <div className="w-[62.5rem] h-[40.75rem] flex flex-col justify-center items-center relative bg-white rounded-3xl">
        <div className="flex justify-evenly w-full">
          <h1 className="text-[#003F62] font-bold text-4xl mb-10">
            Tentukan Lokasi
          </h1>
          <div className="bg-white rounded-3xl h-fit flex pl-4 border-2 border-[B3B3B3]">
            <img src={SearchIcon} alt="" className="mr-2" />
            <input type="text" placeholder="Search" className="outline-none" />
            <button className="bg-[#EDA415] py-2 px-10 rounded-3xl font-bold text-white hover:opacity-80">
              Cari
            </button>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7681132051353!2d107.60841237576244!3d-6.918302549846907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62e2586b97d%3A0x5bf273d32f83efff!2sJl.%20Veteran%2010-2%2C%20Kb.%20Pisang%2C%20Kec.%20Sumur%20Bandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040112!5e0!3m2!1sid!2sid!4v1718698909525!5m2!1sid!2sid"
          loading="lazy"
          width={700}
          height={300}
          referrerPolicy="no-referrer-when-downgrade"
          className="mb-4"
        ></iframe>
        <div className="flex flex-col w-full items-start px-52">
          <h2 className="font-medium text-[#003F62] mb-4">Pencarian Terbaru</h2>
          <div className="w-fit flex border-b border-b-gray-400 pb-4 mb-4">
            <img src={LocationIcon} alt="" className="mr-3" />
            <div className="space-y-1 ">
              <h3>Jl. Dahlia Blok J5 No. 32</h3>
              <p className="text-xs text-gray-400">Bandung, Jawa Barat</p>
            </div>
          </div>
          <div className="w-fit flex">
            <img src={LocationIcon} alt="" className="mr-3" />
            <div className="space-y-1 ">
              <h3>Jl. Dahlia Blok J5 No. 32</h3>
              <p className="text-xs text-gray-400">Bandung, Jawa Barat</p>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-11 left-12 text-3xl font-semibold"
        >
          &larr;
        </button>
      </div>
    </div>
  );
}

export default PopupAlamat;
