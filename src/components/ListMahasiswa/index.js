import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMahasiswa,
  detailMahasiswa,
  getListMahasiswa,
} from "../../actions/mahasiswaAction";
// import mahasiswa from "../../reducers/mahasiswa";

function ListMahasiswa() {
  const {
    getListMahasiswaResult,
    getListMahasiswaLoading,
    getListMahasiswaError,
    delMahasiswaResult,
  } = useSelector((state) => state.MahasiswaReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //panggil action getListMahasiswa
    dispatch(getListMahasiswa());
  }, [dispatch]);

  useEffect(() => {
    if (delMahasiswaResult) {
      dispatch(getListMahasiswa());
    }
  }, [delMahasiswaResult, dispatch]);
  return (
    <div>
      <h4>List Mahasiswa</h4>
      {getListMahasiswaLoading && <p>Loading...</p>}
      {getListMahasiswaError && <p>Error</p>}
      {getListMahasiswaResult ? (
        // getListMahasiswaResult.map((item, index) => {
        //   return (
            // <table key={item.id}>
            //   {item.nama} -{item.nohp} -
            //   <button onClick={() => dispatch(deleteMahasiswa(item.id))}>
            //     DELETE
            //   </button>
            //   <button style={{marginLeft : '10px'}} onClick={() => dispatch(detailMahasiswa(item))}>
            //     UPDATE
            //   </button>
            // </table>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Mahasiswa</th>
                <th>No Hp</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {getListMahasiswaResult.map((mahasiswa, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{mahasiswa.nama}</td>
                    <td>{mahasiswa.nohp}</td>
                    <td>
                      <button
                        className="btn btn-warning mx-2"
                        onClick={() => dispatch(detailMahasiswa(mahasiswa))}
                      >
                        Edit
                      </button>
      
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteMahasiswa(mahasiswa.id))}
                      >Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          // );
        // })
      ) : getListMahasiswaLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListMahasiswaError ? getListMahasiswaError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListMahasiswa;
