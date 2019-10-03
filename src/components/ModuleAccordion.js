import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

import EditModule from "./EditModule";

export default class ModuleAccordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      display: "none"
    };
  }

  componentDidMount() {
    if (this.props.user.user_id === this.props.module.mentor_id) {
      this.setState({ display: "" });
    }
    if (this.props.user.role === "admin") {
      this.setState({ display: "" });
    }
    console.log("what's the display", this.state.display);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Syllabus
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>{this.props.syllabus}</p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Reviews
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Fill this in later if you can get to it. Or delete it!!</p>
        </Accordion.Content>
        <div style={{ display: `${this.state.display}` }}>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Edit
          </Accordion.Title>
          <Accordion.Content
            style={{ width: "85vw" }}
            active={activeIndex === 2}
          >
            <EditModule user={this.props.user} module={this.props.module} />
          </Accordion.Content>
        </div>
      </Accordion>
    );
  }
}
