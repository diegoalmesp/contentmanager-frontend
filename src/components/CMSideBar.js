import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class CMSideBar extends Component {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <NavLink to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" tag={RRNavLink}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/usuario1" tag={RRNavLink}>Usuario1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/usuario1/fds/asd" tag={RRNavLink}>Cualquiera...</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        {/*<hr />
        <p>Link based</p>
        <Nav vertical>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>*/}
      </div>
    );
  }
}

export default CMSideBar;
