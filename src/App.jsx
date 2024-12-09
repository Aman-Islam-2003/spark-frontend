import React from "react";
import SignIn from "./pages/Auth/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Say from 'react-say';

const App = () => {
  return(
    <>
     <Say
    pitch={ 1.1 }
    rate={ 1.5 }
    speak="A quick brown fox jumped over the lazy dogs."
    volume={ .8 }
  />
     <ToastContainer/>
     <SignIn />
    </>
  )
   ;
};

export default App;
