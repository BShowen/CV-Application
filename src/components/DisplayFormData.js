import { Component } from "react";
import PersonalDisplay from "./PersonalDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import EducationDisplay from "./EducationDisplay";

export default class DisplayFormData extends Component {
  getDisplayComponent(data) {
    return [
      <PersonalDisplay
        key={data.id}
        data={data}
        deleteHandler={this.props.clickHandlers.onDelete}
        editHandler={this.props.clickHandlers.onEdit}
      />,
      <EducationDisplay
        key={data.id}
        data={data}
        deleteHandler={this.props.clickHandlers.onDelete}
        editHandler={this.props.clickHandlers.onEdit}
      />,
      <ExperienceDisplay
        key={data.id}
        data={data}
        deleteHandler={this.props.clickHandlers.onDelete}
        editHandler={this.props.clickHandlers.onEdit}
      />,
    ][this.props.progress];
  }

  getFormDisplay() {
    const formDisplays = [];
    this.props.data.forEach((formData) => {
      formDisplays.push(this.getDisplayComponent(formData));
    });
    return formDisplays;
  }

  render() {
    return <>{this.getFormDisplay()}</>;
  }
}
