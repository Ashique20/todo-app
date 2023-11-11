import './App.css';
import { Route, Routes } from 'react-router-dom';
import Todo from './Todo/Todo';
import Login from './Login/Login';
import Auth from './Auth/Auth';
import SignUp from './Login/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Auth><Todo></Todo></Auth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
