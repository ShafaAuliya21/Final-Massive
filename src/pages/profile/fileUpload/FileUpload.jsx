import React, { useState } from "react";
import { storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./FileUpload.css";

const FileUpload = ({ title, onFilesUploaded }) => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = [];

    for (const file of files) {
      const storageRef = ref(storage, `${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("File upload error:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          fileUrls.push(downloadURL);
          if (fileUrls.length === files.length) {
            onFilesUploaded(fileUrls);
          }
        }
      );
    }
  };

  const handleClick = () => {
    document.getElementById("file-upload-input").click();
  };

  return (
    <div className="file-upload-container" style={{ marginTop: "40px" }}>
      <h6 className="text-start">{title}</h6>
      <div className="file-upload-box">
        <div
          className="file-upload-content d-flex gap-4 align-items-center"
          onClick={handleClick}
        >
          <img
            src="https://www.svgrepo.com/show/73906/cloud-upload.svg"
            width={48}
            height={48}
            alt="Icon Kamera"
          />
          <div className="d">
            <p>Select a file or drag and drop here</p>
            <small>JPG, PNG, or PDF. File size no more than 10MB</small>
          </div>
        </div>
        <button className="btn btn-yellow text-white" onClick={handleClick}>
          Select File
        </button>
        <input
          id="file-upload-input"
          type="file"
          multiple
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      {uploadProgress > 0 && <p>Upload progress: {uploadProgress}%</p>}
    </div>
  );
};

export default FileUpload;
