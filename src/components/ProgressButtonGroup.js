import React, { Component } from "react";
import { Stack, Button } from "react-bootstrap";

export default class ProgressButtonGroup extends Component {
  render() {
    const {
      onAddClick: { handler, disabled },
    } = this.props;
    return (
      <Stack gap="3">
        <Button variant="success" size="lg" onClick={disabled ? null : handler}>
          Add information
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={this.props.onContinueClick}
        >
          Next Step
        </Button>
        <Button
          variant="primary"
          onClick={this.props.onPreviousClick}
          size="lg"
        >
          Previous Step
        </Button>
        {this.props.progress === 2 && (
          <Button
            size="lg"
            variant="success"
            onClick={this.props.onCompleteClick}
          >
            Complete
          </Button>
        )}
      </Stack>
    );
  }
}
