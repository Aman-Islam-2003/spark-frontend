import React from "react";
import SignIn from "./pages/Auth/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return(
    <>
     <ToastContainer/>
     <SignIn />
    </>
  )
   ;
};

export default App;
