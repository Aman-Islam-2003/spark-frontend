import React from "react";
import SignUpForm from "../../components/SignUpForm";
import Footer from "../../components/footer";
import Banner from "../../components/Banner"

const SignIn = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row">
      {/* Left div */}
      <SignUpForm />

      {/* Right div */}
      <Banner/>
    </div>
    <Footer/>
    </div>
  );
};

export default SignIn;
