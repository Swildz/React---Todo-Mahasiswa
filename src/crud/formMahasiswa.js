import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const formMahasiswa = ({nama,handleSubmit,handleChange,alamat,jurusan,sertifikat, id}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data Mahasiswa" : "Insert Data Mahasiswa"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Mahasiswa</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Anda"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="alamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Alamat Anda"
                name="alamat"
                value={alamat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jurusan">
              <Form.Label>Jurusan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Jurusan Anda"
                name="jurusan"
                value={jurusan}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="sertifikat">
              <Form.Label>Sertifikat</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan Sertifikat Prestasi Anda"
                name="sertifikat"
                value={sertifikat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default formMahasiswa;
