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
        "Got a show you love? How about a particular focus? We can match you with a mentor to match all your goals and requirements. ",
      "1":
        "Designed for all IELTS candidates who want to achieve a score of 6.5 or higher in the Speaking and Listening modules. Learners are guided step-by-step through the different stages of the speaking and listening modules, ‘Modern Family’ to as a backdrop to connect topics that are likely to occur in the IELTS examination.",
      "2":
        "The words that we choose can make a big difference to whether other people understand us. Consider for example, communicating with a young child, or with someone who does not speak our own language very well. Under those circumstances, you need to use simple language, short sentences, and check understanding regularly.",
      "3":
        "Interpersonal skills are the skills we use every day when we communicate and interact with other people, both individually and in groups. People with strong interpersonal skills are often more successful in both their professional and personal lives.",
      "4":
        "Listening is the ability to accurately receive and interpret messages in the communication process. Listening is key to all effective communication.",
      "5":
        "Many people feel terrified when asked to talk in public, especially to bigger groups. However, these fears can be reduced by good preparation, which will also lay the groundwork for making an effective presentation. "
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
                <div className="title">
                  Speaking skills to advance your life!
                </div>
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
          <div className="container">
            <div className="row">
              <h3 className="pd-title">Make practice meaningful!</h3>
            </div>
            <div className="row">
              <div className="col-md-7 hero-col">
                <img className="hero-img2" src="../images/study.png"></img>
                <div className="info-line row">
                  <div className="before-transition-text">
                    <h3 style={{ color: "white", letterSpacing: ".3rem" }}>
                      We make practice
                    </h3>
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
                      <h2 style={{ fontSize: "3rem", color: "#ef3c6b" }}>
                        fun
                      </h2>
                    </TextLoop>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="info-text">
                  <h6 style={{ color: "#ef3c6b", fontSize: "1.3rem" }}>
                    Why study with us?
                  </h6>
                  <p style={{ marginTop: ".8rem" }}>
                    Our group courses are 6 weeks long. Each week you will
                    receive learning materials to breakdown and understand the
                    vidoe content. You will connect to a community of learners
                    with various speaking tasks. Choose one task and submit your
                    response for a mentor to review and provide feedback. All
                    done on your schedule, from your computer or phone.
                  </p>
                  <h6 style={{ color: "#ef3c6b", fontSize: "1.3rem" }}>
                    Looking for more?
                  </h6>
                  <p style={{ marginTop: ".8rem" }}>
                    Contact Now to be matched with a mentor for personalized
                    instrution. We work around your schedule, aims, and
                    interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
