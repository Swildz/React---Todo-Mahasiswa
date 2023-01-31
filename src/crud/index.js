import React, { Component } from "react";
import Navbarcomponent from "./navbarComponent";
import TableMahasiswa from "./TableMahasiswa";
import Formahasiwa from "./formMahasiswa";
import Lifecycle from './lifeCycle'
import DeleteTable from "./deleteTable";
import Login from "../login/Login";
export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mahasiswas: [],
      nama: "",
      alamat: "",
      jurusan: "",
      sertifikat: "",
      id: "",
      delTampilan : false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        mahasiswas: [
          ...this.state.mahasiswas,
          {
            id: this.state.mahasiswas.length + 1,
            nama: this.state.nama,
            alamat: this.state.alamat,
            jurusan: this.state.jurusan,
            sertifikat: this.state.sertifikat,
          },
        ],
      });
    } else {
      const mahasiswanotchose = this.state.mahasiswas
        .filter((mahasiswa) => mahasiswa.id !== this.state.id)
        .map((filterMahasiswa) => {
          return filterMahasiswa;
        });

      this.setState({
        mahasiswas: [
          ...mahasiswanotchose,
          {
            id: this.state.mahasiswas.length + 1,
            nama: this.state.nama,
            alamat: this.state.alamat,
            jurusan: this.state.jurusan,
            sertifikat: this.state.sertifikat,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      alamat: "",
      jurusan: "",
      sertifikat: "",
      id: "",
    });
  };

  editData = (id) => {
    const mahasiswachose = this.state.mahasiswas
      .filter((mahasiswa) => mahasiswa.id === id)
      .map((filterMahasiswa) => {
        return filterMahasiswa;
      });

    this.setState({
      nama: mahasiswachose[0].nama,
      alamat: mahasiswachose[0].alamat,
      jurusan: mahasiswachose[0].jurusan,
      sertifikat: mahasiswachose[0].sertifikat,
      id: mahasiswachose[0].id,
    });
  };

  hapusData = (id) => {
    const mahasiswahapus = this.state.mahasiswas
      .filter((mahasiswa) => mahasiswa.id !== id)
      .map((filterMahasiswa) => {
        return filterMahasiswa;
      });
    this.setState({
      mahasiswas: mahasiswahapus,
    });
  };

  render() {
    return (
      <div>
        <Login />
        {/* <Lifecycle />
        <Navbarcomponent />
        <div className="container mt-4">
          {this.state.delTampilan && <DeleteTable hapusData={(id) => this.hapusData(id)}/>}
          <button onClick={()=> this.setState({delTampilan : !this.state.delTampilan})}>Hapus List</button>
          <TableMahasiswa
            {...this.state}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Formahasiwa
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div> */}
      </div>
    );
  }
}
