import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Modal,
  InputGroup,
} from "react-bootstrap";
import "./payment.css";

const WithdrawalPage = () => {
  const [show, setShow] = useState(false);
  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePinChange = (e, index) => {
    const newPin = [...pin];
    newPin[index] = e.target.value;
    setPin(newPin);

    // Automatically focus next input field
    if (e.target.value && index < 5) {
      document.getElementById(`pin-input-${index + 1}`).focus();
    }
  };
  return (
    <Container>
      {/* Saldo Anda Section */}
      <Row className="mt-4">
        <Col>
          <Card
            className="text-center"
            style={{ backgroundColor: "#F5A623", color: "#fff" }}
          >
            <Card.Body className=" align-items-center">
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "900",
                  color: "#003F62",
                }}
              >
                Saldo Anda
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Rp 0</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Label className="mb-3">
                <strong>Pilih Tujuan Penarikan Dana</strong>
              </Form.Label>
              {["Gopay", "OVO", "DANA", "BCA"].map((option, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  id={`withdraw-option-${index}`}
                  name="withdraw-option"
                  label={
                    <span className="d-flex align-items-center">
                      <img
                        style={{ width: "40%" }}
                        src={`./${option
                          .toLowerCase()
                          .replace(/\s/g, "-")}.png`}
                        alt={option}
                        className="me-2"
                      />
                      {option}
                    </span>
                  }
                  className="mb-2"
                />
              ))}
              <Form.Check
                type="radio"
                name="withdraw-option"
                label={
                  <span className="d-flex align-items-center">Lainnya</span>
                }
                className="mb-2"
              />
            </Form.Group>

            <Form.Group className="mt-4" controlId="phone1">
              <Form.Label>
                <strong>Jumlah Penarikan Dana</strong>
              </Form.Label>
              <div className="input-group">
                <span
                  className="input-group-text text-white"
                  style={{
                    border: "1px solid #F5A623",
                    backgroundColor: "#F5A623",
                  }}
                  id="inputGroup-sizing-default"
                >
                  Rp
                </span>
                <input
                  style={{ border: "1px solid #F5A623", padding: "15px" }}
                  placeholder="Masukkan nilai rupiah"
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </Form.Group>
          </Form>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header
              className="text-center"
              style={{
                backgroundColor: "#F9E3B6",
                color: "#fff",
                border: "none",
              }}
            >
              <strong className="text-black">Rincian Kegiatan</strong>
            </Card.Header>
            <Card.Body>
              <h3 className="text-center mt-4" style={{ fontWeight: 900 }}>
                Penarikan Saldo
              </h3>
              <hr />
              <Row className="mb-2">
                <Col>Jumlah</Col>
                <Col className="text-end">Rp0</Col>
              </Row>
              <Row className="mb-2">
                <Col>Sisa Saldo</Col>
                <Col className="text-end">Rp0</Col>
              </Row>
              <Row className="mb-2">
                <Col>Biaya Penanganan</Col>
                <Col className="text-end">Rp0</Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <strong>Total</strong>
                </Col>
                <Col className="text-end">
                  <strong>Rp0</strong>
                </Col>
              </Row>
              <div className="d-flex" style={{ justifyContent: "center" }}>
                <Button
                  variant="warning"
                  onClick={handleShow}
                  className="m-4 p-2 w-50 text-white text-center"
                  style={{ backgroundColor: "#F5A623", border: "none" }}
                >
                  Tarik Saldo
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        {/* <Modal.Header closeButton> */}
        {/* </Modal.Header> */}
        <Modal.Body
          className="text-center okeee"
          style={{ padding: "7% !important", borderRadius: "12px" }}
        >
          <Modal.Title className="yeeeee">Masukkan Pin Penjual</Modal.Title>
          <InputGroup className="d-flex justify-content-center mt-2">
            {pin.map((value, index) => (
              <Form.Control
                key={index}
                id={`pin-input-${index}`}
                type="text"
                value={value}
                onChange={(e) => handlePinChange(e, index)}
                maxLength="1"
                className="pin-input mx-1"
                style={{
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  borderRadius: "5px",
                  border: "1px solid #ced4da",
                  backgroundColor: "#e9ecef",
                }}
              />
            ))}
          </InputGroup>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default WithdrawalPage;
