import React, { useEffect } from "react";
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
        getListMahasiswaResult.map((item) => {
          return (
            <table key={item.id}>
              {item.nama} -{item.nohp} -
              <button onClick={() => dispatch(deleteMahasiswa(item.id))}>
                DELETE
              </button>
              <button style={{marginLeft : '10px'}} onClick={() => dispatch(detailMahasiswa(item))}>
                UPDATE
              </button>
            </table>
          );
        })
      ) : getListMahasiswaLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListMahasiswaError ? getListMahasiswaError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListMahasiswa;
