import cls from "../../styles/SellerLogin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {  useState,useEffect } from "react";
import classes from "../../styles/Login.module.css";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import { useRouter } from 'next/router';
import Cookies from "universal-cookie";
const cookie = new Cookies();
const Seller = () => {
    
   
   
    const router = useRouter();

    const [showPass, setshowPass] = useState(false);
    const [passWord, setpassWord] = useState("password")
    const [phoneNumber, setphoneNumber] = useState(0)
    const [verification,setVerification]=useState("Verify")
    const [verificationEmail,setVerificationEmail]=useState("Verify")
    const [ver_color,setver_color] =useState("red")
    const [ver_colorEmail,setver_colorEmail] =useState("red")
    const [ver_dis,setver_dis] =useState("none")
    const [ver_disEmail,setver_disEmail]=useState("none")
    const [email,setEmail]=useState("")
    const [isEmail,setisEmail]=useState(false)
    const [isNumber,setisNumber]=useState(false)
    const [name,setName]=useState("")
    const [pass,setPass]= useState("")
    const [cnfrmpass,setcnfrmPass]=useState("")

    const [check,setcheck]=useState(false)

    const passwordShow = () => {
        setshowPass(!showPass);
        passWord === "password"
            ? setpassWord("text")
            : setpassWord("password");
    }

    const verifyNum = async () => {

       
        // console.log(phoneNumber)
        if(phoneNumber==0)alert("Please enter number")
        else{
            var detail=[]
            try{
        detail = await axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=6c45f511cc0a4813af9190c58f88426a&phone=${phoneNumber}`)
            }catch(e){
                alert("Error Occured")
            }
        console.log(detail.data)
        if(detail.data.valid===true){
            setVerification("Verified");
            setver_color("green")
            setver_dis("block")
            setisNumber(true)
        }
        else {
            alert("Invalid Number")
        }
        }
    }

    const verifyEmail =async()=>{
        if(email===null)alert("Please Enter Email")
        else {
            const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=0aced1a69c004370a71500f384d5d73b&email=${email}&ip_address=`;
            var data=[]
            try{
             data=await axios.get(apiUrl)
            }catch(e){
                alert("Error Occured")
            }
            if(data.data.status==="valid"){
                setver_colorEmail("green")
                setver_disEmail("block")
                setVerificationEmail("Verified")
                setisEmail(true)

            }
            else {
                alert("Invalid Email")
            }
        }
    }
    
    const handlesubmit =()=>{
        if(phoneNumber.length<4 || 
        name.length<4 || 
        email.length==0 ||
        pass.length==0 ||
        cnfrmpass.length==0 ||
        check===false
        
        ){
            alert("Fill the form properly")
        }
        
        else if(isEmail===false)alert("Email Not Verifired")
        else if(isNumber===false)alert("Number is not verified")
        else if(pass!=cnfrmpass)alert("Password doesn't match")
        else {
            
            alert("Success")
            router.push({
                pathname: "http://localhost:3000/components/Explorer",
                
               
                 
              },"http://localhost:3000/components/Explorer"
              );
        }
    }


    return <>
    
        <div className={cls.login_div}>
            <button className={cls.login_btn}  >Login To Shaukheens</button>
        </div>
        <div className={cls.main_div}>

            <div className={cls.center_div}>

                <h1 >Create Your Account And Start Selling</h1>
                <div className={cls.content_div} >
                    <p>Get Connected to Affluent Client across the World</p>
                    <h4>Fast Secured And Verified.</h4>
                </div>

                <div className={cls.main_form_div}>
                    <div className={cls.form_left_div}>
                        <div>
                            <label>Mobile Number</label>

                            <PhoneInput
                                // className={cls.phone_inp}
                               copyNumbersOnly={false}
                                className={cls.phone_inp}
                                inputStyle={{ border: "0", outline: "none" }}

                                buttonStyle={{
                                    border: "0", backgroundColor: "white",
                                }}
                                dropdownStyle={{
                                    border: "2px solid rgb(93, 23, 235)",

                                    borderRadius: "2rem",

                                }}
                                containerStyle={{
                                    width: '80%',
                                    border: "2px solid rgb(93, 23, 235)",
                                    padding: "5px 10px",
                                    borderRadius: "2rem"

                                }}

                                placeholder="XXX-XXXX-XXXX"
                                value={phoneNumber}
                                country={'in'}
                                enableSearch={true}
                                required={true}
                                autoFocus={true}
                                onChange={(e) => {
                                    setphoneNumber(e)
                                    setVerification("Verify")
                                    setver_color("red")
                                    setver_dis("block")
                                    setisNumber(false)



                                }}
                               

                            />
                            <button className={cls.verify_btn} 
                            style={{color:ver_color,display:ver_dis}}
                            onClick={verifyNum}>{verification}</button>
                        </div>
                        <div>
                            <label>Your Name</label>
                            <input

                                type="text"
                                placeholder="Enter your Name"
                                onChange={(e)=>{
                                    setName(e.target.value)

                                }}
                            />
                        </div>
                        <div>
                            <label>Your Email</label>
                            <input

                                type="email"
                                placeholder="Enter your Name"
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                    setver_disEmail("block")
                                    setver_colorEmail("red")
                                    setVerificationEmail("Verify")
                                    setisEmail(true)

                                }}

                            /> <button className={cls.verifyemail_btn} 
                            style={{color:ver_colorEmail,display:ver_disEmail}}
                            onClick={verifyEmail}>{verificationEmail}</button>
                        </div>
                        <div>
                            <label>Your Category</label>
                            <select name="Category" >
                                <option value="Owner">Owner</option>
                                <option value="Manufature/Builder">Manufature/Builder</option>
                                <option value="Dealer">Dealer</option>
                                <option value="Retailer">Retailer</option>
                                <option value="Broker">Broker</option>
                               
                            </select>

                        </div>
                        <div>
                            <label>Create Your Password</label>

                            <input

                                type={passWord}
                                placeholder="Enter your Password"
                                onChange={(e)=>{
                                    setPass(e.target.value)

                                }}

                            />
                            <button className="" onClick={passwordShow}> 
                            <FontAwesomeIcon
                                icon={showPass ? faEye : faEyeSlash}
                                className={cls.icon}
                            />

                                </button>

                        </div>
                        <div>
                            <label>Confirm Your Password</label>
                            <input

                                type="password"
                                placeholder="Confirm your Password"
                                onChange={(e)=>{
                                    setcnfrmPass(e.target.value)

                                }}

                            />
                        </div>
                        <label>
                            <input
                                type="checkbox"
                                onClick={()=>{
                                    
                                    setcheck(!check)
                                }}
                            />
                            <span className="signupTerms"> Agree to Terms and Conditions</span>
                        </label>
                    </div>
                    <div className={cls.form_right_div}>
                        <div className={cls.right_div_content}>
                            <h2>I am here to  </h2>
                            <input
                                type="text"

                            />
                        </div>
                        <div className={cls.right_form_div}>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Yacths and Boats
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> House Villas and Castle
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Luxury Cars
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Private Islands
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Private Jets
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label  >
                                    <input type="radio" name="category" /> Apartments
                                    <span ></span>
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Private Helicopters
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Beachside Properties
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Private Submarines
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Exotic Hotels
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Jet Ski
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Castle ,Fortress and Chateau
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Jet Pack
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Luxury Motorcycle
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Industrial and Commercial Land
                                </label>
                            </div>
                            <div className={cls.rad_btn}>
                                <label >
                                    <input type="radio" name="category" /> Other
                                </label>
                            </div>
                        </div>



                        <div className={cls.btn_div}>
                            <button className={cls.sub_btn} onClick={handlesubmit}><span className="material-symbols-outlined md-48"

                            >
                                arrow_right_alt
                            </span></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className={cls.footer_assistance}>
            <div className={classes.assistance_btn}>
                <Image
                    className={`${classes.assist_icon}`}
                    src="/profile.png"
                    width={50}
                    height={50}
                />
                <p>Seek Assistance For Account Creation</p>
            </div>
        </div>

    </>
}

export default Seller;

