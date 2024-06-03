import logo from './logo.svg';
import './AllPesanan.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Perpanjangan from "./Perpanjangan";
import PesananSelesai from "./PesananSelesai";
import PesananBelum from './PesananBelum';
import PesananProses from './PesananProses';
import PesananDigunakan from './PesananDigunakan';
import PesananPengembalian from './PesananPengembalian';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/Perpanjangan" element={<Perpanjangan />} />
              <Route path="/PesananSelesai" element={<PesananSelesai />} />
              <Route path='/PesananBelum' element={<PesananBelum />} />
              <Route path='/PesananProses' element={<PesananProses />} />
              <Route path='/PesananDigunakan' element={<PesananDigunakan />} />
              <Route path='/PesananPengembalian' element={<PesananPengembalian />} />
          </Routes>
      </Router>

  );
}

export default App;
