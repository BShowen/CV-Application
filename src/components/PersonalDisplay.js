import React, { Component } from "react";
import { Col, Row, Card, Form } from "react-bootstrap";
import CardHeader from "./CardHeader";

export default class PersonalDisplay extends Component {
  render() {
    if (this.props.data.editForm) {
      return this.props.data.editForm;
    }
    return (
      <Card>
        <Form>
          <CardHeader
            headerTitle="Personal Info"
            deleteHandler={this.props.deleteHandler.bind(
              null,
              this.props.data.id
            )}
            editHandler={this.props.editHandler.bind(null, this.props.data.id)}
          />
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
        </Form>
      </Card>
    );
  }
}
