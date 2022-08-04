import React, { Component } from "react";
import { Container } from "react-bootstrap";
export default class CVPersonalDisplay extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <Container as="h2" className="mb-3">
          {(user.firstName || "John") + " " + (user.lastName || "Smith")}
        </Container>
        <Container as="h6" className="mb-0">
          Contact
        </Container>
        <hr className="mt-1 mb-1" />
        <Container as="p" className="mb-0">
          Phone: {user.phoneNumber || "555-555-5555"}
        </Container>
        <Container as="p" className="mb-0">
          Email: {user.email || "JohnSmith@me.com"}
        </Container>
      </>
    );
  }
}
