import React,{useState} from 'react';

import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Toast from './components/Toast';

function App() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
  return (
    
    <>
      {(copiedEmail || copiedPhone) && <Toast />}
      <Navbar copiedEmail= {copiedEmail} setCopiedEmail={setCopiedEmail} copiedPhone={copiedPhone} setCopiedPhone={setCopiedPhone}/>
      <Body />
      <Footer />
    </>
  );
}

export default App;
