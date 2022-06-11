// import './App.css';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Error from './components/Error';
import LoginForm from './forms/LoginForm';
import RegisterEditForm from './forms/RegisterEditForm';
import {Route, Routes} from 'react-router-dom'
import { CancelToken } from 'apisauce';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      {/* <Button>Click this Button</Button>
      <Error>This is an error message</Error> */}
      <LoginForm/>
      <RegisterEditForm/>
      
    </div>
  );
}

export default App;
