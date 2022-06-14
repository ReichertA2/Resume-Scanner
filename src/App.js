// import './App.css';
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Error from "./components/Error";
import LoginForm from "./forms/LoginForm";
import RegisterEditForm from "./forms/RegisterEditForm";
import { Route, Routes } from "react-router-dom";
import { CancelToken } from "apisauce";
import Logout from "./views/Logout";
import Login from "./views/Login";
import Box from "@mui/material/Box";
import RegisterAndEdit from "./views/RegisterAndEdit";
import JobDescription from "./forms/JobDescriptionForm";
import ResumeForm from "./forms/ResumeForm";
import UserForms from "./components/UserForms";
import UserFormsView from "./views/UserFormsView";
import UserInfoView from "./views/UserInfoView";

const HomePage = () => {
  return <h1 sx={{ color: "white" }}>Welcome to the Resume Scanner!</h1>;
};

function App() {
  return (
    <div style={{ width: "100%" }}>
      <header style={{ height: "75px" }}>
        <NavBar></NavBar>
      </header>
      <main style={{ width: "80%", margin: "0px auto" }}>
        

        <Box sx={{ minHeight: "90vh" }}>
          <Routes>
            {/* <Route path="/" element={<HomePage/>}/> */}
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/RegisterEdit" element={<RegisterAndEdit />} />
            <Route path="/UserFormsView" element={<UserFormsView />} />
            <Route path="/UserInfoView" element={<UserInfoView />} />
          </Routes>
        </Box>
      </main>
    </div>
  );
}

export default App;
