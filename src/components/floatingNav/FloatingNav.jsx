import { useState } from "react";
import { animated, useChain, useSpring, useSpringRef } from "react-spring";

import { PageRoute } from "../../App";

import DefaultStateIcon from "../../assets/icons/floating button_default.png";
import CloseIcon from "../../assets/icons/floating button_close.png";
import ResumeIcon from "../../assets/icons/floating button_resume.png";
import LinkedInIcon from "../../assets/icons/floating button_linkedin.png";

const hamburgerExitDuration = 300;
const hamburgerEnterDuration = 100;

const closeEnterDuration = 100;
const closeExitDuration = 120;

function FloatingNav() {
  const [isActive, setIsActive] = useState(false);

  const hamburgerRef = useSpringRef();
  const hamburgerStyle = useSpring({
    ref: hamburgerRef,
    opacity: isActive ? 0 : 1,
    config: {
      duration: isActive ? hamburgerExitDuration : hamburgerEnterDuration,
    },
  });

  const closeRef = useSpringRef();
  const closeStyle = useSpring({
    ref: closeRef,
    opacity: isActive ? 1 : 0,
    config: {
      duration: isActive ? closeEnterDuration : closeExitDuration,
    },
  });

  const resumeIconRef = useSpringRef();
  const resumeIconStyle = useSpring({
    ref: resumeIconRef,
    to: [
      {
        transform: isActive
          ? "translate3D(0px, -70px, 0)"
          : "translate3D(0px, -70px, 0)",
      },
      {
        transform: isActive
          ? "translate3D(-157px, -70px, 0)"
          : "translate3D(0px, 0px, 0)",
      },
    ],
  });
  const resumeMenuRef = useSpringRef();
  const resumeMenuStyle = useSpring({
    ref: resumeMenuRef,
    from: {
      width: "10px",
      height: "45px",
    },
    to: [
      {
        width: isActive ? "60px" : "10px",
        height: isActive ? "60px" : "45px",
        transform: isActive
          ? "translate3D(0px, -70px, 0)"
          : "translate3D(0px, -70px, 0)",
      },
      {
        width: isActive ? "230px" : "10px",
        height: isActive ? "63px" : "60px",
        transform: isActive
          ? "translate3D(-75px, -70px, 0)"
          : "translate3D(0px, 0px, 0)",
      },
    ],
  });

  const linkedInIconRef = useSpringRef();
  const linkedInIconStyle = useSpring({
    ref: linkedInIconRef,
    to: [
      {
        transform: isActive
          ? "translate3D(0px, -140px, 0)"
          : "translate3D(0px, -140px, 0)",
      },
      {
        transform: isActive
          ? "translate3D(-157px, -140px, 0)"
          : "translate3D(0px, 0px, 0)",
      },
    ],
  });
  const linkedInMenuRef = useSpringRef();
  const linkedInMenuStyle = useSpring({
    ref: linkedInMenuRef,
    from: {
      width: "10px",
      height: "45px",
    },
    to: [
      {
        width: isActive ? "60px" : "10px",
        height: isActive ? "60px" : "45px",
        transform: isActive
          ? "translate3D(0px, -140px, 0)"
          : "translate3D(0px, -140px, 0)",
      },
      {
        width: isActive ? "230px" : "10px",
        height: isActive ? "63px" : "60px",
        transform: isActive
          ? "translate3D(-75px, -140px, 0)"
          : "translate3D(0px, 0px, 0)",
      },
    ],
  });

  function handleClickMenu(_isActive) {
    setIsActive((prev) => !prev);
  }

  function handleSelectResume() {
    window.open("/#" + PageRoute.Resume, "_blank");
    setIsActive(false);
  }

  function handleSelectLinkedIn() {
    window.open(
      "https://www.linkedin.com/in/pattaraporn-tripiyaratana",
      "_blank"
    );
  }

  useChain(
    [
      hamburgerRef,
      closeRef,
      resumeIconRef,
      resumeMenuRef,
      linkedInIconRef,
      linkedInMenuRef,
    ],
    [0, 0, 0.1, 0.1, 0.1, 0.1]
  );

  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>eiei</button>
      <div className="floating-nav">
        <animated.div
          style={closeStyle}
          className={`floating-nav-img main-menu`}
        >
          <img
            src={CloseIcon}
            alt="active nav menu"
            onClick={() => handleClickMenu(false)}
          />
        </animated.div>

        <animated.div
          style={hamburgerStyle}
          className={`floating-nav-img behind main-menu`}
        >
          <img
            src={DefaultStateIcon}
            alt="inactive nav menu"
            onClick={() => handleClickMenu(true)}
          />
        </animated.div>

        {/* Resume */}
        <animated.div
          style={resumeIconStyle}
          className={`floating-nav-img menu`}
          onClick={() => handleSelectResume()}
        >
          <img src={ResumeIcon} alt="inactive nav menu" />
        </animated.div>
        <animated.div
          style={resumeMenuStyle}
          className={`floating-nav-menu`}
          onClick={() => handleSelectResume()}
        >
          <b>Download resume</b>
        </animated.div>

        {/*  LinkedIn*/}
        <animated.div
          style={{ ...linkedInIconStyle, zIndex: "10" }}
          className={`floating-nav-img menu`}
          onClick={() => handleSelectLinkedIn()}
        >
          <img src={LinkedInIcon} alt="inactive nav menu" />
        </animated.div>
        <animated.div
          style={linkedInMenuStyle}
          className={`floating-nav-menu`}
          onClick={() => handleSelectLinkedIn()}
        >
          <b>Visit my Linkedin</b>
        </animated.div>
      </div>
    </>
  );
}

export default FloatingNav;
