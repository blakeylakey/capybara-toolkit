import React from "react";

// Bootstrap Components
import { Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar(props) {
  return (
    <Form action={props.action} method="get" className="pb-3">
      <div className="p-1 px-2 rounded rounded-pill shadow bg-searchbar">
        <div className="input-group">
          <FormControl
            type="text"
            placeholder={props.placeholder}
            name={props.name}
            aria-describedby="search-bar"
            className="mr-2 bg-searchbar border-0"
          />
          <div className="input-group-append">
            <Button type="submit" variant="link" className="text-primary">
              <FontAwesomeIcon icon="search" />
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SearchBar;
