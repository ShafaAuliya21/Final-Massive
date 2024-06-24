/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import TokoImg from "../../assets/pesanan/TokoImg.png";

function PesananCard({ product, onClick, onChatClick }) {
  const location = useLocation();
  const totalDeposit = product.rentalDuration * product.deposit;

  const formattedTotalIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalDeposit);

  const deposit = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(product.deposit);

  let buttonText = "Bayar Sekarang";
  if (location.pathname === "/Pesanandiproses") {
    buttonText = "Unggah Foto";
  } else if (location.pathname === "/Pesanankerusakan") {
    buttonText = "Unggah Foto";
  } else if (location.pathname === "/Pesananpengembalian") {
    buttonText = "Unggah Foto";
  }

  return (
    <div className="w-[81rem] font-poppins shadow-lg rounded-xl px-8 pb-4 mb-8">
      {/* Top */}
      <section className="flex justify-between items-center border-b border-[#8F8C8C] mb-4">
        <div className="flex items-center">
          <div>
            <img src={product.productImage} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-lg">{product.productName}</h1>
            <h2>Durasi: {product.rentalDuration} Hari</h2>
            <h3>
              Tanggal: {product.rentalStartDate} - {product.rentalEndDate}
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-end gap-y-2">
          <p className="text-lg">{deposit}/ Hari</p>
          <p className="bg-[#D9E2E7] text-sm rounded-2xl w-fit px-2 py-[0.1rem]">
            Deposit
          </p>
          <h4 className="font-bold text-2xl">Total: {formattedTotalIDR}</h4>
        </div>
      </section>

      {/* Bottom */}
      <section className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={TokoImg} alt="" className="mr-8" />
          <h2 className="font-semibold text-2xl">Toko Serba Ada</h2>
        </div>
        {location.pathname !== "/Pesanandigunakan" &&
          location.pathname !== "/Pesananselesai" &&
          location.pathname !== "/Pesananperpanjangan" && (
            <div>
              <button
                className="w-[13.5rem] h-[2.75rem] bg-[#003F62] text-[#E6ECEF] font-bold rounded-xl hover:bg-[#00263B] ease-in-out duration-300"
                onClick={onClick}
              >
                {buttonText}
              </button>
            </div>
          )}
        {location.pathname === "/Pesanandigunakan" && (
          <div className="flex gap-x-4">
            <button
              className="w-[13.5rem] h-[2.75rem] bg-[#003F62] text-[#E6ECEF] font-bold rounded-xl hover:bg-[#00263B] ease-in-out duration-300"
              onClick={onChatClick}
            >
              Ajukan Pengembalian
            </button>
            <button
              className="w-[13.5rem] h-[2.75rem] bg-[#003F62] text-[#E6ECEF] font-bold rounded-xl hover:bg-[#00263B] ease-in-out duration-300"
              onClick={onClick}
            >
              Laporan Kerusakan
            </button>
          </div>
        )}
        {location.pathname === "/Pesananselesai" && (
          <div className="flex gap-x-4">
            <button
              className={`w-[13.5rem] h-[2.75rem] ${
                product.rentalStatus === "sudah direview" &&
                "bg-white text-black border border-[#242135] hover:text-white hover:bg-[#003F62]"
              } bg-[#003F62] text-[#E6ECEF] font-bold rounded-xl hover:bg-[#00263B] ease-in-out duration-300`}
              onClick={onClick}
            >
              Beri Ulasan
            </button>
          </div>
        )}
        {location.pathname === "/Pesananperpanjangan" && (
          <div className="flex gap-x-4">
            <button
              className="w-[13.5rem] h-[2.75rem] bg-[#003F62] text-[#E6ECEF] font-bold rounded-xl hover:bg-[#00263B] ease-in-out duration-300"
              onClick={onChatClick}
            >
              Chat Toko
            </button>
            <button
              className="w-[13.5rem] h-[2.75rem] bg-[#003F62] text-[#E6ECEF] font-bold rounded-xl hover:bg-[#00263B] ease-in-out duration-300"
              onClick={onClick}
            >
              Perpanjang
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default PesananCard;
