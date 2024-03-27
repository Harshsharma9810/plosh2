import './App.css';
import Routee from './Routes/Routee';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SideMenu from './components/SideMenu/SideMenu';
import { useEffect, useState } from 'react';


function App() {
  const [isMenuVisible,setIsMenuVisible] = useState(false)
  // const [isLogin,setIsLogin] = useState(false)



  return (
    <div className="App">
      {/* <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} isLogin={isLogin}setIsLogin={setIsLogin}/> */}

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>

      <Routee isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/> 
    </div>
  );
}

export default App;


