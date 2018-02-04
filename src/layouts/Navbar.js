import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';
  
class Navigation extends Component {
  constructor() {
      super();
      this.state = {
          isOpen: false
      }

      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    let state = this.state;

    if (this.state.isOpen) {
        state.isOpen = false;
    }
    else {
        state.isOpen = true;
    }

    this.setState(state);
  }

  render() {
    return (
        <Navbar dark expand="lg" className="fixed-top bg-dark" style={{marginBottom: "10px"}}>
          <div className="container">
          <NavbarBrand href="/">InfoSec Unlocked</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Organization
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-right">
                  <DropdownItem>
                    <NavLink href="/mission">Mission Statement</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/organization">Organization</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/history">History</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/past-events">Past Events</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Resources
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-right">
                    <DropdownItem>
                        <NavLink href="/past-events">Future Speakers</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink href="/past-events">Diversity &amp; Inclusion</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink href="/past-events">Open CPFs</NavLink>
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://twitter.com/isunlocked" target="_blank">Code of Conduct</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com/isunlocked" target="_blank"><span className="fa fa-lg fa-twitter" style={{color: "#08a0E9"}}></span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>   
    );
  }
}

export default Navigation;
