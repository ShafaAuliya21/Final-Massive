import React, { useState, useEffect } from "react";
import "./SidebarComponent.css";

const SidebarComponent = ({ activeTab, handleTabChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showStoreMenu, setShowStoreMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0); // State untuk menyimpan ketinggian menu dropdown

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    // Mengatur ketinggian dropdown "Toko Saya" sesuai dengan status dropdown "Redha Rizki"
    setMenuHeight(showMenu ? 0 : 430);
  };

  const toggleStoreMenu = () => setShowStoreMenu(!showStoreMenu);

  return (
    <div className="sidebar">
      <div className="dropdown mb-3 btn-dropdown-profile">
        <button
          className="btn btn-secondary btn-block w-100 btn-profile"
          type="button"
          onClick={toggleMenu}
        >
          <a className="text-black" style={{ fontSize: "16px" }}>
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="Avatar"
              className="img-fluid img-in-btn"
              style={{ borderRadius: "50%" }}
            />
            Redha Rizki{" "}
          </a>{" "}
          <span class="badge badge-primary" style={{ alignSelf: "center" }}>
            Personal
          </span>{" "}
          {showMenu ? (
            <span className="caret-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                class="bi bi-chevron-compact-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"
                />
              </svg>
            </span>
          ) : (
            <span className="caret-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                class="bi bi-chevron-compact-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                />
              </svg>
            </span>
          )}
        </button>
        <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
          <div className="dropdown-header bg-trans">
            <div className="row">
              <div className="col-3">
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt="Avatar"
                  className="img-fluid"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="col-9">
                <div style={{ display: "block" }}>
                  <div
                    className="text-black d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    Riski Ridho{" "}
                    <span class="badge badge-primary">Personal</span>
                  </div>
                  <div className="s">Ridso@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mx-2" />
          <a
            className={`dropdown-item ${
              activeTab == "edit-profile" ? "active" : ""
            }`}
            onClick={() => handleTabChange("edit-profile")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-sliders2-vertical"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5M2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5M8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1m3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5m2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5"
              />
            </svg>
            Edit Profile
          </a>
          <a
            className={`dropdown-item ${
              activeTab == "verifikasi" ? "active" : ""
            }`}
            onClick={() => handleTabChange("verifikasi")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-bar-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"
              />
            </svg>
            Verifikasi
          </a>
          <a
            className={`dropdown-item ${
              activeTab == "tambah-alamat" ? "active" : ""
            }`}
            onClick={() => handleTabChange("tambah-alamat")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-add-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0" />
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
            Tambah Alamat
          </a>
          <a
            className={`dropdown-item ${
              activeTab == "hubungkan-ewallet" ? "active" : ""
            }`}
            onClick={() => handleTabChange("hubungkan-ewallet")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-credit-card"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
            Dompet Digital
          </a>
          <hr className="mx-2" />
          <a
            className={`dropdown-item ${
              activeTab == "signout" ? "active" : ""
            }`}
            onClick={() => handleTabChange("signout")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
              />
              <path
                fill-rule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
              />
            </svg>
            Sign Out
          </a>
        </div>
      </div>
      <div className="dropdown" style={{ marginTop: `${menuHeight}px` }}>
        <button
          className="btn btn-secondary btn-block w-100 btn-profile"
          type="button"
          onClick={toggleStoreMenu}
        >
          <div className="text-black" style={{ fontSize: "16px" }}>
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt="Avatar"
              className="img-fluid img-in-btn"
              style={{ borderRadius: "50%" }}
            />
            Toko Saya
          </div>
          {showStoreMenu ? (
            <span className="caret-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                class="bi bi-chevron-compact-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"
                />
              </svg>
            </span>
          ) : (
            <span className="caret-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                class="bi bi-chevron-compact-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                />
              </svg>
            </span>
          )}
        </button>
        <div className={`dropdown-menu ${showStoreMenu ? "show" : ""}`}>
          <div className="dropdown-header bg-trans">
            <div className="row">
              <div className="col-3">
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt="Avatar"
                  className="img-fluid"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="col-9">
                <div style={{ display: "block" }}>
                  <div className="text-black">Toko Saya</div>
                  <div className="s">tsbub@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mx-2" />
          <a
            className={`dropdown-item ${
              activeTab == "edit-profile-toko" ? "active" : ""
            }`}
            onClick={() => handleTabChange("edit-profile-toko", true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-sliders2-vertical"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5M2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5M8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1m3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5m2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5"
              />
            </svg>
            Edit Profile
          </a>
          <a
            className={`dropdown-item ${
              activeTab == "verifikasi-toko" ? "active" : ""
            }`}
            onClick={() => handleTabChange("verifikasi-toko", true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-bar-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"
              />
            </svg>
            Tambah Produk
          </a>
          <a
            className={`dropdown-item ${
              activeTab == "tambah-alamat-toko" ? "active" : ""
            }`}
            onClick={() => handleTabChange("tambah-alamat-toko", true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-display"
              viewBox="0 0 16 16"
            >
              <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
            </svg>
            Produk Saya
          </a>
          <a
            className={`dropdown-item ${
              activeTab == "signout-toko" ? "active" : ""
            }`}
            onClick={() => handleTabChange("signout-toko", true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart-check"
              viewBox="0 0 16 16"
            >
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            Pesanan
          </a>
          <a
            className={`dropdown-item ${
              activeTab == "hubungkan-ewallet-toko" ? "active" : ""
            }`}
            onClick={() => handleTabChange("hubungkan-ewallet-toko", true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-credit-card"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
            Dompet Digital
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
