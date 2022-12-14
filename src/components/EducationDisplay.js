import React, { Component } from "react";
import { Col, Row, Card, Form } from "react-bootstrap";
import CardHeader from "./CardHeader";

export default class EducationDisplay extends Component {
  render() {
    if (this.props.data.editForm) {
      return this.props.data.editForm;
    }
    return (
      <Card>
        <Form>
          <CardHeader
            headerTitle="Education"
            deleteHandler={this.props.deleteHandler.bind(
              null,
              this.props.data.id
            )}
            editHandler={this.props.editHandler.bind(null, this.props.data.id)}
          />
          <Card.Body>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="institutionName">
                  <Form.Label>Name of institution</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.institutionName}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="fieldOfStudy">
                  <Form.Label>Field of study</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.fieldOfStudy}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Label>Degree</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.data.degree}
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
                    placeholder={this.props.data.graduationDate}
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
