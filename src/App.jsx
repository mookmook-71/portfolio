import { Suspense, lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout, { PortfolioRoutes } from "./layout/Layout";
import { ChallengesRoutes } from "./pages/portfolio/Portfolio";
import Dummy from "./pages/Dummy";

export const PageRoute = {
  AboutMe: "/about-me",
  Portfolio: "/portfolio",
  Contact: "/contact",
  Resume: "/resume",
};

export const TopNavMenus = [
  {
    display: "About me",
    redirectPath: PageRoute.AboutMe,
  },
  {
    display: "Portfolio",
    redirectPath: PageRoute.Portfolio,
  },
  // {
  //   display: "Contact",
  //   redirectPath: PageRoute.Contact,
  // },
];

export const FeatureToggle = {
  ExperiencedProjects: true,
  WritingChallenge: false,
  Contact: false,
  Resume: true,
};

function App() {
  const AboutMe = lazy(() => import("./pages/aboutMe/AboutMe"));
  const Resume = lazy(() => import("./pages/resume/Resume"));
  const GrabProject = lazy(() =>
    import("./pages/portfolio/projects/GrabProject")
  );
  const ChatLocalization = lazy(() =>
    import("./pages/portfolio/projects/ChatLocalization")
  );
  const PartnerCover = lazy(() =>
    import("./pages/portfolio/projects/PartnerCover")
  );
  const StyleGuide = lazy(() =>
    import("./pages/portfolio/projects/StyleGuide")
  );

  const ChallengeDay1 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay1")
  );

  const ChallengeDay2 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay2")
  );

  const ChallengeDay3 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay3")
  );

  const ChallengeDay4 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay4")
  );

  const ChallengeDay5 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay5")
  );

  const ChallengeDay6 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay6")
  );

  const ChallengeDay7 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay7")
  );

  const ChallengeDay8 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay8")
  );

  const ChallengeDay9 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay9")
  );

  const ChallengeDay10 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay10")
  );

  const ChallengeDay11 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay11")
  );

  const ChallengeDay12 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay12")
  );

  const ChallengeDay13 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay13")
  );

  const ChallengeDay14 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay14")
  );

  const ChallengeDay15 = lazy(() =>
    import("./pages/portfolio/uxwchallenges/ChallengeDay15")
  );

  const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
  const PortfolioDetail = lazy(() =>
    import("./pages/portfolio/PortfolioDetail")
  );

  return (
    <HashRouter>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={PageRoute.AboutMe} element={<AboutMe />} />
            {FeatureToggle.ExperiencedProjects && (
              <>
                <Route
                  exact
                  path={PageRoute.Portfolio}
                  element={<Portfolio />}
                />
                <Route
                  exact
                  path={PortfolioRoutes.Grab}
                  element={<GrabProject />}
                />
                <Route
                  exact
                  path={PortfolioRoutes.ChatLocalization}
                  element={<ChatLocalization />}
                />
                <Route
                  exact
                  path={PortfolioRoutes.Partner}
                  element={<PartnerCover />}
                />
                <Route
                  exact
                  path={PortfolioRoutes.StyleGuide}
                  element={<StyleGuide />}
                />
              </>
            )}
            {FeatureToggle.WritingChallenge && (
              <>
                <Route
                  path={ChallengesRoutes.ChallengeDay1}
                  element={<ChallengeDay1 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay2}
                  element={<ChallengeDay2 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay3}
                  element={<ChallengeDay3 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay4}
                  element={<ChallengeDay4 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay5}
                  element={<ChallengeDay5 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay6}
                  element={<ChallengeDay6 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay7}
                  element={<ChallengeDay7 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay8}
                  element={<ChallengeDay8 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay9}
                  element={<ChallengeDay9 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay10}
                  element={<ChallengeDay10 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay11}
                  element={<ChallengeDay11 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay12}
                  element={<ChallengeDay12 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay13}
                  element={<ChallengeDay13 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay14}
                  element={<ChallengeDay14 />}
                />
                <Route
                  path={ChallengesRoutes.ChallengeDay15}
                  element={<ChallengeDay15 />}
                />
              </>
            )}
          </Route>
          <Route path="/dummy" element={<Dummy />} />
          {FeatureToggle.Resume && (
            <Route exact path={PageRoute.Resume} element={<Resume />} />
          )}
          <Route path="*" element={<Navigate to={PageRoute.AboutMe} />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
