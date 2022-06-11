// import './App.css';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Error from './components/Error';
import LoginForm from './forms/LoginForm';
import RegisterEditForm from './forms/RegisterEditForm';
import {Route, Routes} from 'react-router-dom'
import { CancelToken } from 'apisauce';
import Logout from './views/Logout';
import Login from './views/Login';
import Box from '@mui/material/Box';
import RegisterAndEdit from './views/RegisterAndEdit'

const HomePage=()=>{return(<h1>Welcome to the Resume Scanner!</h1>)}

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Box sx={{minHeight:'90vh'}}>
        <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/RegisterEdit" element={<RegisterAndEdit/>}/>
        </Routes>
      </Box>
    </>
  );
}

export default App;
