import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useDispatch } from "react-redux";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { signOut } from "../../store/modules/auth/actions";

export default function Header() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Navbar fixed="top" dark color="dark" expand="md" light>
      <NavbarBrand className="text-light" href="/">
        Cadastro de Usuários
      </NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem onClick={handleSignOut}>
          <NavLink>Logout</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
