import React, {useState} from 'react';
import './App.css';
import './MenuModal.css'
import Navbar from './Navbar';
import Main from './Main';
import MenuModal from './NavbarModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div className="App">   
      <Navbar toggleModal={toggleModal} showModal={showModal}/>
      {showModal ? <MenuModal showModal={showModal} toggleModal={toggleModal}/> : 
        <Main />
      }
         
      <ToastContainer />
    </div>
  );
}

export default App;
