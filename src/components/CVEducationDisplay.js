import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class CVEducationDisplay extends Component {
  dataCards(dataArray) {
    return dataArray.map((dataObject, i) => {
      return (
        <Container key={i} className="ps-3 m-0">
          <Container as="h5" className="mb-2">
            {dataObject.institutionName}
          </Container>
          <Container as="p" className="mb-0">
            {dataObject.degree} - {dataObject.fieldOfStudy}
          </Container>
          <Container as="p" className="mb-0">
            {dataObject.startDate} - {dataObject.graduationDate}
          </Container>
          <hr />
        </Container>
      );
    });
  }

  render() {
    const { data } = this.props;
    return (
      <Container fluid className="mb-4">
        <Container as="h2" className="mb-0">
          Education
        </Container>
        <hr className="mt-1" />
        {this.dataCards(data)}
      </Container>
    );
  }
}
