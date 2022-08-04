import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class CVEducationDisplay extends Component {
  dataCards(dataArray) {
    const defaultData = [
      {
        institutionName: "University of Central Florida",
        degree: "B.S.",
        fieldOfStudy: "Business Administration",
        startDate: "2013/01/15",
        graduationDate: "2015/06/11",
      },
      {
        institutionName: "Seminole State College",
        degree: "A.S.",
        fieldOfStudy: "Marketing",
        startDate: "2010/08/07",
        graduationDate: "2012/12/07",
      },
    ];
    if (dataArray.length === 0) dataArray = dataArray.concat(defaultData);
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
