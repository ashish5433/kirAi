import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

/////////////////////////// Email Verification...........///////////////////////////////

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

const GoogleIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const SignUp = () => {
  const [showPass, setshowPass] = useState(false);
  const [showPassword, setshowPassword] = useState("password");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [registerEmail, setregisterEmail] = useState("");
  const [registerName, setregisterName] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [registercnfrmPassword, setregistercnfrmPassword] = useState("");
  const [user1, setUser] = useState("");
  const router = useRouter();
  //Login with Google.......

  const signInwithgoogle = async () => {
    const user = await signInWithPopup(auth, provider);
    // console.log(user.user.displayName)
    setUser(user.user.displayName);
    alert("Signed In");
    cookie.set("UserName", user.user.displayName);
    console.log(cookie.get("UserName"));
    // console.log(user1)
    router.push({
      pathname: "http://localhost:3000/",
    });
  };

  // Register User with Email And Password.............

  const auth = getAuth();

  const Register = async () => {
    const emailExists = await checkEmailExistence(registerEmail);
    // console.log(emailExists)
    
    if (
      registerEmail === "" ||
      registerPassword === "" ||
      registercnfrmPassword === "" ||
      registerName === ""
    ) {
      alert("Please Fill the form properly");

    }else if(!emailExists) alert("Email Doesn't Exist"); 
    else if (registerPassword !== registercnfrmPassword) {
      alert("Password doesn't match!!!");
    } else if (isChecked1 === false) {
      alert("Please Accept terms and conditions");
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        alert("Successfully registered");
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email Sent");
        });
        updateProfile(auth.currentUser, {
          displayName: registerName,
        })
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(user);
      } catch (e) {
        console.log(e);
        alert(e);
      }
    }
  };
  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };
  const handleCheckboxChange4 = () => {
    setIsChecked4(!isChecked4);
  };

  const handleShowPassword = () => {
    setshowPass(!showPass);
    showPassword === "password"
      ? setshowPassword("text")
      : setshowPassword("password");
  };

  const handlecnfrmPassword = (e) => {
    setregistercnfrmPassword(e.target.value);
  };

  return (
    <>
      <div className="secondsignupcont">
        <h2 className="explorer_title">Create an Explorer Account</h2>
        <div className="name_n_loc">
          <div>
            <label>Your Name</label>
            <input
              className="signUpEnterFields"
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => {
                setregisterName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              className="signUpEnterFields"
              type="text"
              placeholder="Enter your Location"
            />
          </div>
        </div>
        <div className="email_n_code">
          <div>
            <label>Your Email</label>
            <input
              className="signUpEnterFields"
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => {
                setregisterEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Confirm Your Email</label>
            <input
              className="signUpEnterFields"
              type="text"
              placeholder="Enter your code"
            />
          </div>
        </div>
        <div className="password_n_conf">
          <div>
            <label>Enter Password</label>
            <input
              className="signUpEnterPass"
              type={showPassword}
              placeholder="Enter your Password"
              onChange={(e) => {
                setregisterPassword(e.target.value);
              }}
            />
            <button onClick={handleShowPassword}>
              <FontAwesomeIcon
                icon={showPass ? faEye : faEyeSlash}
                className="signup_icon"
              />
            </button>
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              className="signUpEnterEmail"
              type="password"
              onChange={(e) => {
                handlecnfrmPassword(e);
              }}
              placeholder="Confirm your Password"
            />
          </div>
        </div>
        <div className="mobile_num">
          <div>
            <label>Mobile Number</label>
            <input
              className="signUpEnterEmail"
              type="number"
              placeholder="XXX-XXX-XXX"
            />
          </div>
        </div>
        <div className="terms_n_conditions">
          <label>
            <input
              type="checkbox"
              checked={isChecked1}
              onChange={handleCheckboxChange1}
            />
            <span className="signupTerms"> Always Signed in</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={isChecked2}
              onChange={handleCheckboxChange2}
            />
            <span className="signupTerms"> Agree to Terms and Conditions</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={isChecked3}
              onChange={handleCheckboxChange3}
            />
            <span className="signupTerms"> Read Privacy Policy</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={isChecked4}
              onChange={handleCheckboxChange4}
            />
            <span className="signupTerms"> I Accept</span>
          </label>
        </div>
              <div className="sign_up_btn">
              <button className="signupsubmitbtn2" onClick={Register}>
              Sign Up
              </button>
              </div>
      </div>
    </>
  );
};

export default SignUp;
