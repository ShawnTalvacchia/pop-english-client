import React, { Component } from "react";

import { Button } from "react-bootstrap";
import TextLoop from "react-text-loop";

import "../static/App.css";
import "../static/devices.min.css";

import ModuleCarousel from "../components/ModuleCarousel";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      token: props.token,
      index: 0,
      user: { id: null }
    };
  }

  handleIndexChange = value => {
    this.setState({ index: value });
    console.log(this.CourseDisplay);
  };

  render() {
    const courseHeadTextDisplay = {
      "0": "What's your focus?",
      "1": "IELTS Listening and Speaking",
      "2": "Conversation Skills",
      "3": "Interpersonal Skills",
      "4": "Listening Skills",
      "5": "Presentation Skills"
    };
    const courseSubTextDisplay = {
      "0": "Create the perfect course for you!",
      "1": "Modern Family",
      "2": "How I Met Your Mother",
      "3": "The Big Bang Theory",
      "4": "Talk Shows",
      "5": "TED Talks"
    };
    const courseTextDisplay = {
      "0":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Amet commodo nulla facilisi nullam vehicula ipsum a. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Dui ut ornare lectus sit amet. ",
      "1":
        "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Amet commodo nulla facilisi nullam vehicula ipsum a. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Dui ut ornare lectus sit amet.",
      "2":
        "Color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Amet commodo nulla facilisi nullam vehicula ipsum a. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Dui ut ornare lectus sit amet.",
      "3":
        "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Amet commodo nulla facilisi nullam vehicula ipsum a. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Dui ut ornare lectus sit amet.",
      "4":
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Amet commodo nulla facilisi nullam vehicula ipsum a. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Dui ut ornare lectus sit amet.",
      "5":
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Amet commodo nulla facilisi nullam vehicula ipsum a. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Dui ut ornare lectus sit amet."
    };

    return (
      <div className="scroll-container">
        <section
          id="home"
          className="hero d-flex flex-column justify-content-center "
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-8">
                <div className="title">Speak like a Native Speaker</div>
                <div className="spacer-a"></div>
                <div className="subtitle">
                  Fluency comes when we can move beyond theory and get to real
                  practice. Connect with relevant material, interesting topics,
                  targeted activities, and Western speakers, all from home on a
                  schedule that fits you.
                </div>
                <div className="spacer-b"></div>
                <a className="" href="/en/apply">
                  <div>
                    <Button
                      className="sign-up-button"
                      href="./register"
                      size="lg"
                    >
                      Find Out More
                    </Button>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <img className="hero-img" src="../images/hero.png"></img>
              </div>
            </div>
          </div>
        </section>

        <section id="courses">
          <div className="container">
            <div className="row course-list">
              <div className={`course-list-info col-lg-6 col-md-12 col-sm-12`}>
                <h2>{courseHeadTextDisplay[this.state.index]}</h2>
                <h3>{courseSubTextDisplay[this.state.index]}</h3>
                <p>{courseTextDisplay[this.state.index]}</p>
              </div>
              <div className="phone-display col-lg-6 col-md-12 col-sm-12">
                <div className="marvel-device iphone8plus silver">
                  <div className="top-bar"></div>
                  <div className="sleep"></div>
                  <div className="volume"></div>
                  <div className="camera"></div>
                  <div className="sensor"></div>
                  <div className="speaker"></div>
                  <div className="screen">
                    <ModuleCarousel
                      handleIndexChange={this.handleIndexChange}
                    ></ModuleCarousel>
                  </div>
                  <div className="home"></div>
                  <div className="bottom-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="product-description">
          <div className="row">
            <h3 className="pd-title">
              Communication skills to advance your life
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img className="hero-img" src="../images/study.png"></img>
            </div>
            <div className="col-md-6 product-info">
              <div className="info-line">
                <h3 style={{ fontSize: "2rem" }}>We make practice</h3>
                <TextLoop
                  interval={6000}
                  springConfig={{ stiffness: 180, damping: 8 }}
                  className="info-line-loop"
                >
                  <h2 style={{ fontSize: "3rem", color: "#ef3c6b" }}>
                    interesting
                  </h2>
                  <h2 style={{ fontSize: "3rem", color: "#ef3c6b" }}>
                    targeted
                  </h2>
                  <h2 style={{ fontSize: "3rem", color: "#ef3c6b" }}>
                    convenient
                  </h2>
                  <h2 style={{ fontSize: "3rem", color: "#ef3c6b" }}>
                    releveant
                  </h2>
                  <h2 style={{ fontSize: "3rem", color: "#ef3c6b" }}>fun</h2>
                </TextLoop>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
