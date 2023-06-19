import cls from "../../styles/SellerLogin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Seller = () => {

    const [showPass, setshowPass] = useState(false);
    const [passWord, setpassWord] = useState("password")
    const passwordShow = () => {
        setshowPass(!showPass);
        passWord === "password"
            ? setpassWord("text")
            : setpassWord("password");
    }

    return <>
        <div className={cls.login_div}>
            <button className={cls.login_btn} >Login To Shaukheens</button>
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
                            <input

                                type="number"
                                placeholder="Enter your phone number"

                            />
                        </div>
                        <div>
                            <label>Your Name</label>
                            <input

                                type="text"
                                placeholder="Enter your Name"

                            />
                        </div>
                        <div>
                            <label>Your Email</label>
                            <input

                                type="email"
                                placeholder="Enter your Name"

                            />
                        </div>
                        <div>
                            <label>Your Category</label>
                            <select name="Category">
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

                            />
                            <button onClick={passwordShow}> <FontAwesomeIcon
                                icon={showPass ? faEye : faEyeSlash}
                                // className={cls.icon}
                            /></button>
                            
                        </div>
                        <div>
                            <label>Confirm Your Password</label>
                            <input

                                type="text"
                                placeholder="Confirm your Password"

                            />
                        </div>
                        <label>
                            <input
                                type="checkbox"

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
                                <label >
                                    <input type="radio" name="category" /> Apartments
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
                            <button className={cls.sub_btn} ><span className="material-symbols-outlined md-48"
                            >
                                arrow_right_alt
                            </span></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Seller;
