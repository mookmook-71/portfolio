import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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

  return (
    <BrowserRouter>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<>portfolio</>} />
          </Route>
          <Route path="*" element={<Navigate to="/about-me" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
