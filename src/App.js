// import './App.css';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Error from './components/Error';
import LoginForm from './forms/LoginForm';
import RegisterEditForm from './forms/RegisterEditForm';

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
