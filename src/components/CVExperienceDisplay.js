import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class CVExperienceDisplay extends Component {
  dataCards(dataArray) {
    const defaultData = [
      {
        companyName: "Florida Hospital",
        jobTitle: "Chief marketing officer",
        startDate: "02/21/2019",
        endDate: "2022/08/04",
      },
      {
        companyName: "Orlando Federal Credit Union",
        jobTitle: "VP marketing",
        startDate: "2015/08/03",
        endDate: "2019/02/09",
      },
    ];
    if (dataArray.length === 0) dataArray = dataArray.concat(defaultData);

    return dataArray.map((dataObject, i) => {
      return (
        <Container key={i} className="ps-3 m-0">
          <Container as="h5" className="mb-2">
            {dataObject.companyName}
          </Container>
          <Container as="p" className="mb-0">
            Title: {dataObject.jobTitle}
          </Container>
          <Container as="p" className="mb-0">
            {dataObject.startDate} - {dataObject.endDate}
          </Container>
          <Container as="p" className="mb-0">
            {dataObject.jobDescription}
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
          Experience
        </Container>
        <hr className="mt-1" />
        {this.dataCards(data)}
      </Container>
    );
  }
}
