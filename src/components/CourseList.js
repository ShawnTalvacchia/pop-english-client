import { render } from "react-dom";
import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { Button } from "react-bootstrap";

import "../static/App.css";

const pages = [
  ({ style }) => (
    <animated.div
      className="course-card"
      style={{ ...style, background: "#EF3C6B" }}
    >
      <h1>Build Your Own</h1>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      className="course-card"
      style={{ ...style, background: "#131142" }}
    >
      <img src="../images/modernfamily.jpg" alt="Modern Family - Poster"></img>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      className="course-card"
      style={{ ...style, background: "#131142" }}
    >
      <img
        src="../images/howimetyourmother.jpg"
        alt="How I Met Your Mother - Poster"
      ></img>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      className="course-card"
      style={{ ...style, background: "#131142" }}
    >
      <img
        src="../images/bigbangtheory.jpg"
        alt="Big Bang Theory - Poster"
      ></img>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      className="course-card"
      style={{ ...style, background: "#131142" }}
    >
      <img src="../images/talkshows.jpg" alt="Talk Shows - Poster"></img>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      className="course-card"
      style={{ ...style, background: "#131142" }}
    >
      <img src="../images/ted.png" alt="TED - Poster"></img>
    </animated.div>
  )
];

export default function CourseList(props) {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 6), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });
  return (
    <div
      className="simple-trans-main"
      onClick={() => {
        onClick();
        props.handleIndexChange((index + 1) % 6);
      }}
    >
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
}
