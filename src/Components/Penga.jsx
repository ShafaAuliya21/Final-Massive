import React from "react";
import "./Penga.css";

function Penga(props) {
  return (props.trigger) ? (
    <div className="po">
    <div className="containerd">
        <h1>Pengembalian Barang</h1>
        <form className="form-penga">
            <div className="left-section">
                <div className="form-section">
                  <label className="biru" for="phone">Apa yang ingin anda Ajukan?</label>
                    <label>
                        <input type="radio" name="ajukan" value="penukaran" /> Penukaran Barang 
                    </label>
                    <label>
                        <input type="radio" name="ajukan" value="pengembalian" /> Pengembalian Dana 
                    </label>
                </div>
                <div className="form-section">
                    <label className="biru" for="phone">Apa permasalahan yang Anda Hadapi?</label>
                    
                    <label>
                        <input type="radio" name="permasalahan" value="tidak berfungsi" /> Produk tidak berfungsi dengan baik 
                    </label>
                    <label>
                        <input type="radio" name="permasalahan" value="tidak lengkap" /> Produk tidak lengkap 
                    </label>
                    <label>
                        <input type="radio" name="permasalahan" value="kotor" /> Produk kotor dan tidak layak 
                    </label>
                    <label>
                        <input type="radio" name="permasalahan" value="tidak sesuai" /> Produk tidak sesuai deskripsi dan foto
                    </label>
                </div>
                <div className="form-section">
                    <label  className="biru" for="phone">Nomor Telepon</label>
                    <div className="input-group">
                        <spans>+62</spans>
                        <input type="text" id="phone" name="phone" placeholder="Masukkan nomor telepon" />
                    </div>
                </div>
                <div className="form-section">
                    <label className="biru" for="address">Alamat</label>
                    <input type="a" id="address" name="address" placeholder="Masukkan Alamat" />
                    
                </div>
            </div>
            <div className="right-section">
                <div className="form-section">
                    <label for="upload"><span className="merah">*Perhatikan kualitas media yang diunggah</span></label>
                    <div className="upload-box">
                        <img src="icon/camera.svg" alt="foto" />
                        <input type="file" id="upload" name="upload" accept="image/*" />
                        <label for="upload">Unggah Foto</label>
                    </div>
                </div>
                <div className="form-section">
                    <label  className="biru" for="description">Tuliskan deskripsi kerusakan</label>
                    <textarea id="description" name="description" placeholder="Tulis komentar"></textarea>
                </div>
                <div className="form-section full-width">
                  <button type="submit" className="submit-btn">Kirim</button>
                  {props.children}
              </div>
            </div>
        </form>
    </div>
    </div>
  ) : "";
}

export default Penga;