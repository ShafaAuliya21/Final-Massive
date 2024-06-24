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
import PesananNavigation from "./PesananNavigation";
import PesananCard from "./PesananCard";
import ZerentLogo from "../../assets/pesanan/ZerentLogo.svg";
import ArrowDownIcon from "../../assets/pesanan/ArrowDownIcon.svg";
import PesananQrCode from "../../assets/pesanan/PesananQrCode.png";

function Pesanan() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Popup
  const [open, setOpen] = useState(false);

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
    setSelectedProduct(null);
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
          where("rentalStatus", "==", "pending")
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

  const handleCompleteRental = async (productId) => {
    try {
      const rentalDocRef = doc(db, "rentals", productId);
      await updateDoc(rentalDocRef, {
        rentalStatus: "diproses",
      });
      console.log("Rental status updated successfully");
      handleClosePopup();
      window.location.reload();
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <div className="font-poppins">
      <Navbar></Navbar>

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
            />
          ))}
        </section>
      )}
      {open && (
        <PopupPembayaran
          product={selectedProduct}
          onClose={handleClosePopup}
          onComplete={handleCompleteRental}
        />
      )}

      <Footer></Footer>
    </div>
  );
}

function PopupPembayaran({ product, onClose, onComplete }) {
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
            <div className="flex flex-col justify-between mb-5">
              <h2 className="font-bold text-[#003F62] mb-2">
                Jenis Pengiriman
              </h2>
              <div className="h-[3rem] px-2 flex items-center border border-black rounded-md pr-4">
                <p className="text-[#5533FF] mr-2">Opsi Pengiriman</p>
                <img src={ArrowDownIcon} alt="" />
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

export default Pesanan;
