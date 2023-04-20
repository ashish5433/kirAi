import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Montserrat } from "next/font/google";
const monst = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function Navbar1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid >
            <Button variant="primary" onClick={handleShow} className="me-2">
              <span>-</span>
            </Button>
            <Button
              variant="primary"
              onClick={handleShow}
              className="me-2 navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <Navbar.Brand href="#"  className={monst.className}>
              Shaukeens
            </Navbar.Brand>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  className={monst.className}>Shaukeens</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <hr />
                <div className="btn-div" >
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
