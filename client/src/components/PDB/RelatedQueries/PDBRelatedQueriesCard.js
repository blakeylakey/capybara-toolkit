import React from "react";

// Components
import { Card, ListGroup, Tab } from "react-bootstrap";
import PDBRelatedQueriesLinks from "./PDBRelatedQueriesLinks";
import PDBRelatedQueriesShowing from "./PDBRelatedQueriesShowing";
import PDBRelatedQueriesCardHeader from "./PDBRelatedQueriesCardHeader";

class PDBRelatedQueriesCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: {
        Top: 1,
        Rising: 1
      },
      active: "Top"
    };

    this.handleNextPageChange = this.handleNextPageChange.bind(this);
    this.handlePrevPageChange = this.handlePrevPageChange.bind(this);
    this.switch_filter = this.switch_filter.bind(this);
  }

  handleNextPageChange(event) {
    this.setState(state => {
      let newPages = state.currentPage;
      let pageNum = state.currentPage[state.active];
      newPages[state.active] = pageNum >= 5 ? pageNum : pageNum + 1;
      return { currentPage: newPages };
    });
  }

  handlePrevPageChange(event) {
    this.setState(state => {
      let newPages = state.currentPage;
      let pageNum = state.currentPage[state.active];
      newPages[state.active] = pageNum <= 1 ? pageNum : pageNum - 1;
      return { currentPage: newPages };
    });
  }

  switch_filter(event) {
    if (event.target.id !== this.state.active) {
      this.setState(state => ({
        active: state.active === "Top" ? "Rising" : "Top"
      }));
    }
  }

  render() {
    const perPage = 5;
    const data = {
      Top: [],
      Rising: []
    };
    if (this.props.data.success) {
      data[this.state.active] = this.props.data.results[this.state.active];
    }

    let currentData = data[this.state.active];
    let indexOfLastEl = this.state.currentPage[this.state.active] * perPage;
    let indexOfFirstEl = indexOfLastEl - perPage;
    let currentEls = currentData.slice(indexOfFirstEl, indexOfLastEl);

    return (
      <Tab.Container id="PDBRelatedQueriesCard" defaultActiveKey="top">
        <Card className="h-100">
          <PDBRelatedQueriesCardHeader
            active={this.state.active}
            handler={this.switch_filter}
          />
          <Card.Body>
            <div>
              <ListGroup variant="flush">
                {currentEls.map((elem, idx) => (
                  <PDBRelatedQueriesLinks
                    idx={idx}
                    bottom={indexOfFirstEl}
                    query={elem.query}
                    value={elem.value}
                  />
                ))}
              </ListGroup>
              <PDBRelatedQueriesShowing
                bottom={indexOfFirstEl}
                top={indexOfLastEl}
                length={currentData.length}
                prevOnClick={this.handlePrevPageChange}
                nextOnClick={this.handleNextPageChange}
              />
            </div>
          </Card.Body>
        </Card>
      </Tab.Container>
    );
  }
}

export default PDBRelatedQueriesCard;
