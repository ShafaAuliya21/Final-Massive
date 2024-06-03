import React from "react";
import "./Popup.css";

function Popups(props) {
  return (props.trigger) ? (
    <div className="popup">
    <div className="containers">
        <h1>Barang Setelah Digunakan</h1>
        <form>
            <div className="upload-section-popup">
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
            <div className="form-section-popup">
                <br/>
                <textarea className="textarea-popup" id="comment" name="comment" placeholder="Tulis komentar"></textarea>
            </div>
            <div className="form-section-popup full-width">
                <button type="submit" className="submit-btn">Kirim</button>
                {props.children}
            </div>
        </form>
    </div>
    </div>
  ) : "";
}

export default Popups;