import axios from "axios";

export const GET_LIST_MAHASISWA = "GET_LIST_MAHASISWA";
export const ADD_MAHASISWA = "ADD_MAHASISWA";
export const DELETE_MAHASISWA = "DELETE_MAHASISWA";
export const DETAIL_MAHASISWA = "DETAIL_MAHASISWA";
export const UPDATE_MAHASISWA = "UPDATE_MAHASISWA";


export const getListMahasiswa = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_MAHASISWA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api
    axios({
      method: "GET",
      url: "http://localhost:3000/mahasiswa",
      timeout: 120000,
    })
      .then((response) => {
        //berhasi get api
        dispatch({
          type: GET_LIST_MAHASISWA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: GET_LIST_MAHASISWA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addMahasiswa = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_MAHASISWA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api
    axios({
      method: "POST",
      url: "http://localhost:3000/mahasiswa",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasi get api
        dispatch({
          type: ADD_MAHASISWA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: ADD_MAHASISWA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteMahasiswa = (id) => {
  console.log("2. Masuk Action ");
  return (dispatch) => {
    //loading
    dispatch({
      type: DELETE_MAHASISWA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api
    axios({
      method: "DELETE",
      url: "http://localhost:3000/mahasiswa/" + id,
      timeout: 120000,
    })
      .then((response) => {
        //berhasi hapus api
        console.log("3. Berhasil delete data ", response);
        dispatch({
          type: DELETE_MAHASISWA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal hapus api
        console.log("3. Gagal delete Data", error);
        dispatch({
          type: DELETE_MAHASISWA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailMahasiswa = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_MAHASISWA,
      payload: {
        data: data,
      },
    });
  };
};

export const updateMahasiswa = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE_MAHASISWA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api
    axios({
      method: "PUT",
      url: "http://localhost:3000/mahasiswa/"+data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasi get api
        dispatch({
          type: UPDATE_MAHASISWA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: UPDATE_MAHASISWA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};