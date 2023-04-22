import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Unica_One, Quicksand,Bebas_Neue } from "next/font/google";


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
      {["lg"].map((expand) => (
        <div>
          <Navbar key={expand} expand={expand} className="mb-3 navbar">
            <Container fluid>
              <div className="left-nav">
        <Navbar key={expand}  expand={expand} className="mb-3 navbar">
          <Container fluid>
            <div className="left-nav">
              <Button
                variant="primary"
                onClick={handleShow}
                className="me-2 nav-btn"
              >
                <span className="material-symbols-outlined hamburger-menu">menu</span>
              </Button>
              <h1 style={{fontSize:"1.5rem",fontWeight:"bold"}} className={play.className}>ShauKeens</h1>
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
                  onClick={handleShow}
                  className="me-2 nav-btn"
                >
                  <span class="material-symbols-outlined">menu</span>
                </Button>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }} className={play.className}>ShauKeens</h1>
              </div>
              <div>
                <Button className="me-2 nav-btn sign-in-btn">
                  <span class="material-symbols-outlined">person</span>
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
         
        </div>
      ))}
    </>
  );
}

export default Navbar1;
