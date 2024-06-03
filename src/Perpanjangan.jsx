import React, { useState } from 'react';
// import QRCode from 'qrcode.react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './perpanjangan.css';

function Perpanjangan() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="container mt-5">
      <div className="card custom-card">
        <div className="card-header custom-header">
          <h3>Perpanjangan Sewa</h3>
          <p>Tentukan durasi perpanjangan Anda dan lakukan pembayaran.</p>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label>Durasi Perpanjangan</label>
            <div className="d-flex">
              <input 
                type="date" 
                className="form-control me-2" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
              />
              <input 
                type="date" 
                className="form-control" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)} 
              />
            </div>
          </div>
          <div className="mb-3">
            <h5>Detail Pembayaran</h5>
            <table className="table custom-table">
              <tbody>
                <tr>
                  <td>Harga</td>
                  <td>Rp200.000</td>
                </tr>
                <tr>
                  <td>Biaya Penanganan</td>
                  <td>Rp5.000</td>
                </tr>
                <tr>
                  <td>Potongan Harga</td>
                  <td>Rp0</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>Rp205.000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-3 text-center">
            <h5>Scan QR Code</h5>
            {/* <QRCode value="ZARENT NMID : 123412341234" size={128} /> */}
            <p className="mt-2">ZARENT<br/>NMID : 123412341234</p>
            <p>Berlaku sampai dengan<br/><strong>30-10-2024 | 22:00</strong></p>
            <button className="btn btn-primary">Selesai</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perpanjangan;
