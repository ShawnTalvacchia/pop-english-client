import React from "react";
import { Form, Input, Button, Label, TextArea } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import moment from "moment";
import "moment/locale/ru";

class NewModuleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      title: "",
      description: "",
      syllabus: "",
      startDate: "",
      endDate: "",
      price: "",
      img_url: "",
      moment: moment
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const syllabus = this.state.syllabus;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    const price = this.state.price;
    const img_url = this.state.img_url;

    const module = {
      title,
      description,
      startDate,
      endDate,
      price,
      img_url,
      syllabus
    };
    console.log("module", module);
    const response = await fetch("/create_module", {
      method: "POST",
      headers: {
        Authorization: `Token ${this.state.user.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(module)
    });

    if (response.ok) {
      window.location.replace("/dashboard/modules");
    }
  };
  render() {
    return (
      <div className="form-container">
        <h1>New Module</h1>
        <Form>
          <Form.Field>
            <Input
              fluid
              label="Title"
              name="title"
              placeholder="Module Title"
              value={this.state.title}
              required={true}
              onChange={this.handleChange}
              // error={titleError}
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              fluid
              label="Description"
              name="description"
              placeholder="Module Description"
              style={{ minHeight: 200 }}
              value={this.state.description}
              required={true}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Group widths="equal">
            <DateInput
              fluid
              label="Starts"
              name="startDate"
              placeholder="Start Date"
              required={true}
              minDate={this.state.moment}
              value={this.state.startDate}
              iconPosition="left"
              onChange={this.handleChange}
              autocomplete="off"
            />
            <DateInput
              fluid
              label="Ends"
              name="endDate"
              placeholder="End Date"
              required={true}
              minDate={this.state.moment}
              value={this.state.endDate}
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
          <Form.Field>
            <Button
              fluid
              size="big"
              className="submit-btn"
              disabled={
                !this.state.title ||
                !this.state.description ||
                !this.state.startDate ||
                !this.state.endDate ||
                !this.state.price
              }
              onClick={this.handleSubmit}
            >
              SUBMIT
            </Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default NewModuleForm;
