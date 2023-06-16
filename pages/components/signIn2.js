import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import {  onAuthStateChanged, signInWithPopup ,fetchSignInMethodsForEmail} from "firebase/auth"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth"
import { auth, provider } from "../firebase/firebase"


const GoogleIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;



function SignIn() {
    const auth = getAuth()
    const [signInEmail, setSignInEmail] = useState("")
    const [signInPassword, setSignInPassword] = useState("")
    const [showPassword, setshowPassword] = useState("password")
    const [showPass, setshowPass] = useState(false)
    const handleShowPassword = () => {
        setshowPass(!showPass)
        showPassword === "password" ? setshowPassword("text") : setshowPassword("password")
    }



    const checkEmailExistence = async (email) => {
        const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=0aced1a69c004370a71500f384d5d73b&email=${email}&ip_address=`;
      
        try {
          const response = await axios.get(apiUrl);
        //   console.log(response)
        
            // console.log(response.data.status)
          // Check if email exists based on ZeroBounce API response
          return response.data.status === "valid";
        } catch (error) {
          console.log('Error checking email existence:', error);
          return false;
        }
      
      };
    const signInwithgoogle = async () => {
        
    
        const user = await signInWithPopup(auth, provider)
        
        alert("Signed In")
        // console.log(cookie.get('UserName'))
        // console.log(user1)
        router.push({
            pathname:'http://localhost:3000/',
            
        })
    
    }
    const login = async () => {
        const emailExists = await checkEmailExistence(signInEmail);
        const checkEmail = await fetchSignInMethodsForEmail(auth,signInEmail)
        if(!emailExists)alert("Invalid Email")
        else if(checkEmail.length==0)alert("User Doesn't Exist")
   
       else {

        try {
            const user = await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            if(!auth.currentUser.emailVerified){
                alert("Please Verify your Email")
                SignOut();
            }
            else {
            alert("Successfully Logged in")
            console.log(user)
            console.log(user.user.auth.displayName)
            }
        } catch (e) {
            alert("Invalid Credentials")
            console.log(e)
        }
    }
    }

    const SignOut = async () => {
        await signOut(auth)
    }

    const forgetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, signInEmail);
            alert("Password reset link has been successfully send to your email")
        } catch (error) {
            // setMessage('Failed to send password reset email. Please try again.');
            alert(error.message)
            console.error('Error sending password reset email:', error.message);
        }
    }
    return (
        <>
            <div className="mainSignUpcont">
                <div className="secondsignupcont"   >
                    <p style={{ marginBottom: "30px", fontSize: "40px", color: "purple", textAlign: 'center', fontWeight: "bolder" }}>Sign In </p>
                    <input
                        className="signUpEnterEmail"
                        type="email"
                        placeholder="Enter your Email"
                        onChange={(e) => { setSignInEmail(e.target.value) }}
                    />
                    <div className="signUpInputCont">
                        <input
                            className="signUpEnterPass"
                            type={showPassword}
                            placeholder="Enter your Password"
                            onChange={(e) => { setSignInPassword(e.target.value) }}
                        />
                        <button onClick={handleShowPassword} > <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} className='signupicon' /></button>


                    </div>
                    <button onClick={forgetPassword}><h5 style={{ color: "blue" }}>Forget Password</h5></button>
                    <button className='signupsubmitbtn' onClick={login}>Sign In</button>
                    <button className='signupsubmitbtn' onClick={SignOut}>Sign Out</button>

                    <p style={{ textAlign: 'center', marginTop: "20px", fontSize: "20px" }}>Or</p>

                    <button className='signupsubmitbtngoogle' onClick={signInwithgoogle}>
                        <GoogleIcon icon={faGoogle} beatFade />
                        Sign In with Google
                    </button >

                </div>

            </div>

        </>
    )
}

export default SignIn