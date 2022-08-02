import { Component } from "react";
import PersonalDisplay from "./PersonalDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import EducationDisplay from "./EducationDisplay";

export default class DisplayFormData extends Component {
  getDisplayComponent(key, data) {
    return [
      <PersonalDisplay key={key} data={data} />,
      <EducationDisplay key={key} data={data} />,
      <ExperienceDisplay key={key} data={data} />,
    ][this.props.progress];
  }

  getFormDisplay() {
    const formDisplays = [];
    let i = 0;
    this.props.data.forEach((formSubmission) => {
      for (const formName in formSubmission) {
        formDisplays.push(
          this.getDisplayComponent(i, formSubmission[formName])
        );
      }
      i++;
    });
    return formDisplays;
  }

  render() {
    return <>{this.getFormDisplay()}</>;
  }
}
