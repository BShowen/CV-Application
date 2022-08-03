import React, { Component } from "react";
import { Col, Row, Card, Form } from "react-bootstrap";
import CardHeader from "./CardHeader";

export default class Experience extends Component {
  render() {
    return (
      <Card>
        <Form>
          <CardHeader
            headerTitle="Experience"
            deleteHandler={this.props.deleteHandler.bind(
              null,
              this.props.data.id
            )}
          />
          <Card.Body>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.companyName}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.jobTitle}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.startDate}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.endDate}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    placeholder={this.props.data.jobDescription}
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
