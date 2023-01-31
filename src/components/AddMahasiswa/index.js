import React, { useEffect, useState } from "react";
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
      <h4>Add Mahasiswa</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
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
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMahasiswa;
