import React, { Component } from "react";
import { Accordion, Icon, Image } from "semantic-ui-react";

export default class AccordionExampleStandard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, comments: this.props.reviews };
  }

  handleClick = (e, titleProps) => {
    console.log(titleProps);
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    console.log(activeIndex);

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Reviews
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          {this.state.comments.map(({ comments, name, img }, idx) => (
            <Accordion>
              <Accordion.Title
                active={activeIndex === idx}
                index={idx}
                onClick={this.handleClick}
              >
                <Image src={img} avatar />
                {name}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === idx}>
                {comments}
              </Accordion.Content>
            </Accordion>
          ))}
        </Accordion.Content>
      </Accordion>
    );
  }
}
