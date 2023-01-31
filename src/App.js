import { useLocation, useParams } from "react-router-dom";
import { AddMahasiswa, ListMahasiswa } from "./components";

function App() {
  const {userId} = useParams();
  const location = useLocation();
  const fullName = location?.state?.fullname;
  console.log(location)
  return (
    <div style={{padding : '30px'}}>
      <h2>
        Welcome, {userId} - {fullName}
      </h2>
      <hr/>
      <h2>Aplikasi Mahasiswa</h2>
      <hr/>
      <AddMahasiswa/>
      <hr/>
      <ListMahasiswa />
    </div>
  );
}

export default App;
