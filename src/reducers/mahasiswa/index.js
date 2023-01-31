import {
  GET_LIST_MAHASISWA,
  ADD_MAHASISWA,
  DELETE_MAHASISWA,
  DETAIL_MAHASISWA,
  UPDATE_MAHASISWA,
} from "../../actions/mahasiswaAction";

const initialState = {
  getListMahasiswaResult: false,
  getListMahasiswaLoading: false,
  getListMahasiswaError: false,

  postAddMahasiswaResult: false,
  postAddMahasiswaLoading: false,
  postAddMahasiswaError: false,

  delMahasiswaResult: false,
  delMahasiswaLoading: false,
  delMahasiswaError: false,

  detailMahasiswa: false,

  updateMahasiswaResult: false,
  updateMahasiswaLoading: false,
  updateMahasiswaError: false,
};

const mahasiswa = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_MAHASISWA:
      return {
        ...state,
        getListMahasiswaResult: action.payload.data,
        getListMahasiswaLoading: action.payload.loading,
        getListMahasiswaError: action.payload.errorMessage,
      };
    case ADD_MAHASISWA:
      return {
        ...state,
        postAddMahasiswaResult: action.payload.data,
        postAddMahasiswaLoading: action.payload.loading,
        postAddMahasiswaError: action.payload.errorMessage,
      };
    case DELETE_MAHASISWA:
      return {
        ...state,
        delMahasiswaResult: action.payload.data,
        delMahasiswaLoading: action.payload.loading,
        delMahasiswaError: action.payload.errorMessage,
      };
    case DETAIL_MAHASISWA:
      return {
        ...state,
        detailMahasiswa: action.payload.data,
      };
    case UPDATE_MAHASISWA:
      console.log("5. Tempat Masuk Reducer", action);
      return {
        ...state,
        updateMahasiswaResult: action.payload.data,
        updateMahasiswaLoading: action.payload.loading,
        updateMahasiswaError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default mahasiswa;
