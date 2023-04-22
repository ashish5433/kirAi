import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

function Navbar1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {["lg"].map((expand) => (
        <div>
        <Navbar key={expand} expand={expand} className="mb-3 navbar">
          <Container fluid>
            <div className="left-nav">
              <Button
                variant="primary"
                onClick={handleShow}
                className="me-2 nav-btn"
              >
                <span className="material-symbols-outlined hamburger-menu">menu</span>
              </Button>
              <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }} className={play.className}>ShauKeens</h1>
            </div>
            <div className="all-nav-btns">
              <Button className="me-2 nav-btn">
                <span className="nav-btns">Just For You</span>
              </Button>
              <Button className="me-2 nav-btn">
                <span className="nav-btns">List With Us</span>
              </Button>
              <Button className="me-2 nav-btn sign-in-btn">
                <span className="material-symbols-outlined">person</span>
                <span id="signin">Login</span>
              </Button>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header>
                <Offcanvas.Title className={play.className}>
                  Shaukeens
                </Offcanvas.Title>
                <Button
                  variant="primary"
                  onClick={handleClose}
                  className="me-2 nav-close-btn"
                >
                  <span class="material-symbols-outlined">close</span>
                </Button>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <hr />
                <div className="btn-div">
                  <div>
                    <span class="material-symbols-outlined">
                      account_circle
                    </span>
                    <Button>Sign in / Register</Button>
                  </div>
                  <div>
                    <span class="material-symbols-outlined">recommend</span>
                    <Button>Just For You</Button>
                  </div>
                </div>
                <hr />
                <div className="btn-div">
                  <div>
                    <span class="material-symbols-outlined">
                      directions_boat
                    </span>
                    <Button>Yachts</Button>
                  </div>
                  <div>
                    <span class="material-symbols-outlined">villa</span>
                    <Button>Real Estates</Button>
                  </div>
                  <div>
                    <span class="material-symbols-outlined">helicopter</span>
                    <Button>Helicopters</Button>
                  </div>
                  <div>
                    <span class="material-symbols-outlined">
                      flight_takeoff
                    </span>
                    <Button>Jets</Button>
                  </div>
                  <div>
                    <span class="material-symbols-outlined">two_wheeler</span>
                    <Button>Bikes</Button>
                  </div>
                  <div>
                    <span class="material-symbols-outlined">
                      directions_car
                    </span>
                    <Button>Cars</Button>
                  </div>
                </div>
                <hr />
                <div className="btn-div-2">
                  <Button>List With Us</Button>
                  <Button>Help & FAQ</Button>
                  <Button>About</Button>
                  <Button>Contact</Button>
                </div>
                <hr />
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
        <div >
              <ul className="flex bg-transparent -mt-4 space-x-7 p-2 border-t-1 border-b-1 text-white responsive_nav2">
                <li onMouseEnter={()=>{console.log(document.getElementsByClassName("li_1_div")[0].style.visibility="visible")}} 
                 className="left_li1 pointer">Yachts</li>
                <li onMouseEnter={()=>{console.log(document.getElementsByClassName("li_1_div")[0].style.visibility="visible")}} 
                 className="pointer">Real Estates</li>
                <li onMouseEnter={()=>{console.log(document.getElementsByClassName("li_1_div")[0].style.visibility="visible")}} 
                className="pointer">Helicopter</li>
                <li onMouseEnter={()=>{console.log(document.getElementsByClassName("li_1_div")[0].style.visibility="visible")}} 
                className="pointer">Jets</li>   
                <li onMouseEnter={()=>{console.log(document.getElementsByClassName("li_1_div")[0].style.visibility="visible")}} 
                className="pointer">Bikes</li>
                <li onMouseEnter={()=>{console.log(document.getElementsByClassName("li_1_div")[0].style.visibility="visible")}} 
                className="pointer">Cars</li>
              </ul>
              <div 
              onMouseLeave={()=>{console.log(document.getElementsByClassName("li_1_div")[0].style.visibility="hidden")}} 
               className="bg-white -mt-4 pl-10 pt-4 li_1_div ">
                <h6 className="ml-8">Popular Builders</h6>
                <div className="li_1">
                  <div>
                    <ul>
                      <li>Sunseeker</li>
                      <li>Azimut</li>
                      <li>Riva</li>
                      <li>Benetti</li>
                      <li>Custom</li>
                      <li>Cranchi</li>
                      <li>Beneteau</li>
                      <li>Ferretti</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Sea Ray</li>
                      <li>Sunreef</li>
                      <li>Chris Craft</li>
                      <li>Heesen</li>
                      <li>Pershing</li>
                      <li>Hatteras</li>
                      <li>Princess</li>
                      <li>Viking</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-end justify-end text-center">
                  <button className="bg-black p-2 text-neutral-300 ">View all yachts

                  </button><div className="bg-black btn-top"><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" fill="white" width="48"><path d="m561 814-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240Z" /></svg></div></div>
              </div>

            </div>
            </div>
      ))}
    </>
  );
}

export default Navbar1;