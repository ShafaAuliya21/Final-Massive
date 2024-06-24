import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FileUpload from "../fileUpload/FileUpload";
import AddressCard from "../addressCard/AddressCard";
import "./ContentComponent.css";
import WithdrawalPage from "../payment/paymentPage";
import { addProduct } from "../../../firestore";

const ContentComponent = ({ activeTab, isStoreSection, handleTabChange }) => {
  // State untuk menentukan tab yang sedang aktif
  // const [activeTab, setActiveTab] = useState('edit-profile');

  // // Fungsi untuk menangani perubahan tab yang dipilih
  // const handleTabChange = (tabId) => {
  //   setActiveTab(tabId);
  // };
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCondition, setProductCondition] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productDelivery, setProductDelivery] = useState("Ambil di tempat");
  const [productPrice, setProductPrice] = useState("");
  const [productImages, setProductImages] = useState(null);

  const handleFilesUploaded = (urls) => {
    setProductImages(urls);
  };
  const handleFilesSelected = (files) => {
    setProductImages(files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      productName: productName,
      productDesc: productDescription,
      productKondisi: productCondition,
      productStock: productStock,
      productDelivery: productDelivery,
      productHarga: productPrice,
      productImages: productImages,
    };

    await addProduct(product);

    // Reset form fields
    setProductName("");
    setProductDescription("");
    setProductCondition("");
    setProductStock("");
    setProductDelivery("Ambil di tempat");
    setProductPrice("");
    setProductImages([]);
  };
  return (
    <div
      className="card"
      style={{
        borderRadius: "10px",
        border: "none",
        boxShadow: "0px 10px 20px 0px #C2C2C229",
        boxShadow: "0px 0px 30px 0px #AAAAAA29",
      }}
    >
      {!isStoreSection && (
        <>
          <div className="card-body p-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "edit-profile" ? "active" : ""
                  }`}
                  id="edit-profile-tab"
                  onClick={() => handleTabChange("edit-profile")}
                >
                  Edit Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "verifikasi" ? "active" : ""
                  }`}
                  id="verifikasi-tab"
                  onClick={() => handleTabChange("verifikasi")}
                >
                  Verifikasi
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "tambah-alamat" ? "active" : ""
                  }`}
                  id="tambah-alamat-tab"
                  onClick={() => handleTabChange("tambah-alamat")}
                >
                  Tambah Alamat
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "hubungkan-ewallet" ? "active" : ""
                  }`}
                  id="hubungkan-ewallet-tab"
                  onClick={() => handleTabChange("hubungkan-ewallet")}
                >
                  Hubungkan E-Wallet
                </button>
              </li>
            </ul>
            <div className="tab-content p-0" id="myTabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "edit-profile" ? "show active" : ""
                }`}
                id="edit-profile"
                role="tabpanel"
                aria-labelledby="edit-profile-tab"
              >
                <Form>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Tambahkan Foto Profil</Form.Label>
                    {/* <Form.Control type="file" /> */}
                    <div class="upload-container">
                      <input
                        type="file"
                        id="upload-photo"
                        class="upload-input"
                      />
                      <label for="upload-photo" class="upload-label">
                        <div class="icon">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QoX4yrhwwjibF7sgCqNWWGfAEFzIAD34TEVlHclIcg&s"
                            alt="Icon Kamera"
                          />
                        </div>
                        <p>Unggah Foto</p>
                      </label>
                    </div>
                  </Form.Group>
                  <hr
                    style={{ border: "2px", marginTop: "25px !important" }}
                  ></hr>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="fullName">
                      <Form.Label className="label-black">Full name</Form.Label>
                      <Form.Control
                        disabled
                        className="inputan-gen"
                        type="text"
                        value="Redha Rizki"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="email">
                      <Form.Label className="label-black">Email</Form.Label>
                      <Form.Control
                        disabled
                        className="inputan-gen"
                        type="email"
                        value="redha@gmail.com"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="username">
                      <Form.Label className="label-black">Username</Form.Label>
                      <Form.Control
                        disabled
                        className="inputan-gen"
                        type="text"
                        value="redhariz07"
                      />
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="phone">
                    <Form.Label className="label-black">Nomor Telepon</Form.Label>
                    
                    <Form.Control className='inputan-telp' type="text" placeholder="Masukan nomor telepon" />
                  </Form.Group> */}

                    <Form.Group as={Col} controlId="phone">
                      <Form.Label className="label-black">
                        Nomor Telepon
                      </Form.Label>
                      <div class="input-group mb-3">
                        <span
                          className="input-group-text text-white"
                          style={{
                            border: "1px solid #003F62",
                            backgroundColor: "#003F62",
                          }}
                          id="inputGroup-sizing-default"
                        >
                          +62
                        </span>
                        <input
                          style={{
                            border: "1px solid #003F62",
                            padding: "15px",
                          }}
                          placeholder="Masukkan Nomor Telepon"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="gender">
                      <Form.Label className="label-black">
                        Jenis Kelamin
                      </Form.Label>
                      <Form.Control as="select" className="inputan-border-blue">
                        <option>Pilih Gender</option>
                        <option>Pria</option>
                        <option>Wanita</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="dob">
                      <Form.Label className="label-black">
                        Tanggal Lahir
                      </Form.Label>
                      <Form.Control
                        className="inputan-tgl inputan-border-blue"
                        placeholder="Select Date"
                        type="date"
                      />
                    </Form.Group>
                  </Row>
                  <div style={{ marginTop: "5%" }}>
                    <Button
                      className="btn-yellow px-4"
                      variant="primary"
                      type="submit"
                    >
                      Perbarui profile
                    </Button>
                    <Button
                      className="btn-grey px-4"
                      style={{ marginLeft: "25px" }}
                      variant="secondary"
                    >
                      Batal
                    </Button>
                  </div>
                </Form>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "verifikasi" ? "show active" : ""
                }`}
                id="verifikasi"
                role="tabpanel"
                aria-labelledby="verifikasi-tab"
              >
                <Form>
                  {/* Isi dari Verifikasi */}
                  <FileUpload title="Unggah KTP Anda di bawah ini" />
                  <FileUpload title="Unggah Swafoto dengan KTP" />
                  <FileUpload title="Unggah Kartu Mahasiswa Anda di bawah ini" />

                  <div style={{ marginTop: "5%" }}>
                    <Button
                      className="btn-yellow px-4"
                      variant="primary"
                      type="submit"
                    >
                      Unggah File
                    </Button>
                    <Button
                      className="btn-grey px-4"
                      style={{ marginLeft: "25px" }}
                      variant="secondary"
                    >
                      Batal
                    </Button>
                  </div>
                </Form>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "tambah-alamat" ? "show active" : ""
                }`}
                id="tambah-alamat"
                role="tabpanel"
                aria-labelledby="tambah-alamat-tab"
              >
                <Form>
                  {/* Isi dari Tambah Alamat */}
                  <h6
                    style={{
                      color: "#4C535F",
                      fontWeight: 700,
                      fontSize: "17px",
                    }}
                  >
                    Daftar Alamat
                  </h6>
                  <AddressCard
                    name="Redha"
                    phone="(+62) 81288557232"
                    address="Jl. Dahlia Blok J5 No. 32"
                    city="KEC. KACAPIRING, KOTA BANDUNG, JAWA BARAT, ID, 19143"
                    mainAddress="Alamat Utama"
                  />
                  <hr />
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="phone">
                      <Form.Label className="label-black">Provinsi</Form.Label>
                      <div class="input-group mb-3">
                        <Form.Control
                          className="inputan-gen-active"
                          type="text"
                          placeholder="Masukkan"
                        />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="phone">
                      <Form.Label className="label-black">Kota</Form.Label>
                      <div class="input-group mb-3">
                        <Form.Control
                          className="inputan-gen-active"
                          type="text"
                          placeholder="Masukkan"
                        />
                      </div>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="phone">
                      <Form.Label className="label-black">Kecamatan</Form.Label>
                      <div class="input-group mb-3">
                        <Form.Control
                          className="inputan-gen-active"
                          type="text"
                          placeholder="Masukkan"
                        />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="phone">
                      <Form.Label className="label-black">Kode Pos</Form.Label>
                      <div class="input-group mb-3">
                        <Form.Control
                          className="inputan-gen-active"
                          type="text"
                          placeholder="Masukkan"
                        />
                      </div>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="phone">
                      <Form.Label className="label-black">
                        Nama Jalan
                      </Form.Label>
                      <div class="input-group mb-3">
                        <Form.Control
                          className="inputan-gen-active"
                          type="text"
                          placeholder="Masukkan"
                        />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="phone"></Form.Group>
                  </Row>
                  <div style={{ marginTop: "5%" }}>
                    <Button
                      className="btn-yellow px-4"
                      variant="primary"
                      type="submit"
                    >
                      Tambahkan Alamat
                    </Button>
                    <Button
                      className="btn-grey px-4"
                      style={{ marginLeft: "25px" }}
                      variant="secondary"
                    >
                      Batal
                    </Button>
                  </div>
                </Form>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "hubungkan-ewallet" ? "show active" : ""
                }`}
                id="hubungkan-ewallet"
                role="tabpanel"
                aria-labelledby="hubungkan-ewallet-tab"
              >
                <Form>
                  {/* Isi dari Hubungkan E-Wallet */}
                  <div
                    style={{
                      width: "100%",
                      height: "500px",
                      alignContent: "center",
                    }}
                  >
                    <p className="text-center">
                      Tidak ada dompet yang dihubungkan
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </>
      )}
      {isStoreSection && (
        <>
          <div className="card-body p-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "edit-profile-toko" ? "active" : ""
                  }`}
                  id="edit-profile-toko-tab"
                  onClick={() => handleTabChange("edit-profile-toko", true)}
                >
                  Edit Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "verifikasi-toko" ? "active" : ""
                  }`}
                  id="verifikasi-tab"
                  onClick={() => handleTabChange("verifikasi-toko", true)}
                >
                  Tambah Produk
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "tambah-alamat-toko" ? "active" : ""
                  }`}
                  id="tambah-alamat-tab"
                  onClick={() => handleTabChange("tambah-alamat-toko", true)}
                >
                  Produk Saya
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "signout-toko" ? "active" : ""
                  }`}
                  id="tambah-alamat-tab"
                  onClick={() => handleTabChange("signout-toko", true)}
                >
                  Pesanan
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "hubungkan-ewallet-toko" ? "active" : ""
                  }`}
                  id="hubungkan-ewallet-tab"
                  onClick={() =>
                    handleTabChange("hubungkan-ewallet-toko", true)
                  }
                >
                  Dompet Digital
                </button>
              </li>
            </ul>
            <div className="tab-content p-0" id="myTabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "edit-profile-toko" ? "show active" : ""
                }`}
                id="edit-profile"
                role="tabpanel"
                aria-labelledby="edit-profile-toko-tab"
              >
                <Form>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Tambahkan Logo Toko</Form.Label>
                    {/* <Form.Control type="file" /> */}
                    <div class="upload-container">
                      <input
                        type="file"
                        id="upload-photo"
                        class="upload-input"
                      />
                      <label for="upload-photo" class="upload-label">
                        <div class="icon">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QoX4yrhwwjibF7sgCqNWWGfAEFzIAD34TEVlHclIcg&s"
                            alt="Icon Kamera"
                          />
                        </div>
                        <p>Unggah Foto</p>
                      </label>
                    </div>
                  </Form.Group>
                  <hr
                    style={{ border: "2px", marginTop: "25px !important" }}
                  ></hr>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="fullName">
                      <Form.Label className="label-black">Nama Toko</Form.Label>
                      <Form.Control
                        disabled
                        className="inputan-gen"
                        type="text"
                        value="Redha Rizki"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="email">
                      <Form.Label className="label-black">Email</Form.Label>
                      <Form.Control
                        disabled
                        className="inputan-gen"
                        type="email"
                        value="redha@gmail.com"
                      />
                    </Form.Group>
                  </Row>
                  <div className="row mb-3">
                    <div className="col-6">
                      <Form.Group controlId="description">
                        <Form.Label className="label-black">
                          Deskripsi Toko
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          disabled
                          className="inputan-gen"
                          value="FhxStories menyediakan berbagai kebutuhan barang dengan durasi sewa yang beragam."
                          style={{ height: 160 }}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-6">
                      <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label className="label-black">
                          Password
                        </Form.Label>
                        <Form.Control
                          disabled
                          className="inputan-gen"
                          type="password"
                          value="Redha Rizki"
                        />
                      </Form.Group>
                      <Form.Group className="mt-3" controlId="phone1">
                        <Form.Label className="label-black">
                          Nomor Telepon
                        </Form.Label>
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text text-white"
                            style={{
                              border: "1px solid #003F62",
                              backgroundColor: "#003F62",
                            }}
                            id="inputGroup-sizing-default"
                          >
                            +62
                          </span>
                          <input
                            style={{
                              border: "1px solid #003F62",
                              padding: "15px",
                            }}
                            placeholder="Masukkan Nomor Telepon"
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                          />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div style={{ marginTop: "5%" }}>
                    <Button
                      className="btn-yellow px-4"
                      variant="primary"
                      type="submit"
                    >
                      Perbarui profile
                    </Button>
                    <Button
                      className="btn-grey px-4"
                      style={{ marginLeft: "25px" }}
                      variant="secondary"
                    >
                      Batal
                    </Button>
                  </div>
                </Form>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "verifikasi-toko" ? "show active" : ""
                }`}
                id="verifikasi"
                role="tabpanel"
                aria-labelledby="verifikasi-tab"
              >
                <Form onSubmit={handleSubmit}>
                  {/* Isi dari Verifikasi */}
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label className="label-black">Nama Produk</Form.Label>
                    <Form.Control
                      className="inputan-gen-active"
                      type="text"
                      placeholder="Nama Produk"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label className="label-black">
                      Deskripsi Produk
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      className="inputan-gen-active"
                      placeholder="Deskripsi Produk"
                      type="text"
                      style={{ height: 200 }}
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label className="label-black">
                      Kondisi Produk
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Kondisi Produk"
                      className="inputan-gen-active"
                      type="text"
                      style={{ height: 200 }}
                      value={productCondition}
                      onChange={(e) => setProductCondition(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label className="label-black">Jumlah Stok</Form.Label>
                    <Form.Control
                      className="inputan-gen-active"
                      placeholder="Jumlah Stok"
                      type="text"
                      value={productStock}
                      onChange={(e) => setProductStock(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="gender"
                    style={{ width: "30%" }}
                  >
                    <Form.Label className="label-black">
                      Kategori Produk
                    </Form.Label>
                    <Form.Control as="select" className="inputan-gen">
                      <option disabled>Pilih Kategori</option>
                      <option value="Baru">Baru</option>
                      <option value="Second">Second</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="label-black">
                      Pilih Jenis Pengiriman
                    </Form.Label>
                    <div className="group d-flex gap-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDisabled"
                          id="flexRadioDisabled"
                        />
                        <label class="form-check-label" for="flexRadioDisabled">
                          Semua
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDisabled"
                          id="flexRadioDisabled"
                        />
                        <label class="form-check-label" for="flexRadioDisabled">
                          Diantar
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDisabled"
                          id="flexRadioCheckedDisabled"
                          checked
                        />
                        <label
                          class="form-check-label"
                          for="flexRadioCheckedDisabled"
                        >
                          Ambil di tempat
                        </label>
                      </div>
                    </div>
                  </Form.Group>

                  <div className="row">
                    <div className="col-4">
                      <Form.Group className="mb-3" controlId="gender">
                        <Form.Label className="label-black">
                          Jenis Deposit
                        </Form.Label>
                        <Form.Control as="select" className="inputan-gen">
                          <option disabled>Pilih Jenis Deposit</option>
                          <option>Baru</option>
                          <option>Second</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-4">
                      <Form.Group className="mb-3" controlId="phone1">
                        <Form.Label className="label-black">
                          Harga Deposit
                        </Form.Label>
                        <div className="input-group mb-3">
                          <span
                            className="input-group-text text-white"
                            style={{
                              border: "1px solid #003F62",
                              backgroundColor: "#003F62",
                            }}
                            id="inputGroup-sizing-default"
                          >
                            Rp
                          </span>
                          <input
                            style={{
                              border: "1px solid #003F62",
                              padding: "15px",
                            }}
                            placeholder="Masukkan Harga Deposit"
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                          />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label className="label-black">
                      Upload Gambar Produk
                    </Form.Label>
                    <FileUpload onFilesUploaded={handleFilesUploaded} />
                    {/* <div className="group d-flex">
                      <div class="upload-container">
                        <input
                          type="file"
                          id="upload-photo"
                          className="upload-input"
                          multiple
                          // onChange={handleFileUpload}
                        />
                        <label htmlFor="upload-photo" className="upload-label">
                          <div className="icon">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QoX4yrhwwjibF7sgCqNWWGfAEFzIAD34TEVlHclIcg&s"
                              alt="Icon Kamera"
                            />
                          </div>
                          <p>Unggah Foto</p>
                        </label>
                      </div>
                      <div className="kotak" style={{ marginLeft: "10px" }}>
                        <label
                          for="upload-photo"
                          class="upload-label"
                          style={{ border: "solid" }}
                        >
                          <div
                            class="icon"
                            style={{ width: "85px", height: "75px" }}
                          ></div>
                        </label>
                      </div>
                      <div className="kotak" style={{ marginLeft: "10px" }}>
                        <label
                          for="upload-photo"
                          class="upload-label"
                          style={{ border: "solid" }}
                        >
                          <div
                            class="icon"
                            style={{ width: "85px", height: "75px" }}
                          ></div>
                        </label>
                      </div>
                      <div className="kotak" style={{ marginLeft: "10px" }}>
                        <label
                          for="upload-photo"
                          class="upload-label"
                          style={{ border: "solid" }}
                        >
                          <div
                            clas="icon"
                            style={{ width: "85px", height: "75px" }}
                          ></div>
                        </label>
                      </div>
                    </div> */}
                  </Form.Group>

                  <div style={{ marginTop: "5%" }}>
                    <Button
                      className="btn-yellow px-4"
                      variant="primary"
                      type="submit"
                    >
                      Tambah Produk
                    </Button>
                    <Button
                      className="btn-grey px-4"
                      style={{ marginLeft: "25px" }}
                      variant="secondary"
                    >
                      Batal
                    </Button>
                  </div>
                </Form>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "tambah-alamat-toko" ? "show active" : ""
                }`}
                id="tambah-alamat"
                role="tabpanel"
                aria-labelledby="tambah-alamat-tab"
              >
                <Form>
                  {/* Isi dari Hubungkan E-Wallet */}
                  <div
                    style={{
                      width: "100%",
                      height: "500px",
                      alignContent: "center",
                    }}
                  >
                    <p className="text-center" style={{ color: "#666E73" }}>
                      Toko ini belum mengunggah produk apapun
                    </p>
                  </div>
                </Form>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "hubungkan-ewallet-toko" ? "show active" : ""
                }`}
                id="hubungkan-ewallet"
                role="tabpanel"
                aria-labelledby="hubungkan-ewallet-tab"
              >
                <WithdrawalPage />
                {/* <Form>
                <div style={{width:'100%', height:'500px', alignContent:'center'}}>
                  <p className='text-center'>Tidak ada dompet yang dihubungkan</p>
                </div>
              </Form> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContentComponent;
