import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

function Userlogin() {
  const [formData, setFormData] = useState({
    customerId: "",
    password: "",
    debitCardNumber: "",
    atmPin: "",
    loginDirectlyTo: "Dashboard",
  });

  const [selectedTab, setSelectedTab] = useState("loginId"); // State to toggle between forms

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to Spring Boot API
      const response = await axios.post(
        "http://localhost:8080/api/users",
        formData
      );
      if (response.status === 200) {
        alert("Login details saved successfully!");
        // Redirect or perform additional actions
      }
    } catch (error) {
      console.error("Error saving login details:", error);
      alert("Failed to save login details.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}>Login using</h3>
        <div style={styles.tabContainer}>
          <Button
            variant="outline-danger"
            style={
              selectedTab === "loginId" ? styles.activeTab : styles.inactiveTab
            }
            onClick={() => setSelectedTab("loginId")}
          >
            Login ID / Customer ID
          </Button>
          <Button
            variant="outline-secondary"
            style={
              selectedTab === "debitCard"
                ? styles.activeTab
                : styles.inactiveTab
            }
            onClick={() => setSelectedTab("debitCard")}
          >
            Debit Card No.
          </Button>
        </div>

        <Form onSubmit={handleSubmit}>
          {selectedTab === "loginId" && (
            <>
              {/* Login ID Section */}
              <Form.Group style={styles.formGroup}>
                <Form.Label>
                  Login ID / Customer ID{" "}
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#999",
                      cursor: "pointer",
                    }}
                  >
                    &#9432;
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ID"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                />
                <div style={styles.linkContainer}>
                  <button
                    onClick={() => alert("Forgot customer ID clicked")}
                    style={styles.link}
                  >
                    Forgot customer ID
                  </button>
                  <button
                    onClick={() => alert("Enable login ID clicked")}
                    style={styles.link}
                  >
                    Enable login ID
                  </button>
                </div>
              </Form.Group>

              {/* Password Section */}
              <Form.Group style={styles.formGroup}>
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputGroup.Text>
                    <i className="bi bi-eye-slash"></i>
                  </InputGroup.Text>
                  <InputGroup.Text>
                    <i className="bi bi-calendar"></i>
                  </InputGroup.Text>
                </InputGroup>
                <a href="#" style={styles.link}>
                  Forgot password
                </a>
              </Form.Group>
            </>
          )}

          {selectedTab === "debitCard" && (
            <>
              {/* Debit Card Section */}
              <Form.Group style={styles.formGroup}>
                <Form.Label>Debit Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="5555-5555-5555-5555"
                  name="debitCardNumber"
                  value={formData.debitCardNumber}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group style={styles.formGroup}>
                <Form.Label>ATM PIN</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter ATM PIN"
                  name="atmPin"
                  value={formData.atmPin}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}

          {/* Login Directly To Section */}
          <Form.Group style={styles.formGroup}>
            <Form.Label>Login directly to</Form.Label>
            <DropdownButton
              id="dropdown-basic-button"
              title={formData.loginDirectlyTo}
              onSelect={(selected) =>
                setFormData({ ...formData, loginDirectlyTo: selected })
              }
            >
              <Dropdown.Item eventKey="Dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Item eventKey="Profile">Profile</Dropdown.Item>
              <Dropdown.Item eventKey="Settings">Settings</Dropdown.Item>
            </DropdownButton>
          </Form.Group>

          {/* Submit Button */}
          <Button type="submit" style={styles.submitButton}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    marginBottom: "20px",
    fontWeight: "bold",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  activeTab: {
    flex: 1,
    marginRight: "10px",
    backgroundColor: "#840a44",
    color: "#fff",
    border: "none",
  },
  inactiveTab: {
    flex: 1,
    color: "#333",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  formGroup: {
    marginBottom: "20px",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
  },
  link: {
    fontSize: "14px",
    color: "#840a44",
    textDecoration: "none",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#840a44",
    border: "none",
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
  },
};

export default Userlogin;
