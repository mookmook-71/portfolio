import { Suspense, lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

export const PageRoutes = [
  {
    display: "About me",
    redirectPath: "/about-me",
  },
  {
    display: "Portfolio",
    redirectPath: "/portfolio",
  },
  {
    display: "Contact",
    redirectPath: "/contact",
  },
];

export const PortfolioRoutes = {
  Grab: "/portfolio/grab",
  ChatLocalization: "/portfolio/chat-localization",
  Partner: "/portfolio/partner-cover",
};

function App() {
  const AboutMe = lazy(() => import("./pages/aboutMe/AboutMe"));
  const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
  const PortfolioDetail = lazy(
    () => import("./pages/portfolio/PortfolioDetail"),
  );
  const Resume = lazy(() => import("./pages/resume/Resume"));
  const GrabProject = lazy(() => import('./pages/portfolio/projects/GrabProject'));
  const ChatLocalization = lazy(() => import('./pages/portfolio/projects/ChatLocalization'));
  const PartnerCover = lazy(() => import('./pages/portfolio/projects/PartnerCover'));

  return (
    <HashRouter>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/detail" element={<PortfolioDetail />} />
            <Route path={PortfolioRoutes.Grab} element={<GrabProject />} />
            <Route path={PortfolioRoutes.ChatLocalization} element={<ChatLocalization />} />
            <Route path={PortfolioRoutes.Partner} element={<PartnerCover />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
          <Route path="*" element={<Navigate to="/about-me" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
