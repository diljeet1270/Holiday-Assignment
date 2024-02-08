import './App.css';
// import Signup from './Components/Signup/Signup';
// import Login from './Components/Login/Login';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectionComponent from './Components/RouteProtection/ProtectionComponent';
import NotFound from './Components/RouteProtection/NotFound';
import Dashboard from './Components/Dashboard/Dashboard';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Preferences from './Components/Preferences/Preferences';
import Myprofile from './Components/Myprofile/Myprofile';
import CreateWaves from './Components/CreateWaves/CreateWaves';
import Friends from './Components/Friends/Friends';
import InviteFriends from './Components/Friends/InviteFriends';
import Login from './Components/Admin/Login/Login';
import Signup from './Components/Admin/Signup/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/dashboard' element={<ProtectionComponent Component = {Dashboard}/>}/>
        <Route path='/profile' element={<ProtectionComponent Component = {Myprofile}/>}/>
        <Route path='/friends' element={<ProtectionComponent Component = {Friends}/>}/>
        <Route path='/friends/inviteFriends' element={<ProtectionComponent Component = {InviteFriends}/>}/>
        <Route path='/changepassword' element={<ProtectionComponent Component ={ChangePassword}/>}/>
        <Route path='/preferences' element={<ProtectionComponent Component={Preferences}/>}/>
        <Route path='/createWaves' element={<ProtectionComponent  Component= {CreateWaves} />} />
        <Route path="*" element={<NotFound />}></Route>
       </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
