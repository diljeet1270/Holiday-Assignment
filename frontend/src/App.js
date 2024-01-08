import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Preferences from './Components/Preferences/Preferences';
import Myprofile from './Components/Myprofile/Myprofile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Myprofile/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
        <Route path='/preferences' element={<Preferences/>}/>
       </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
