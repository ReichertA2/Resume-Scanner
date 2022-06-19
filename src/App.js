import "./App.css";
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
import ContactUsView from "./views/ContactUsView";
import UnderConstructionView from "./views/UnderConstruction";
import TimeLine from "./components/TimeLine";
import MyAccountView from "./views/MyAccountView";
import image from "./images/wordcloud.png"

const HomePage = () => {
  return (
    <section style={{ width: "100%", margin: "0px auto" }}>
      <table
        background="van-tay-media-TFFn3BYLc5s-unsplash.jpg"
        style={{ width: "100%", margin: "0px auto", height: "600px" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                width: "45%",
                margin: "0px auto",
                verticalAlign: "top",
                fontSize: "4rem",
                color: "white",
              }}
            >
              Welcome to Resume Scanner
            </td>
            <td
              style={{
                width: "45%",
                margin: "0px auto",
                verticalAlign: "bottom",
                fontSize: "1.5rem",
                color: "white",
                paddingBottom: "1rem",
              }}
            >
              Your one stop shop for all your resume needs.
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{textAlign: "center"}}>
        <p style={{color:'white', margin:'5%'}}>Aydee Reichert &copy; 2022</p>
      </div>
    </section>
  );
};

function App() {
  return (
    <div style={{ width: "100%" }}>
      <header style={{ height: "75px" }}>
        <NavBar></NavBar>
      </header>
      <main style={{ width: "80%", margin: "0px auto" }}>
        <Box sx={{ minHeight: "90vh" }}>
        
            
          {/* <Tilt/> */}
          {/* <TimeLine/> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/RegisterEdit" element={<RegisterAndEdit />} />
            <Route path="/UserFormsView" element={<UserFormsView />} />
            <Route path="/UserInfoView" element={<UserInfoView />} />
            <Route path="/ContactUsView" element={<ContactUsView />} />
            <Route
              path="/UnderConstructionView"
              element={<UnderConstructionView />}
            />
            <Route path="/MyAccount" element={<MyAccountView />} />
          </Routes>
          
        </Box>
      </main>
    </div>
  );
}

export default App;
