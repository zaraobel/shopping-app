import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <h1 className="mt-4">Welcome to Your Dashboard</h1>

      <Row className="my-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Featured Products</Card.Title>
              {/* You can reuse your product component here */}
              <Button variant="primary">View Products</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Categories</Card.Title>
              <ul>
                <li>Electronics</li>
                <li>Clothing</li>
                <li>Home Goods</li>
                <li>Sports</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Quick Links</Card.Title>
              <ul>
                <li><a href="/cart">View Cart</a></li>
                <li><a href="/orders">Order History</a></li>
                <li><a href="/profile">Manage Profile</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
