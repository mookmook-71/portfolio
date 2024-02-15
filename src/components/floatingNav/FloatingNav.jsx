import { useEffect, useState } from "react";
import { animated, useChain, useSpring, useSpringRef } from "react-spring";

import HamburgerIcon from "../../assets/hamburger.png";
import CloseIcon from "../../assets/close.png";
import ResumeIcon from "../../assets/resume_menu.png";

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

  const resumeMenuRef = useSpringRef();
  const resumeMenuStyle = useSpring({
    ref: resumeMenuRef,
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

  const menuItemRef = useSpringRef();
  const menuItemStyle = useSpring({
    ref: menuItemRef,
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

  function handleClickMenu(_isActive) {
    setIsActive((prev) => !prev);
  }

  useChain(
    [hamburgerRef, closeRef, resumeMenuRef, menuItemRef],
    [0, 0, 0.1, 0.1]
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
            src={HamburgerIcon}
            alt="inactive nav menu"
            onClick={() => handleClickMenu(true)}
          />
        </animated.div>

        <animated.div
          style={resumeMenuStyle}
          className={`floating-nav-img menu`}
        >
          <img src={ResumeIcon} alt="inactive nav menu" onClick={() => {}} />
        </animated.div>

        <animated.div style={menuItemStyle} className={`floating-nav-menu`}>
          <b>Download resume</b>
        </animated.div>
      </div>
    </>
  );
}

export default FloatingNav;
