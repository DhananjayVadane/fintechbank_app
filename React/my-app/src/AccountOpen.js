import React, { useState } from "react";

// Define your styles here
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
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#840a44",
    border: "none",
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

function AccountOpen() {
  const [formData, setFormData] = useState({
    adharNumber: "",
    phoneNumber: "",
    panNumber: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`Success: ${data.message}`);
        setFormData({ name: "", email: "" }); // Clear form
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to submit form.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Open a Bank Account</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="aadhar" style={styles.label}>
              Adhar Number or VID: <br br />
              <span style={{ fontSize: "12px", fontWeight: 500 }}>
                Want to apply without Aadhaar? Please visit a branch.
              </span>
            </label>
            <input
              type="aadhar"
              id="aadhar"
              name="aadhar"
              value={formData.adharNumber}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="phoneNumber" style={styles.label}>
              Phone Number:
              <br br />
              <span style={{ fontSize: "12px", fontWeight: 500 }}>
                10 Digit adhar link mobile number.
              </span>
            </label>
            <input
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="panNumber" style={styles.label}>
              Pan Number:
            </label>
            <input
              type="panNumber"
              id="panNumber"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div>
            <label>
              <input type="checkbox" />I agree to the Terms and Conditions
            </label>
          </div>

          <button type="submit" style={styles.submitButton}>
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountOpen;
