import React from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faSearch);

class NavigationTopBar extends React.Component {
  render() {
    let shadow = this.props.noShadow ? '' : 'shadow-lg';
    return (
        <Navbar variant="dark" bg="dark" expand="md" fixed="top" className={`px-md-5 py-3 NavigationTopBar ${shadow}`} >
        <Navbar.Brand id="NavbarBrand" href="/">capybara.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form action="/tools/pdb/results" method="get" inline className="mr-4">
              <div className="p-1 px-2 rounded rounded-pill shadow-sm bg-light">
                <div className="input-group">
                  <FormControl type="text" placeholder="keywords..." name='keywords' aria-describedby='keyword-search' className="mr-2 bg-light border-0 w-80" />
                  <div className="input-group-append">
                    <Button type="submit" variant="link" className="text-primary">
                      <FontAwesomeIcon icon="search" />
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
            <Nav.Link href="/">home</Nav.Link>
            <NavDropdown title="products" id="basic-nav-dropdown" className="top-nav-dropdown">
              <NavDropdown.Item className="top-nav-dropdown-item" href="/tools/pdb/">product db</NavDropdown.Item>
              <NavDropdown.Item className="top-nav-dropdown-item" href="/tools/niche/">niche hunter</NavDropdown.Item>
              <NavDropdown.Item className="top-nav-dropdown-item" href="/tools/la/">listing analysis</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationTopBar;