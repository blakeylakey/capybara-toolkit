import React from "react";
import { Modal, Button } from "react-bootstrap";

class ErrorModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isErrored: this.props.isErrored
    };
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState(state => ({
      isErrored: !state.isErrored
    }));
    document.getElementById("root").classList.remove("noScroll");
    document.getElementById("error-modal-container").classList.remove('blacked-out');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isErrored !== this.props.isErrored) {
      this.setState({ isErrored: this.props.isErrored });
      document.getElementById("root").className += "noScroll";
      document.getElementById('error-modal-container').className += "blacked-out";
    }
  }

  render() {
    const styles = this.state.isErrored ? {} : { display: "none" };
    return (
      <div id="error-modal-container">
        <Modal.Dialog id="error-modal" style={styles}>
          <Modal.Header closeButton onHide={this.handler}>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>There was an error returning your results.</p>
            <Button variant="secondary" onClick={this.handler}>
              Dismiss
            </Button>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default ErrorModal;
