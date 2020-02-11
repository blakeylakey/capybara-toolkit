import React from "react";

import { Card } from "react-bootstrap";
import LAScreenShotBody from "./LAScreenShotBody";
import LAScreenShotHeader from "./LAScreenShotHeader";

class LAScreenShotCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      list_isOpen: false
    };

    this.handleSwitch = this.handleSwitch.bind(this);
    this.getRenderedItems = this.getRenderedItems.bind(this);
  }

  handleSwitch(value) {
    this.setState(state => ({
      [value]: !state[value]
    }));
  }

  getRenderedItems() {
    if (this.state.list_isOpen) {
      return this.props.productInfo.features;
    } else {
      var max_chars = 750;
      var formattedFeatures = [];
      this.props.productInfo.features.forEach(el => {
        if (el.length <= max_chars) {
          formattedFeatures.push(el);
          max_chars = Math.max(max_chars - el.length, 0);
        } else if (max_chars === 0) {
          return;
        } else {
          formattedFeatures.push(el.slice(0, max_chars));
          max_chars = Math.max(max_chars - el.length, 0);
        }
      });
      formattedFeatures[formattedFeatures.length - 1] += "...";

      return formattedFeatures;
    }
  }

  render() {
    const screenShotToolHelper =
      "This is a quick overview of what we are currently seeing with our listing analysis tool. If the product or information shown here is wrong or looks wrong, there may be an issue with our analysis toolkit or with the ASIN provided to us.";

    return (
      <Card>
        <LAScreenShotHeader
          title={"What We Currently See (Live Screenshot)"}
          content={screenShotToolHelper}
        />
        <LAScreenShotBody
          screenshot={this.props.screenshot}
          handler={this.handleSwitch}
          isOpen={this.state.isOpen}
          list_isOpen={this.state.list_isOpen}
          handleList={this.getRenderedItems}
          title={this.props.productInfo.pageTitle}
        />
      </Card>
    );
  }
}

export default LAScreenShotCard;
