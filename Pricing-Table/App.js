import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './App.css';

// Pricing Table Component
const PricingTable = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Basic</h5>
              <p className="card-text">$10/month</p>
              <ul>
                <li>1 User</li>
                <li>10 GB Storage</li>
                <li>Email Support</li>
              </ul>
              <Button variant="primary">Choose Plan</Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Standard</h5>
              <p className="card-text">$20/month</p>
              <ul>
                <li>5 Users</li>
                <li>50 GB Storage</li>
                <li>Priority Support</li>
              </ul>
              <Button variant="primary">Choose Plan</Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Premium</h5>
              <p className="card-text">$30/month</p>
              <ul>
                <li>Unlimited Users</li>
                <li>100 GB Storage</li>
                <li>24/7 Support</li>
              </ul>
              <Button variant="primary">Choose Plan</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dark/Light Mode Toggle Component
const ThemeToggle = ({ setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <div className="container text-center mt-4">
      <Button variant="secondary" onClick={handleToggle}>
        Toggle Dark/Light Mode
      </Button>
    </div>
  );
};

// FAQ Accordion Component
const FAQAccordion = () => {
  return (
    <div className="container mt-5">
      <h3>Frequently Asked Questions</h3>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            What is the pricing for each plan?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>The pricing varies depending on the plan you select. Basic is $10/month, Standard is $20/month, and Premium is $30/month.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Is there any free trial?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Yes, we offer a 14-day free trial for all plans!</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Can I upgrade my plan later?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Yes, you can upgrade your plan at any time. Contact our support for assistance.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

// App Component
function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [isDarkMode]);

  return (
    <div>
      <ThemeToggle setIsDarkMode={setIsDarkMode} />
      <PricingTable />
      <FAQAccordion />
    </div>
  );
}

export default App;
