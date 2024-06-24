import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'Pesan Masuk dari Salsabila Putri',
      content: 'Apakah produk bisa dipesan selama dua minggu?',
      date: 'April 25, 2022 | 08.30 WIB',
    },
    {
      id: 2,
      type: 'message',
      title: 'Pesan Masuk dari Tegar Ramadhan',
      content: 'Bagaimana kondisi kameranya kak?',
      date: 'April 25, 2022 | 08.30 WIB',
    },
    {
      id: 3,
      type: 'warning',
      title: 'Pengembalian Barang',
      content: 'Pesanan A102809456 mencapai batas waktu',
      date: 'April 25, 2022 | 08.30 WIB',
    },
    {
      id: 4,
      type: 'order',
      title: 'Produk Anda Dipesan',
      content: 'Produk Proyektor BenQ dipesan oleh Amir Jabar',
      date: 'April 25, 2022 | 08.30 WIB',
    },
    {
      id: 5,
      type: 'success',
      title: 'Produk Berhasil di Upload',
      content: 'Produk Proyektor BenQ siap untuk disewakan',
      date: 'April 25, 2022 | 08.30 WIB',
    },
  ];

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h4 className="mb-4"><i className="bi bi-bell"></i> <strong>Notifikasi</strong></h4>
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="all">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="akun-saya">Akun Saya</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="toko-saya">Toko Saya</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="all">
                {notifications.map((notif) => (
                  <Card key={notif.id} className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col xs={1} className="d-flex align-items-center">
                          <i className={`bi ${getIconClass(notif.type)}`} style={{ fontSize: '1.5rem', color: getColor(notif.type) }}></i>
                        </Col>
                        <Col xs={8}>
                          <h6><strong>{notif.title}</strong></h6>
                          <p>{notif.content}</p>
                          <small className="text-muted">{notif.date}</small>
                        </Col>
                        <Col xs={3} className="d-flex justify-content-end align-items-center">
                          <Button variant="link" className="text-warning p-0 me-3">Lihat</Button>
                          {notif.type === 'message' && <Button variant="link" className="text-secondary p-0">Hapus</Button>}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="akun-saya">
                {/* Content Akun Saya */}
                {notifications.map((notif) => (
                  <Card key={notif.id} className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col xs={1} className="d-flex align-items-center">
                          <i className={`bi ${getIconClass(notif.type)}`} style={{ fontSize: '1.5rem', color: getColor(notif.type) }}></i>
                        </Col>
                        <Col xs={8}>
                          <h6><strong>{notif.title}</strong></h6>
                          <p>{notif.content}</p>
                          <small className="text-muted">{notif.date}</small>
                        </Col>
                        <Col xs={3} className="d-flex justify-content-end align-items-center">
                          <Button variant="link" className="text-warning p-0 me-3">Lihat</Button>
                          {notif.type === 'message' && <Button variant="link" className="text-secondary p-0">Hapus</Button>}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="toko-saya">
                {/* Content Toko Saya */}
                {notifications.map((notif) => (
                  <Card key={notif.id} className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col xs={1} className="d-flex align-items-center">
                          <i className={`bi ${getIconClass(notif.type)}`} style={{ fontSize: '1.5rem', color: getColor(notif.type) }}></i>
                        </Col>
                        <Col xs={8}>
                          <h6><strong>{notif.title}</strong></h6>
                          <p>{notif.content}</p>
                          <small className="text-muted">{notif.date}</small>
                        </Col>
                        <Col xs={3} className="d-flex justify-content-end align-items-center">
                          <Button variant="link" className="text-warning p-0 me-3">Lihat</Button>
                          {notif.type === 'message' && <Button variant="link" className="text-secondary p-0">Hapus</Button>}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

const getIconClass = (type) => {
  switch (type) {
    case 'message':
      return 'bi-chat-dots';
    case 'warning':
      return 'bi-exclamation-circle';
    case 'order':
      return 'bi-bag';
    case 'success':
      return 'bi-check-circle';
    default:
      return '';
  }
};

const getColor = (type) => {
  switch (type) {
    case 'message':
      return '#6C757D';
    case 'warning':
      return '#FFC107';
    case 'order':
      return '#17A2B8';
    case 'success':
      return '#28A745';
    default:
      return '#000';
  }
};

export default NotificationPage;
