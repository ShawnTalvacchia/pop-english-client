import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Loading from "../components/loader";

import { useFetch } from "../components/hooks";
import { Card, Icon, Image } from "semantic-ui-react";
import { Button } from "react-bootstrap";

import "../static/modules.css";
var moment = require("moment");
moment().locale("en");

const URL = process.env.REACT_APP_BACKEND_URL;
class Modules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      data: [],
      loading: true,
      display: "none"
    };
  }
  componentWillMount() {
    this.test();
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(URL + `modules`, {
      headers: {
        Authorization: `Token ${this.state.token}`,
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    this.setState({ data: json, loading: false });
  };

  test = async () => {
    const a = this.props.user.role;
    if (a === "admin") {
      console.log("fired");
      this.setState({ display: "" });
    }
  };

  render() {
    console.log(this.state.display);
    console.log(this.props.user.role);
    return (
      <>
        <div>
          <div className="courses-header">
            <h1>Upcoming Courses</h1>
            <div style={{ display: `${this.state.display}` }}>
              <Link smooth to="/dashboard/create">
                <Button className="sign-up-button" size="lg">
                  CREATE
                </Button>
              </Link>
            </div>
          </div>

          {this.state.loading ? (
            <Loading />
          ) : (
            <ul>
              {this.state.data.modules.map(
                ({
                  id,
                  title,
                  description,
                  start_date,
                  end_date,
                  img,
                  mentor
                }) => (
                  <li className="card-list">
                    <Card
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%"
                      }}
                      className="card-margin"
                    >
                      <Image src={img} size="small" className="imgDisplay" />
                      <Card.Content>
                        <Card.Content>
                          <h2 className="title-text">
                            <Link to={`/dashboard/modules/${id}`}>{title}</Link>
                          </h2>
                          <Card.Meta>
                            <span>Starting:</span>
                            <span className="date">
                              {moment(start_date)
                                .locale("en")
                                .format("MMMM Do YYYY")}
                            </span>
                          </Card.Meta>

                          <Card.Description
                            style={{
                              marginTop: "1rem"
                            }}
                          >
                            {description}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content
                          style={{
                            marginTop: "1rem"
                          }}
                          extra
                        >
                          <a>
                            <Icon name="user" />
                            {mentor}
                          </a>
                        </Card.Content>
                      </Card.Content>
                    </Card>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </>
    );
  }
}
export default Modules;
