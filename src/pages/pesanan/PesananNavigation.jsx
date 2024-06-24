import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function PesananNavigation() {
  const [pesanan, setPesanan] = useState(true);
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const navItems = [
    { path: "/Pesanan", label: "Belum Bayar" },
    { path: "/Pesanandiproses", label: "Sedang Diproses" },
    { path: "/Pesanandigunakan", label: "Digunakan" },
    { path: "/Pesananpengembalian", label: "Pengembalian" },
    { path: "/Pesananselesai", label: "Selesai" },
    { path: "/Pesanankerusakan", label: "Kerusakan" },
    { path: "/Pesananperpanjangan", label: "Perpanjangan" },
  ];

  return (
    <section className="mb-12 font-poppins">
      <div className="bg-[#E9F5FE] py-1 w-[90%] mx-auto flex justify-evenly items-center rounded-lg">
        {navItems.map((item) => (
          <ul
            key={item.path}
            className={`text-lg py-2 px-3 rounded-lg ${
              url === item.path ? "bg-[#003F62] text-white" : ""
            } hover:bg-[#003F62] hover:text-white cursor-pointer`}
          >
            <Link to={item.path}>{item.label}</Link>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default PesananNavigation;
