import React from "react";
import { Form, Input, Button, Label, TextArea } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import moment from "moment";
import "moment/locale/ru";

const URL = process.env.REACT_APP_BACKEND_URL;
class EditModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: sessionStorage.getItem("token"),
      id: this.props.module.id,
      title: this.props.module.title,
      description: this.props.module.description,
      syllabus: this.props.module.syllabus,
      start_date: this.props.module.start_date,
      end_date: this.props.module.end_date,
      price: this.props.module.price,
      img_url: this.props.module.img
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  handleDelete = async e => {
    const response = await fetch(URL + `modules/${this.state.id}/delete`, {
      method: "POST",
      headers: {
        Authorization: `Token ${this.state.token}`,
        "Content-Type": "application/json"
      }
      // body: JSON.stringify(module)
    });

    if (response.ok) {
      window.location.replace(`/dashboard/modules/`);
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const syllabus = this.state.syllabus;
    const start_date = this.state.start_date;
    const end_date = this.state.end_date;
    const price = this.state.price;
    const img_url = this.state.img_url;

    const module = {
      title,
      description,
      start_date,
      end_date,
      price,
      img_url,
      syllabus
    };
    const response = await fetch(URL + `modules/${this.state.id}/edit`, {
      method: "POST",
      headers: {
        Authorization: `Token ${this.state.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(module)
    });

    if (response.ok) {
      window.location.replace(`/dashboard/modules/${this.state.id}`);
    }
  };
  render() {
    console.log("check dem props", this.props);
    console.log("check the state", this.state);
    return (
      <Form inverted className="editModule">
        <Form.Field>
          <Input
            fluid
            label="Title"
            name="title"
            placeholder="Module Title"
            value={this.state.title}
            required={true}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <TextArea
            name="description"
            placeholder="Module Description"
            style={{ minHeight: 100 }}
            value={this.state.description}
            required={true}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <DateInput
            name="startDate"
            placeholder={`Start Date: ${this.state.start_date}`}
            required={true}
            minDate={moment}
            value={this.state.start_date}
            iconPosition="left"
            onChange={this.handleChange}
            autocomplete="off"
          />
          <DateInput
            name="endDate"
            placeholder={`End Date: ${this.state.end_date}`}
            required={true}
            value={this.state.end_date}
            iconPosition="left"
            onChange={this.handleChange}
            autocomplete="off"
          />
        </Form.Group>
        <Form.Field>
          <TextArea
            fluid
            label="Syllabus"
            name="syllabus"
            placeholder="Module Syllabus"
            style={{ minHeight: 200 }}
            value={this.state.syllabus}
            required={true}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Input
            name="img_url"
            label="Link:"
            placeholder="https://imageaddress.com"
            value={this.state.img_url}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Input
            name="price"
            labelPosition="right"
            type="text"
            placeholder="Amount"
            required={true}
            value={this.state.price}
            onChange={this.handleChange}
          >
            <Label basic>₫</Label>
            <input />
            <Label>VND</Label>
          </Input>
        </Form.Field>
        <Form.Field widths="equal" className="submit-delete-btns">
          <Button
            fluid
            size="medium"
            className="submit-btn"
            onClick={this.handleSubmit}
          >
            SUBMIT
          </Button>
          <Button
            fluid
            size="medium"
            className="delete-btn"
            onClick={this.handleDelete}
          >
            DELETE
          </Button>
        </Form.Field>
      </Form>
    );
  }
}

export default EditModule;
