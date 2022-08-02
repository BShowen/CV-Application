import React, { Component } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProgressButtonGroup from "./components/ProgressButtonGroup";
import DisplayFormData from "./components/DisplayFormData";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
      progress: 0,
      formData: { 0: [], 1: [], 2: [] },
    };

    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  handleSubmit(formData) {
    this.setState({
      showForm: false,
      formData: {
        ...this.state.formData,
        [this.state.progress]:
          this.state.formData[this.state.progress].concat(formData),
      },
    });
  }

  showForm() {
    this.setState({
      showForm: true,
    });
  }

  hideForm() {
    this.setState({
      showForm: false,
    });
  }

  nextStep() {
    let newProgress = this.state.progress;
    if (newProgress < 2) {
      this.setState({
        progress: ++newProgress,
      });
    }
  }

  previousStep() {
    let newProgress = this.state.progress;
    if (newProgress > 0) {
      this.setState({
        progress: --newProgress,
      });
    }
  }

  currentStepForm() {
    return [
      <Personal cancel={this.hideForm} submit={this.handleSubmit} />,
      <Education cancel={this.hideForm} submit={this.handleSubmit} />,
      <Experience cancel={this.hideForm} submit={this.handleSubmit} />,
    ][this.state.progress];
  }

  canDisplayForm() {
    if (this.state.progress === 0 && this.state.formData[0].length > 0) {
      return false;
    } else {
      return this.state.showForm;
    }
  }

  render() {
    const canDisplayForm = this.canDisplayForm();
    const canDisplayNavigationButtons = !this.state.showForm;
    const displayFormData =
      this.state.formData[this.state.progress].length > 0 &&
      !this.state.showForm;

    const isFormDisabled =
      this.state.progress === 0 && this.state.formData[0].length > 0;
    return (
      <Container fluid>
        <Row>
          <Col className="p-0" sm={12} md={2} lg={3} xl={3}></Col>
          <Col className="p-0 mt-5" sm={12} md={8} lg={6} xl={5}>
            <Stack gap={3}>
              {canDisplayForm && this.currentStepForm()}
              {canDisplayNavigationButtons && (
                <ProgressButtonGroup
                  buttonName={this.currentStepForm().type.name.toLowerCase()}
                  onAddClick={{
                    handler: this.showForm,
                    disabled: isFormDisabled,
                  }}
                  onContinueClick={this.nextStep}
                  onPreviousClick={this.previousStep}
                />
              )}
              {displayFormData && (
                <DisplayFormData
                  data={this.state.formData[this.state.progress]}
                  progress={this.state.progress}
                />
              )}
            </Stack>
          </Col>
          <Col className="p-0" sm={12} md={2} lg={3} xl={3}></Col>
        </Row>
      </Container>
    );
  }
}
