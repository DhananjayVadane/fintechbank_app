import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function Section() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Digital A/C</Card.Title>
          <Card.Text>
            Enjoy Exclusive Offers with ASAP Digital Savings Account
            <Button variant="success">Open online now</Button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Terms and conditon apply</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Home loan</Card.Title>
          <Card.Text>
            12 EMI Off With Home Loans at attractive rated of interest.
            <Button variant="success">Apply Now</Button>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">*T&C Apply</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Credit Card</Card.Title>
          <Card.Text>
            Avail credit card against Fixed Deposit Book FD via UPI payment.
          </Card.Text>
          <Button variant="success">Apply Credit Card</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Section;
