import React, {useState} from 'react';
import './App.css';
import './MenuModal.css'
import Navbar from './Navbar';
import Main from './Main';
import MenuModal from './NavbarModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div className="App">
      {showModal ? <MenuModal toggleModal={toggleModal}/> : 
        <React.Fragment>
          <Navbar toggleModal={toggleModal}/>
          <Main />
        </React.Fragment>
      }
    </div>
  );
}

export default App;
