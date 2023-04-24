import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import Nav_li_items from "./nav_li_items";
import Sidenav from "./sidenav";

const play = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

function Navbar1() {
  const [show, setShow] = useState(false);

  const [color, setColor] = useState(false);

  const li_default = [[[],],]

  const [default_item, setdefaultItem] = useState("");

  const li1_items = [[["Popular Builders"],
  ["Sunseeker", "Azimut", "Riva", "Benetti", "Custom", "Cranchi", "Beneteau", "Ferretti"],
  ["Sea Ray", "Sunreef", "Chris Craft", "Heesen", "Pershing", "Hatteras", "Princess", "Viking"]],]
  const li2_items = [[["Top Countries"],
  ["United States", "Spain", "Italy", "France", "Portugal", "Canada", "United Kingdom", "Greece"],
  ["Switzerland", "United Arab Emirates", "Mexico", "South Africa", "Australia", "Germany", "Netherlands", "Japan"]],

  [["Top Cities"],
  ["Los Angeles", "Marbella", "London", "New York", "Paris", "Miami", "Ibiza", "Beverly Hills"],
  ["Cannes", "Mallorca", "Madrid", "Lisbon", "Rome", "Milan", "Nice", "Toronto"]],

  [["Top Regions"],
  ["French Riviera", "Costa del Sol", "French and Swiss Alps", "Costa Blanca", "California, USA", "Hamptons, NY, USA", "Florida, USA", "Tuscany"],
  ["Algarve", "Greek Islands", "Balearic Islands", "Caribbean", "Dubai", "Amalfi Coast", "Lombardy", "Costa Brava"]],
  ]
  const li6_items = [[["Popular Makes"],
  ["Bugatti", "Pagani", "Koenigsegg", "Ferrari", "Lamborghini", "Mercedes", "Rolls-Royce", "McLaren"],
  ["Brabus", "Porsche", "Aston Martin", "Bentley", "Maybach", "BMW", "Ford", "Audi"]],
  [["Popular Models"],
  ["Ferrari LaFerrari", "Bugatti Chiron", "Ferrari F40", "Lamborghini Aventador", "McLaren P1", "Porsche 918", "Ford GT", "Mercedes SLR McLaren"],
  ["Pagani Huayra", "Porsche Carrera GT", "Lamborghini Urus", "Lamborghini Murcielago", "Ferrari Enzo", "Lexus LFA", "Brabus G-Class", "Rolls-Royce Cullinan"]
  ],]
  const li4_items = [[["Popular Manufacturer"], ["Embraer", "Dassault", "Gulfstream", "Bombardier", "Cessna", "Boeing", "Pilatus"],],]

  const [li_content, set_li_content] = useState(li_default);


  const handleChange = () => {
    if (window.scrollY >= 50) {
      setColor(true)
    }
    else setColor(false)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleChange)
  })



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // window.addEventListener('scroll',handleChange)


  const [showsidenav,setShowsidenav] = useState("65px")
  const changeWidth = () => showsidenav==="65px" ? setShowsidenav("220px") : setShowsidenav("65px");
  return (
    <>
      {["lg"].map((expand) => (
        <div>
          <Navbar key={expand} expand={expand} className={color ? 'mb-3 navbar nav-bg' : 'mb-3 navbar nav'}>
            <script></script>
            <Container fluid>
              <div className="left-nav">
                <Button
                  variant="primary"
                  onClick={changeWidth}
                  className="me-2 nav-btn"

                >
                  <svg className="-ml-0 scale-125 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
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
              {/* <Offcanvas show={show} onHide={handleClose}>
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
              </Offcanvas> */}
            </Container>
          </Navbar>
          <div>
            {/* <div className={color ? 'second_nav' : 'second_nav2'}>

              <ul className="flex bg-transparent -mt-4 space-x-7 p-2 border-t-1 border-b-1 text-white responsive_nav2">
                <li onMouseEnter={() => { document.getElementsByClassName("li_1_div")[0].style.visibility = "visible"; set_li_content(li1_items); setdefaultItem("Yachts") }}
                  className="left_li1 pointer">Yachts</li>
                <li onMouseEnter={() => { document.getElementsByClassName("li_1_div")[0].style.visibility = "visible"; set_li_content(li2_items); setdefaultItem("Real Estates") }}
                  className="pointer">Real Estates</li>
                <li onMouseEnter={() => { document.getElementsByClassName("li_1_div")[0].style.visibility = "visible"; set_li_content(li_default); setdefaultItem("Helicopter") }}
                  className="pointer">Helicopter</li>
                <li onMouseEnter={() => { document.getElementsByClassName("li_1_div")[0].style.visibility = "visible"; set_li_content(li4_items); setdefaultItem("Jets") }}
                  className="pointer">Jets</li>
                <li onMouseEnter={() => { document.getElementsByClassName("li_1_div")[0].style.visibility = "visible"; set_li_content(li_default); setdefaultItem("Bikes") }}
                  className="pointer">Bikes</li>
                <li onMouseEnter={() => { document.getElementsByClassName("li_1_div")[0].style.visibility = "visible"; set_li_content(li6_items); setdefaultItem("Cars") }}
                  className="pointer">Cars</li>
              </ul>
            </div> */}

            {/* <Nav_li_items props={li_content} item={default_item} /> */}

          </div>
          <div style={{marginTop:"-222px"}}>
          <Sidenav width={showsidenav}/>
          </div>
        </div>
      ))}
    </>
  );
}

export default Navbar1;