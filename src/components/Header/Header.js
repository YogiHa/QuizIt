import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
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
  DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default function Header({ isLogedIn }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    dispatch(signOut());
    toggle();
  };
  return (
    <div>
      <Navbar color="light-purple" light expand="md">
        <NavbarBrand href="/">Quiz It</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isLogedIn ? (
              <div>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    exact
                    to={process.env.PUBLIC_URL + '/createquiz'}
                  >
                    Create New Quiz
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={handleClick}> Sign Out </NavLink>
                </NavItem>
              </div>
            ) : (
              <div>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    exact
                    to={process.env.PUBLIC_URL + '/signin'}
                  >
                    Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RRNavLink}
                    exact
                    to={process.env.PUBLIC_URL + '/register'}
                  >
                    Register
                  </NavLink>
                </NavItem>
              </div>
            )}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
