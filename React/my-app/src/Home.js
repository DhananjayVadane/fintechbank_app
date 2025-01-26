import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="homepage">
      {/* Navigation Bar */}

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Products, Services"
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="key-updates-container">
        {/* Key Updates Section 1 */}
        <div className="key-updates">
          <h3>Avail credit card against Fixed Deposit!</h3>
          <h4>Credit Card</h4>
          <div className="update-card">
            <img
              src={process.env.PUBLIC_URL + "/CreditCard.png"} // Replace with actual image URL
              alt="Credit Card"
            />
            <div className="update-content">
              <h4>Get a Credit Card against Fixed Deposit</h4>
              <p>Apply for a credit card with minimal documentation.</p>
              <button className="update-btn">Get Card</button>
            </div>
          </div>
        </div>

        {/* Key Updates Section 2 */}
        <div className="key-updates">
          <h3>Home Loan against FD, your dream home awaits!</h3>
          <h4>24X7 Personal Loan</h4>
          <div className="update-card">
            <img src={process.env.PUBLIC_URL + "/FD.jpg"} alt="Personal Loan" />
            <div className="update-content">
              <h4>Get a personal loan anytime, anywhere with Fintech Bank</h4>
              <p>Interest rate less than 1% Pm . No Additional Charges.</p>
              <button className="update-btn">Apply Now</button>
            </div>
          </div>
        </div>
        {/* Key Updates Section 2 */}
        <div className="key-updates">
          <h3>Save smarter with a Digital Savings Account!</h3>
          <h4>Digital Savings Account</h4>
          <div className="update-card">
            <img
              src="https://via.placeholder.com/100x100" // Replace with actual image URL
              alt="Digital Savings Account"
            />
            <div className="update-content">
              <h4>Open a Digital Savings Account in just 3 minutes</h4>
              <p>Get started with zero balance and free debit card.</p>
              <button className="update-btn">Open Account</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bank-app">
        {/* Header Section */}
        <h1 className="header">Bank on India's top rated Mobile Banking app</h1>

        {/* Info Cards and Image Section */}
        <div className="content">
          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="icon">👍</div>
              <h2>Trusted by 20 Million+ registered customers</h2>
              <p>Hyper personalized, intuitive & seamless</p>
            </div>
            <div className="info-card">
              <div className="icon">📱</div>
              <h2>Award-Winning Mobile Banking App</h2>
              <p>Recognized for innovation and customer satisfaction</p>
            </div>
          </div>

          {/* Mobile Mockup Image */}
          <div className="mockup">
            <img
              src="internet.jpg"
              alt="Mobile Banking App"
              className="mockup-image"
              height="100%"
              width="100%"
            />
          </div>
          <div className="info-cards">
            <div className="info-card">
              <div className="icon">👍</div>
              <h2>100% Digital Banking Experience</h2>
              <p>Convenience at your fingertips, no paperwork required</p>
            </div>
            <div className="info-card">
              <div className="icon">📱</div>
              <h2>24/7 Customer Support</h2>
              <p>Always here to assist you with your banking needs</p>
            </div>
          </div>
        </div>

        {/* Footer Tagline */}
        <h2 className="footer">
          100% Digital Account with no paperwork or branch visits
        </h2>
      </div>

      <div className="kyc-section">
        {/* Left Section */}

        {/* Right Section */}
        <div className="kyc-container">
          <div className="kyc-details">
            <h2>Video KYC Account in just 4 steps</h2>
            <div className="kyc-steps">
              <div className="step active">1</div>
              <div className="step">2</div>
              <div className="step">3</div>
              <div className="step">4</div>
            </div>
            <p>PAN and Aadhaar Verification</p>
            <button className="apply-now">Apply Now</button>
            <a href="/" className="know-more">
              Know More ▶
            </a>
          </div>
          <div className="kyc-phone-mockup">
            <img src="/images/mockup-phone.png" alt="Phone Mockup" />
          </div>
        </div>

        {/* Footer */}
        <h2 className="footer-title">Funding and Fees</h2>
        <div className="footer-bar">Amaze Digital Savings Account</div>
      </div>
    </div>
  );
}

export default Home;
