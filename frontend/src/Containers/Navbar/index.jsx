import { useIsAuthPath, useIsLoggedIn } from "../../hooks/useAuth";
import NavbarToggler from "../../Components/NavbarToggler";
import NavItem from "../../Components/NavItem";
import Avatar from "../../Components/Avatar";
import AppLink from "../../UI/AppLink";
import { authPaths, links } from "../../utils/links";
import logo from "../../assets/logoText.svg";

/**
 * Renders the navigation bar component.
 *
 * @return {JSX.Element} The JSX element representing the navigation bar.
 */
const Navbar = () => {
  const isAuthPath = useIsAuthPath(authPaths);
  const isLoggedIn = useIsLoggedIn();
  console.log(isLoggedIn);
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        {!isAuthPath && <NavbarToggler />}
        <AppLink className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </AppLink>

        {!isAuthPath && (
          <>
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
                {!isLoggedIn && (
                  <>
                    <NavItem href="/login" className="text-primary">
                      Iniciar sesión
                    </NavItem>
                    <AppLink href="/register" className="btn btn-primary">
                      Crear cuenta
                    </AppLink>
                  </>
                )}
              </ul>
            </div>
            {isLoggedIn && <Avatar />}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
