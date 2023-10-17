import React from "react";
import NavbarToggler from "../../Components/NavbarToggler";
import AppLink from "../../UI/AppLink";
import NavItem from "../../Components/NavItem";
import logo from "../../assets/logoText.svg";
import { authPaths, links } from "../../utils/links";
import { useIsAuthPath } from "../../hooks/useAuth";

/**
 * Renders the navigation bar component.
 *
 * @return {JSX.Element} The JSX element representing the navigation bar.
 */
const Navbar = () => {
  const isAuthPath = useIsAuthPath(authPaths);
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <AppLink className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </AppLink>

        {!isAuthPath && (
          <>
            <NavbarToggler />
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {links.map((link, index) => (
                  <NavItem
                    key={index}
                    href={link.href}
                    className={link.className}
                  >
                    {link.name}
                  </NavItem>
                ))}
                <AppLink href="/register" className="btn btn-primary">
                  Crear cuenta
                </AppLink>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
