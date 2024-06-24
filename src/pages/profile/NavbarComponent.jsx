import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Tab,
  Card,
  Button,
  Modal,
  Badge,
} from "react-bootstrap";
import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavbarComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const allNotifications = [
    {
      id: 1,
      type: "message",
      title: "Pesan Masuk dari Salsabila Putri",
      content: "Apakah produk bisa dipesan selama dua minggu?",
      date: "April 25, 2022 | 08.30 WIB",
      category: "akun-saya",
    },
    {
      id: 2,
      type: "message",
      title: "Pesan Masuk dari Tegar Ramadhan",
      content: "Bagaimana kondisi kameranya kak?",
      date: "April 25, 2022 | 08.30 WIB",
      category: "akun-saya",
    },
    {
      id: 3,
      type: "warning",
      title: "Pengembalian Barang",
      content: "Pesanan A102809456 mencapai batas waktu",
      date: "April 25, 2022 | 08.30 WIB",
      category: "toko-saya",
    },
    {
      id: 4,
      type: "order",
      title: "Produk Anda Dipesan",
      content: "Produk Proyektor BenQ dipesan oleh Amir Jabar",
      date: "April 25, 2022 | 08.30 WIB",
      category: "toko-saya",
    },
    {
      id: 5,
      type: "success",
      title: "Produk Berhasil di Upload",
      content: "Produk Proyektor BenQ siap untuk disewakan",
      date: "April 25, 2022 | 08.30 WIB",
      category: "toko-saya",
    },
    {
      id: 6,
      type: "message",
      title: "Pesan Masuk dari John Doe",
      content: "Apakah produk ini masih tersedia?",
      date: "April 26, 2022 | 10.00 WIB",
      category: "akun-saya",
    },
    {
      id: 7,
      type: "warning",
      title: "Pengingat Pembayaran",
      content: "Pembayaran untuk pesanan A12345678 belum diterima",
      date: "April 27, 2022 | 11.00 WIB",
      category: "toko-saya",
    },
    {
      id: 8,
      type: "order",
      title: "Pesanan Baru Diterima",
      content: "Pesanan untuk produk Kamera Canon telah diterima",
      date: "April 28, 2022 | 12.00 WIB",
      category: "toko-saya",
    },
    {
      id: 9,
      type: "success",
      title: "Pesanan Dikonfirmasi",
      content: "Pesanan untuk produk Laptop Dell telah dikonfirmasi",
      date: "April 29, 2022 | 13.00 WIB",
      category: "toko-saya",
    },
    {
      id: 10,
      type: "message",
      title: "Pesan Masuk dari Jane Doe",
      content: "Kapan produk akan dikirim?",
      date: "April 30, 2022 | 14.00 WIB",
      category: "akun-saya",
    },
  ];

  const akunSayaNotifications = allNotifications.filter(
    (notif) => notif.category === "akun-saya"
  );

  const tokoSayaNotifications = allNotifications.filter(
    (notif) => notif.category === "toko-saya"
  );

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4"
      style={{ backgroundColor: "#003F62" }}
    >
      <a className="navbar-brand" href="#home">
        <img
          src="images/logo.png"
          alt="Avatar"
          className="img-fluid img-in-btn"
          style={{ width: "100%", maxWidth: "100px" }}
        />
      </a>
      <div className="mx-auto">
        <form className="form-inline d-flex form-search">
          <input
            style={{ fontSize: "14px" }}
            className="form-control mr-sm-2 input-search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-search" type="submit">
            Cari
          </button>
        </form>
      </div>
      <div
        className="navbar-collapse collapse justify-content-end"
        style={{ gap: "6%" }}
      >
        <span className="navbar-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="white"
            class="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
          </svg>
          <a className="text-white" onClick={handleShowModal}>
            Notifikasi
          </a>
        </span>
        <span className="navbar-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="white"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <a className="text-white">Keranjang</a>
        </span>
        <span className="navbar-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="white"
            class="bi bi-box"
            viewBox="0 0 16 16"
          >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
          </svg>
          <a className="text-white">Pesanan</a>
        </span>
        <span className="navbar-text">
          <button href="#login" className="btn btn-yellow text-white d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <a>Fatkul</a>
          </button>
        </span>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Notifikasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
          >
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="all">
                  All
                  <Badge
                    pill
                    bg="primary"
                    className={`ms-2 ${
                      activeTab === "all" ? "bg-success" : "bg-primary"
                    }`}
                  >
                    {allNotifications.length}
                  </Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="akun-saya">
                  Akun Saya
                  <Badge
                    pill
                    bg="primary"
                    className={`ms-2 ${
                      activeTab === "akun-saya" ? "bg-success" : "bg-primary"
                    }`}
                  >
                    {akunSayaNotifications.length}
                  </Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="toko-saya">
                  Toko Saya
                  <Badge
                    pill
                    bg="primary"
                    className={`ms-2 ${
                      activeTab === "toko-saya" ? "bg-success" : "bg-primary"
                    }`}
                  >
                    {tokoSayaNotifications.length}
                  </Badge>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="all">
                {allNotifications.map((notif) => (
                  <Card key={notif.id} className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col xs={1} className="d-flex align-items-center">
                          <i
                            className={`bi ${getIconClass(notif.type)}`}
                            style={{
                              fontSize: "1.5rem",
                              color: getColor(notif.type),
                            }}
                          ></i>
                        </Col>
                        <Col xs={8}>
                          <h6>
                            <strong>{notif.title}</strong>
                          </h6>
                          <p>{notif.content}</p>
                          <small className="text-muted">{notif.date}</small>
                        </Col>
                        <Col
                          xs={3}
                          className="d-flex justify-content-end align-items-center"
                        >
                          <Button
                            variant="link"
                            className="text-warning p-0 me-3"
                          >
                            Lihat
                          </Button>
                          {notif.type === "message" && (
                            <Button
                              variant="link"
                              className="text-secondary p-0"
                            >
                              Hapus
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="akun-saya">
                {akunSayaNotifications.map((notif) => (
                  <Card key={notif.id} className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col xs={1} className="d-flex align-items-center">
                          <i
                            className={`bi ${getIconClass(notif.type)}`}
                            style={{
                              fontSize: "1.5rem",
                              color: getColor(notif.type),
                            }}
                          ></i>
                        </Col>
                        <Col xs={8}>
                          <h6>
                            <strong>{notif.title}</strong>
                          </h6>
                          <p>{notif.content}</p>
                          <small className="text-muted">{notif.date}</small>
                        </Col>
                        <Col
                          xs={3}
                          className="d-flex justify-content-end align-items-center"
                        >
                          <Button
                            variant="link"
                            className="text-warning p-0 me-3"
                          >
                            Lihat
                          </Button>
                          {notif.type === "message" && (
                            <Button
                              variant="link"
                              className="text-secondary p-0"
                            >
                              Hapus
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="toko-saya">
                {tokoSayaNotifications.map((notif) => (
                  <Card key={notif.id} className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col xs={1} className="d-flex align-items-center">
                          <i
                            className={`bi ${getIconClass(notif.type)}`}
                            style={{
                              fontSize: "1.5rem",
                              color: getColor(notif.type),
                            }}
                          ></i>
                        </Col>
                        <Col xs={8}>
                          <h6>
                            <strong>{notif.title}</strong>
                          </h6>
                          <p>{notif.content}</p>
                          <small className="text-muted">{notif.date}</small>
                        </Col>
                        <Col
                          xs={3}
                          className="d-flex justify-content-end align-items-center"
                        >
                          <Button
                            variant="link"
                            className="text-warning p-0 me-3"
                          >
                            Lihat
                          </Button>
                          {notif.type === "message" && (
                            <Button
                              variant="link"
                              className="text-secondary p-0"
                            >
                              Hapus
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </nav>
  );
};

const getIconClass = (type) => {
  switch (type) {
    case "message":
      return "bi-chat-dots";
    case "warning":
      return "bi-exclamation-circle";
    case "order":
      return "bi-bag";
    case "success":
      return "bi-check-circle";
    default:
      return "";
  }
};

const getColor = (type) => {
  switch (type) {
    case "message":
      return "#6C757D";
    case "warning":
      return "#FFC107";
    case "order":
      return "#17A2B8";
    case "success":
      return "#28A745";
    default:
      return "#000";
  }
};

export default NavbarComponent;
