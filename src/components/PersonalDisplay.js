import React, { Component } from "react";
import { Col, Row, Card, Form, Button } from "react-bootstrap";
import { Trash3, PencilSquare } from "react-bootstrap-icons";

export default class Personal extends Component {
  render() {
    const style = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    };

    return (
      <Card>
        <Card.Header as="h5" style={style}>
          <div>Personal Info.</div>
          <div style={{ ...style, gap: "10px" }}>
            <Button
              variant="secondary"
              style={{ ...style, justifyContent: "center" }}
            >
              <Trash3 size={20} className="text-light" />
            </Button>

            <Button
              variant="secondary"
              style={{ ...style, justifyContent: "center" }}
            >
              <PencilSquare size={20} className="text-light" />
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.data.firstName}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.data.lastName}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.data.phoneNumber}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.data.email}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
