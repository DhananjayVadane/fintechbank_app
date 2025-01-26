import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Userlogin from "./Userlogin";
import { useNavigate } from "react-router-dom";
import AccountOpen from "./AccountOpen";
import CustomerLogin from "./CustomerLogin";

function NavHeader() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Fintech Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/Home")}>Home</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={styles.button}
              >
                Login
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/Userlogin")}>
                  Internet Banking Login
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link onClick={() => navigate("/AccountOpen")}>
              Open Digital A/C
            </Nav.Link>
            <NavDropdown title="Explore Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Digital Saving Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Digital Current Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Saving Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Current Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Digital Current Account
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Investment" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Systematic investment plan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Insurance Premium
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fixed Deposit</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Recuring Deposit
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                National Pension scheme
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Digital Current Account
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">About US</Nav.Link>
            <Nav.Link onClick={() => navigate("/CustomerLogin")}>
              Support
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={styles.button}
              >
                English
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Marathi</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div>
              <Nav.Link onClick={() => navigate("/ChatboxSupport")}>
                Smart ai Support
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = {
  button: {
    backgroundColor: "#840a44",
    color: "#fff",
  },
};

export default NavHeader;
