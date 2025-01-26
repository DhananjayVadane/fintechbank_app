import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function NewsletterFooter() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-white text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            {/* Signup heading */}
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            {/* Email input field */}
            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput
                type="text"
                id="form5Example2"
                label="Email address"
                contrast
              />
            </MDBCol>

            {/* Subscribe button */}
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <MDBBtn outline color="light">
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      {/* Footer bottom section */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(86, 74, 74, 0.13)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://mdbootstrap.com/">
          fintechbank.com
        </a>
      </div>
      <span>Developed by Dhananjay With ❤️‍🔥 </span>
    </MDBFooter>
  );
}
