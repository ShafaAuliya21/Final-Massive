import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Bantuan from "./pages/bantuan/Bantuan";
import Favorite from "./pages/favorite/Favorite";
import FavoritePakaian from "./pages/favorite/FavoritePakaian";
import FavoriteElektronik from "./pages/favorite/FavoriteElektronik";
import FavoriteKendaraan from "./pages/favorite/FavoriteKendaraan";
import Katalog from "./pages/katalog/Katalog";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import Pesanan from "./pages/pesanan/Pesanan";
import PesananDiproses from "./pages/pesanan/PesananDiproses";
import PesananDigunakan from "./pages/pesanan/PesananDigunakan";
import PesananPengembalian from "./pages/pesanan/PesananPengembalian";
import PesananSelesai from "./pages/pesanan/PesananSelesai";
import PesananKerusakan from "./pages/pesanan/PesananKerusakan";
import PesananPerpanjangan from "./pages/pesanan/PesananPerpanjangan";
import Chat from "./pages/chat/Chat";
import Daftar from "./pages/daftar/Daftar";
import Masuk from "./pages/daftar/Masuk";
import LupaPassword from "./pages/daftar/LupaPassword";
import ProfileContainer from "./pages/profile/ProfileContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Daftar" element={<Daftar />} />
        <Route path="/Masuk" element={<Masuk />} />
        <Route path="/Lupapassword" element={<LupaPassword />} />
        <Route path="/Katalog" element={<Katalog />} />
        <Route path="/Detailproduct" element={<DetailProduct />} />
        <Route path="/Pesanan" element={<Pesanan />} />
        <Route path="/Pesanandiproses" element={<PesananDiproses />} />
        <Route path="/Pesanandigunakan" element={<PesananDigunakan />} />
        <Route path="/Pesananpengembalian" element={<PesananPengembalian />} />
        <Route path="/Pesananselesai" element={<PesananSelesai />} />
        <Route path="/Pesanankerusakan" element={<PesananKerusakan />} />
        <Route path="/Pesananperpanjangan" element={<PesananPerpanjangan />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Favoritepakaian" element={<FavoritePakaian />} />
        <Route path="/Favoriteelektronik" element={<FavoriteElektronik />} />
        <Route path="/Favoritekendaraan" element={<FavoriteKendaraan />} />
        <Route path="/Bantuan" element={<Bantuan />} />
      </Routes>
      <Routes>
        <Route path="/Profile" element={<ProfileContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
