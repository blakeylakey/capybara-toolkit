import React from "react";

// Components
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faQuestionCircle);

class ToolHelper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ml: !this.props.ml ? "ml-auto" : ""
    };
  }

  render() {
    return (
      <span className={"pull-right " + this.state.ml}>
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 250 }}
          overlay={
            <Tooltip id={this.props.id}>
              {this.props.content}
            </Tooltip>
          }
        >
          <FontAwesomeIcon icon="question-circle" />
        </OverlayTrigger>
      </span>
    );
  }
}

export default ToolHelper;
