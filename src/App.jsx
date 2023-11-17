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
    display: "Resume",
    redirectPath: "/resume",
  },
  {
    display: "Contact",
    redirectPath: "/contact",
  },
];

function App() {
  const AboutMe = lazy(() => import("./pages/aboutMe/AboutMe"));
  const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
  const PortfolioDetail = lazy(() => import("./pages/portfolio/PortfolioDetail"));

  return (
    <HashRouter>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/detail" element={<PortfolioDetail />} />
          </Route>
          <Route path="*" element={<Navigate to="/about-me" />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
