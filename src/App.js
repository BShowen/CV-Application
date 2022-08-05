import React, { Component } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProgressButtonGroup from "./components/ProgressButtonGroup";
import DisplayFormData from "./components/DisplayFormData";
import SideNav from "./components/SideNav";
import "./styles/App.css";
import CurriculumVitae from "./components/CurriculumVitae";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
      progress: 0,
      id: 0,
      formData: { 0: [], 1: [], 2: [] },
      complete: false,
    };

    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.complete = this.complete.bind(this);
  }

  handleSubmit(formData) {
    if (formData.id !== undefined) {
      formData.editForm = undefined; //So the edit form doesn't keep rendering
      this.updateData(formData);
    } else {
      this.saveData(formData);
    }
  }

  updateData(formData) {
    this.setState({
      showForm: false,
      formData: {
        ...this.state.formData,
        [this.state.progress]: this.state.formData[this.state.progress].map(
          (data) => {
            if (data.id === formData.id) {
              data = { ...data, ...formData };
            }
            return data;
          }
        ),
      },
    });
  }

  saveData(formData) {
    this.setState({
      id: this.state.id + 1,
      showForm: false,
      formData: {
        ...this.state.formData,
        [this.state.progress]: this.state.formData[this.state.progress].concat({
          ...formData,
          id: this.state.id,
          editForm: undefined,
        }),
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
      formData: {
        ...this.state.formData,
        [this.state.progress]: this.state.formData[this.state.progress].map(
          (data) => {
            if (data.editForm) {
              data.editForm = undefined;
            }
            return data;
          }
        ),
      },
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

  currentStepForm(defaultValues = {}) {
    return [
      <Personal
        cancel={this.hideForm}
        submit={this.handleSubmit}
        defaultValues={defaultValues}
      />,
      <Education
        cancel={this.hideForm}
        submit={this.handleSubmit}
        defaultValues={defaultValues}
      />,
      <Experience
        cancel={this.hideForm}
        submit={this.handleSubmit}
        defaultValues={defaultValues}
      />,
    ][this.state.progress];
  }

  canDisplayForm() {
    if (this.state.progress === 0 && this.state.formData[0].length > 0) {
      return false;
    } else {
      return this.state.showForm;
    }
  }

  canDisplayFormData() {
    return (
      this.state.formData[this.state.progress].length > 0 &&
      !this.state.showForm
    );
  }

  deleteItem(id) {
    this.setState({
      formData: {
        ...this.state.formData,
        [this.state.progress]: this.state.formData[this.state.progress].filter(
          (data) => data.id !== id
        ),
      },
    });
  }

  editItem(id) {
    this.setState({
      formData: {
        ...this.state.formData,
        [this.state.progress]: this.state.formData[this.state.progress].map(
          (formData) => {
            if (formData.id === id) {
              formData.editForm = this.currentStepForm(formData);
            }
            return formData;
          }
        ),
      },
    });
  }

  complete() {
    this.setState({
      complete: true,
    });
  }

  render() {
    const canDisplayForm = this.canDisplayForm();
    const canDisplayNavigationButtons = !this.state.showForm;
    const displayFormData = this.canDisplayFormData();

    const isFormDisabled =
      this.state.progress === 0 && this.state.formData[0].length > 0;

    const containerStyle = {
      display: "flex",
      flexDirection: "column",
    };

    if (!this.state.complete) {
      return (
        <Container style={containerStyle} fluid className="h-100">
          <Row className="responsive-row-height bg-light">
            <Col
              className="p-0 responsive-col-height bg-light"
              sm={12}
              md={2}
              lg={3}
              xl={3}
              xxl={1}
            >
              <SideNav progress={this.state.progress} />
            </Col>
            <Col
              className="p-10 mh-100 overflow-scroll"
              sm={12}
              md={10}
              lg={6}
              xl={6}
              xxl={4}
            >
              <Stack gap={3}>
                {canDisplayForm && this.currentStepForm()}
                {canDisplayNavigationButtons && (
                  <ProgressButtonGroup
                    onAddClick={{
                      handler: this.showForm,
                      disabled: isFormDisabled,
                    }}
                    onContinueClick={this.nextStep}
                    onPreviousClick={this.previousStep}
                    onCompleteClick={this.complete}
                    progress={this.state.progress}
                  />
                )}
                {displayFormData && (
                  <DisplayFormData
                    data={this.state.formData[this.state.progress]}
                    progress={this.state.progress}
                    clickHandlers={{
                      onDelete: this.deleteItem,
                      onEdit: this.editItem,
                    }}
                  />
                )}
              </Stack>
            </Col>
            <Col className="p-0" sm={12} md={12} lg={3} xl={3} xxl={1}></Col>
          </Row>
        </Container>
      );
    } else {
      return <CurriculumVitae data={this.state.formData} />;
    }
  }
}
