import DownloadPg from './Download/DownloadPg';
import Home from './Home/Home'
import UploadPg from './UploadPg/UploadPg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './User/User';




function App() {
  return (
    <div className="bg-red ">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/upload" element={<UploadPg />} />
          <Route path="/download" element={<DownloadPg />} />
          <Route path="/user" element={<User />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
