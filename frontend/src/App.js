import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import ChangePassword from './Components/ChangePassword/ChangePassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
       </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
