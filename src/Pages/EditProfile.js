import React from "react";
import { Form, Input, Button, Label, TextArea } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import moment from "moment";
import "moment/locale/ru";

const URL = process.env.REACT_APP_BACKEND_URL;
class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: "",
      first_name: "",
      last_name: "",
      img: "",
      about: "",
      email: "",
      token: sessionStorage.getItem("token")
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  async componentDidMount() {
    this.fetchProfile();
    console.log("check profile", this.state.profile);
  }

  fetchProfile = async () => {
    try {
      const response = await fetch(URL + "profile", {
        headers: new Headers({
          Authorization: `Token ${this.state.token}`,
          "Content-Type": "application/json"
        })
      });
      const data = await response.json();
      console.log("check this data", data);
      this.setState({ profile: data, loaded: true });
    } catch (error) {
      this.setState({ loaded: true });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const img = this.state.img;
    const about = this.state.about;
    const email = this.state.email;

    const profile = { first_name, last_name, img, about, email };
    console.log("profile", profile);
    const response = await fetch(URL + "edit_profile", {
      method: "POST",
      headers: {
        Authorization: `Token ${this.state.user.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile)
    });
    if (response.ok) {
      window.location.replace("/dashboard/profiles");
    }
  };
  render() {
    return (
      <div className="form-container">
        <h1>Edit Profile</h1>
        <Form>
          <Form.Field widths="equal">
            {/* first_name */}
            {/* last_name */}
            {/* about */}
            {/* img */}

            <Input
              name="first_name"
              placeholder="First Name"
              value={this.state.first_name}
              required={true}
              onChange={this.handleChange}
              // error={titleError}
            />
            <Input
              name="first_name"
              placeholder="Last Name"
              value={this.state.last_name}
              required={true}
              onChange={this.handleChange}
              // error={titleError}
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              fluid
              label="About"
              name="about"
              placeholder="About"
              style={{ minHeight: 200 }}
              value={this.state.about}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              name="img"
              label="IMG Link:"
              placeholder="https://imageaddress.com"
              value={this.state.img}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              disabled={!this.state.first_name || !this.state.last_name}
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

export default EditProfile;
