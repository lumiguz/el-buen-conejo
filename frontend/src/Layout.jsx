import Footer from "./Components/Footer";
import Navbar from "./Containers/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
