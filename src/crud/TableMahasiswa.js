import React from "react";
import { Table } from "react-bootstrap";

const TableMahasiswa = ({ mahasiswas, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Mahasiswa</th>
          <th>Alamat</th>
          <th>Jurusan</th>
          <th>Sertifikat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {mahasiswas.map((mahasiswa, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{mahasiswa.nama}</td>
              <td>{mahasiswa.alamat}</td>
              <td>{mahasiswa.jurusan}</td>
              <td>{mahasiswa.sertifikat}</td>
              <td>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => editData(mahasiswa.id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => hapusData(mahasiswa.id)}
                >Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableMahasiswa;
