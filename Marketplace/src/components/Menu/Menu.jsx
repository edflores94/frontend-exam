import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  /*Collapse,
  Nav,
  NavItem,
  NavLink */
} from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="info" dark expand="md">
        <NavbarBrand href="/welcome-sign">
          Marketplace
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {/*<Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Empresas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Productos</NavLink>
              </NavItem>
            </Nav>
    </Collapse>*/}
        </Navbar>
      </div>
    );
  }
}
