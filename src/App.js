import './App.css';
import Routee from './Routes/Routee';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SideMenu from './components/SideMenu/SideMenu';
import {useState } from 'react';
import Header from './components/Header/Header';


function App() {
  const [isMenuVisible,setIsMenuVisible] = useState(false)

  return (
    <div className="App">
      
      <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />

      <Header isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
      
      <Routee isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/> 

    </div>
  );
}

export default App;


