import { Component, createRef } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
  Controller,
  SpringRef,
} from "@react-spring/web";

const data = ["hi", "there!"];

function Dummy() {
  const springRef = useSpringRef();
  const springs = useSpring({
    ref: springRef,
    from: { size: "20%" },
    to: { size: "50%" },
  });

  const transRef = useSpringRef();
  const transitions = useTransition(data, {
    ref: transRef,
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0 },
  });

  useChain([springRef, transRef], [0, 0.4]);

  return (
    <animated.div
      style={{
        height: springs.size,
        width: springs.size,
        background: "blue",
      }}
    >
      {transitions((style, item) => (
        <animated.div
          style={{
            width: "120px",
            height: "120px",
            background: "green",
            ...style,
          }}
        >
          {item}
        </animated.div>
      ))}
    </animated.div>
  );
}

function AnimatedComponent() {
  const isShowing = createRef(false);
  const api = SpringRef();
  const animations = new Controller({ opacity: 0, ref: api });

  function toggle() {
    animations.start({ opacity: isShowing ? 1 : 0 });

    isShowing.current = !isShowing;
  }

  return (
    <>
      <button
        onClick={() => {
          toggle();
        }}
      >
        click
      </button>
      <animated.div style={animations.springs}>I will fade</animated.div>
    </>
  );
}

export default AnimatedComponent;
