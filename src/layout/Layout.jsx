import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import FloatingNav from "../components/floatingNav/FloatingNav";

export const PortfolioRoutes = {
  Grab: "/portfolio/grab",
  ChatLocalization: "/portfolio/chat-localization",
  Partner: "/portfolio/partner-cover",
  StyleGuide: "/portfolio/style-guide",
};

function Layout() {

  return (
    <>
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <FloatingNav />
    </>
  );
}

export default Layout;
