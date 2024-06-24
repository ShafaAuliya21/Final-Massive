/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PesananCard from "./PesananCard";
import PesananNavigation from "./PesananNavigation";
import CameraIcon from "../../assets/pesanan/CameraIcon.svg";
import VideoIcon from "../../assets/pesanan/VideoIcon.svg";

function PesananKerusakan() {
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
          where("rentalStatus", "==", "kerusakan")
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
      await deleteDoc(rentalDocRef);
      console.log("Rental document deleted successfully");
      handleClosePopup();
      window.location.reload();
    } catch (e) {
      console.error("Error deleting document: ", e);
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
            />
          ))}
        </section>
      )}

      {open && (
        <PopupBukti
          product={selectedProduct}
          onClose={handleClosePopup}
          onComplete={handleCompleteRental}
        />
      )}

      <Footer />
    </div>
  );
}

function PopupBukti({ product, onClose, onComplete }) {
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
      <div className="w-[62.5rem] h-[40.75rem] flex flex-col justify-center items-center relative bg-white rounded-3xl">
        <h1 className="text-[#003F62] font-bold text-4xl mb-10">
          Kerusakan Barang
        </h1>
        <div className="flex gap-x-4 mb-12">
          <div>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} />
            <div
              className="w-[18.5rem]  h-[6.6rem] flex flex-col justify-center items-center rounded-3xl border-2 border-dashed border-[#001622] cursor-pointer hover:opacity-70"
              onClick={handleDivClick}
            >
              <img src={CameraIcon} alt="Camera Icon" className="w-fit " />
              <h2 className="text-sm">Unggah Foto</h2>
            </div>
          </div>
          <div>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} />
            <div
              className="w-[18.5rem] pt-2 h-[6.6rem] flex flex-col justify-center items-center rounded-3xl border-2 border-dashed border-[#001622] cursor-pointer hover:opacity-70"
              onClick={handleDivClick}
            >
              <img src={VideoIcon} alt="Camera Icon" className="w-fit mb-2" />
              <h2 className="text-sm">Unggah Video</h2>
            </div>
          </div>
        </div>
        <textarea
          name=""
          id=""
          placeholder="Tuliskan komentar Anda"
          rows="10"
          className="w-[52rem] border border-[#666E73] rounded-lg mb-8 p-2"
        ></textarea>
        <button
          className="bg-[#EDA415] w-[21.6rem] h-[2.75rem] font-bold text-white rounded-lg hover:opacity-60"
          onClick={() => onComplete(product.id)}
        >
          Kirim
        </button>
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

export default PesananKerusakan;
