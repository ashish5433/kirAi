import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Unica_One, Quicksand } from "next/font/google";


const play = Unica_One({
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
        <Navbar key={expand}  expand={expand} className="mb-3 navbar">
          <Container fluid>
            <div className="left-nav">
              <Button
                variant="primary"
                onClick={handleShow}
                className="me-2 nav-btn"
              >
                <span class="material-symbols-outlined">menu</span>
              </Button>
              <h1 className={play.className}>ShauKeens</h1>
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
            {/* <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button varia.nt="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas> */}
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;
