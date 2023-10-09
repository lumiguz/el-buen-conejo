import React from "react";
import NavbarToggler from "../../Components/NavbarToggler";
import AppLink from "../../UI/AppLink";
import UnorderedList from "../../Components/UnorderedList";
import NavItem from "../../Components/NavItem";
import logo from "../../assets/logoText.svg";

/**
 * Renders the navigation bar component.
 *
 * @return {JSX.Element} The JSX element representing the navigation bar.
 */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <AppLink className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </AppLink>
        <NavbarToggler />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <UnorderedList className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavItem href="/community">Comunidad</NavItem>
            <NavItem href="/market">Mercado</NavItem>
            <NavItem href="/events">Eventos y Recursos</NavItem>
            <NavItem href="/login" className="text-primary">
              Iniciar sesión
            </NavItem>
            <AppLink href="/register" className="btn btn-primary">
              Crear cuenta
            </AppLink>
          </UnorderedList>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
