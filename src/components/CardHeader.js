import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Trash3, PencilSquare } from "react-bootstrap-icons";

export default class CardHeader extends Component {
  render() {
    const style = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    };

    return (
      <Card.Header as="h5" style={style}>
        <div>{this.props.headerTitle}</div>
        <div style={{ ...style, gap: "10px" }}>
          <Button
            variant="secondary"
            style={{ ...style, justifyContent: "center" }}
            onClick={this.props.deleteHandler}
          >
            <Trash3 size={20} className="text-light" />
          </Button>

          <Button
            variant="secondary"
            style={{ ...style, justifyContent: "center" }}
          >
            <PencilSquare size={20} className="text-light" />
          </Button>
        </div>
      </Card.Header>
    );
  }
}
