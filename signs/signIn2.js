import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import {
  onAuthStateChanged,
  signInWithPopup,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

const GoogleIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

function SignIn() {
  const router = useRouter();
  const auth = getAuth();
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [showPassword, setshowPassword] = useState("password");
    const [showPass, setshowPass] = useState(false);
      const [isChecked, setIsChecked] = useState(false);

  const handleShowPassword = () => {
    setshowPass(!showPass);
    showPassword === "password"
      ? setshowPassword("text")
      : setshowPassword("password");
  };

  const checkEmailExistence = async (email) => {
    const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=0aced1a69c004370a71500f384d5d73b&email=${email}&ip_address=`;

    try {
      const response = await axios.get(apiUrl);
      //   console.log(response)

      // console.log(response.data.status)
      // Check if email exists based on ZeroBounce API response
      return response.data.status === "valid";
    } catch (error) {
      console.log("Error checking email existence:", error);
      return false;
    }
  };
  const signInwithgoogle = async () => {
    const user = await signInWithPopup(auth, provider);

    alert("Signed In");
    // console.log(cookie.get('UserName'))
    // console.log(user1)
    router.push({
      pathname: "http://localhost:3000/",
    });
  };
  const login = async () => {
    const emailExists = await checkEmailExistence(signInEmail);
    const checkEmail = await fetchSignInMethodsForEmail(auth, signInEmail);
    if (!emailExists) alert("Invalid Email");
    else if (checkEmail.length == 0) alert("User Doesn't Exist");
    else {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          signInEmail,
          signInPassword
        );
        if (!auth.currentUser.emailVerified) {
          alert("Please Verify your Email");
          SignOut();
        } else {
          alert("Successfully Logged in");
          console.log(user);
          console.log(user.user.auth.displayName);
           router.push({
             pathname: "http://localhost:3000",
           });
        }
      } catch (e) {
        alert("Invalid Credentials");
        console.log(e);
      }
    }
  };

  const SignOut = async () => {
    await signOut(auth);
  };

  const forgetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, signInEmail);
      alert("Password reset link has been successfully send to your email");
    } catch (error) {
      // setMessage('Failed to send password reset email. Please try again.');
      alert(error.message);
      console.error("Error sending password reset email:", error.message);
    }
    };
      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
  };
  
  const chnagepage = () => {
  router.push("http://localhost:3000");
  }
  return (
    <>
      <div className="login_content">
        <div className="inner_login">
          <h2>Login</h2>
          <button onClick={chnagepage}>Sjnwk</button>
          <label>EMAIL</label>
          <input
            className="signUpEnterEmail"
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => {
              setSignInEmail(e.target.value);
            }}
          />
          <label>PASSWORD</label>
          <input
            className="signUpEnterPass"
            type={showPassword}
            placeholder="Enter your Password"
            onChange={(e) => {
              setSignInPassword(e.target.value);
            }}
          />
          <button onClick={handleShowPassword}>
            <FontAwesomeIcon
              icon={showPass ? faEye : faEyeSlash}
              className="signupicon"
            />
          </button>
          <div className="button_div">
            <div>
                          <input
                              className="radios"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p>Always Signed in</p>
            </div>
            <button className="signupsubmitbtn" onClick={login}>
              Login
            </button>
          </div>
        </div>
        </div>
        <p className="or_text">or login with</p>
        <div className="login_icons">
          <button className="signupsubmitbtngoogle" onClick={signInwithgoogle}>
            <GoogleIcon icon={faGoogle} />
          </button>
      </div>
      <div className="logo_name">
      <h1>SHAUKEENS</h1>
      </div>
    </>
  );
}

export default SignIn;
