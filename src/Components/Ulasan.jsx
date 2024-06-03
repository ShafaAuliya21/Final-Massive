import React from "react";
import "./Ulasan.css";

function Ulasan(props) {
  return (props.trigger) ? (
    <div className="ulasan">
    <div className="containerx">
        <h1>Bagaimana Produk Kami?</h1>
        <div className="rating">
            <span className="star" data-value="1">&#9734;</span>
            <span className="star" data-value="2">&#9734;</span>
            <span className="star" data-value="3">&#9734;</span>
            <span className="star" data-value="4">&#9734;</span>
            <span className="star" data-value="5">&#9734;</span>
        </div>
        <form>
            <div className="upload-section">
                <div className="upload-box">
                    <input type="file" id="upload-photo" name="upload-photo" accept="image/*" />
                    <label for="upload-photo">
                        <img src="icon/camera.svg" alt="Upload Foto" />
                        Unggah Foto
                    </label>
                </div>
                <div className="upload-box">
                    <input type="file" id="upload-video" name="upload-video" accept="video/*" />
                    <label for="upload-video">
                        <img src="icon/camera-video.svg" alt="Upload Video" />
                        Unggah Video
                    </label>
                </div>
            </div>
            <div className="form-section-ulasan">
                <textarea className="textarea-ulasan" id="comment" name="comment" placeholder="Tuliskan komentar Anda"></textarea>
            </div>
            <div className="form-section-ulasan full-width">
                <button type="submit" className="submit-btn">Kirim</button>
                {props.children}
            </div>
        </form>
    </div>
    </div>
  ) : "";
}

export default Ulasan;