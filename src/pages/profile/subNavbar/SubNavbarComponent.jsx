import React, { useEffect } from "react";

const SubNavbarComponent = () => {
  return (
    <nav
      className="navbar px-3"
      style={{
        backgroundColor: "#F6FCFF",
        paddingTop: "0",
        paddingBottom: "0",
        borderBottom: "1px solid black",
      }}
    >
      <div className="container-fluid">
        <span
          className="text-white"
          style={{
            backgroundColor: "#EDA415",
            height: "100%",
            padding: "25px",
          }}
        >
          Pilih Kategori Barang &nbsp; &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-chevron-compact-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
            />
          </svg>
        </span>
        <ul
          className="nav justify-content-center p-2"
          style={{ gap: "5%", display: "ruby" }}
        >
          <li style={{ marginRight: "45px", marginLeft: "45px" }}>
            <a className="text-black" href="#home">
              Beranda
            </a>
          </li>
          <li style={{ marginRight: "45px", marginLeft: "45px" }}>
            <a className="text-black" href="#catalog">
              Katalog
            </a>
          </li>
          <li style={{ marginRight: "45px", marginLeft: "45px" }}>
            <a className="text-black" href="#request">
              Request
            </a>
          </li>
          <li style={{ marginRight: "45px", marginLeft: "45px" }}>
            <a className="text-black" href="#chat">
              Chat
            </a>
          </li>
          <li style={{ marginRight: "45px", marginLeft: "45px" }}>
            <a className="text-black" href="#help">
              Bantuan
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control"
            value={"Jl. Dahlia Blok J5 No. 32"}
            style={{
              border: "1px solid black",
              fontSize: "12px",
              width: "305px",
              height: "48px",
              borderRadius: "10px",
            }}
          ></input>
        </form>
      </div>
    </nav>
  );
};

export default SubNavbarComponent;
