import React, { Component } from "react";
import { Stack, Button } from "react-bootstrap";

export default class ProgressButtonGroup extends Component {
  render() {
    const {
      onAddClick: { handler, disabled },
    } = this.props;
    return (
      <Stack gap="3">
        <Button variant="primary" size="lg" onClick={disabled ? null : handler}>
          Add {this.props.buttonName} information
        </Button>
        <Button
          variant="success"
          size="lg"
          onClick={this.props.onContinueClick}
        >
          Next Step
        </Button>
        <Button
          variant="success"
          onClick={this.props.onPreviousClick}
          size="lg"
        >
          Previous Step
        </Button>
      </Stack>
    );
  }
}
