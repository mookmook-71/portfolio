import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
