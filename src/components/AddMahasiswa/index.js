import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addMahasiswa,
  getListMahasiswa,
  updateMahasiswa,
} from "../../actions/mahasiswaAction";

function AddMahasiswa() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const { postAddMahasiswaResult, detailMahasiswa } = useSelector(
    (state) => state.MahasiswaReducer
  );

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    if (id) {
      dispatch(updateMahasiswa({ nama: nama, nohp: nohp, id: id }));
    } else {
      dispatch(addMahasiswa({ nama: nama, nohp: nohp }));
    }
  };

  useEffect(() => {
    if (postAddMahasiswaResult) {
      dispatch(getListMahasiswa());
      setNama("");
      setNohp("");
    }
  }, [postAddMahasiswaResult, dispatch]);

  useEffect(() => {
    if (detailMahasiswa) {
      setNama(detailMahasiswa.nama);
      setNohp(detailMahasiswa.nohp);
      setId(detailMahasiswa.id);
    }
  }, [detailMahasiswa, dispatch]);
  return (
    <div>
      <Row>
        <Col>
          <h4>{id ? "Edit Data Mahasiswa" : "Insert Data Mahasiswa"}</h4>
          <hr />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Mahasiswa</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Anda"
                name="nama"
                onChange={(event) => setNama(event.target.value)}
                required
                value={nama}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nohp">
              <Form.Label>Nomor HandPhone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan Nama Anda"
                name="nohp"
                onChange={(event) => setNohp(event.target.value)}
                required
                value={nohp}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {/* <input
              type="text"
              name="nama"
              placeholder="Nama ...."
              value={nama}
              onChange={(event) => setNama(event.target.value)}
            />
            <input
              type="text"
              name="nohp"
              placeholder="No Hp ...."
              value={nohp}
              onChange={(event) => setNohp(event.target.value)}
            /> */}
            {/* <button type="submit">Submit</button> */}
          </Form>
        </Col>
      </Row>
      {/* <h4>Add Mahasiswa</h4> */}
    </div>
  );
}

export default AddMahasiswa;
