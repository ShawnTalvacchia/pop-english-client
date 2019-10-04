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
class Mentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      data: []
    };
  }
  //version 1
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(URL + `mentors`, {
      headers: {
        Authorization: `Token ${this.state.token}`,
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    this.setState({ data: json, loading: false });
  };

  render() {
    return (
      <>
        <div>
          <div className="courses-header">
            <h1>Mentors</h1>
          </div>

          {this.state.loading ? (
            <Loading />
          ) : (
            <ul>
              {this.state.data.modules.map(
                ({ id, first_name, last_name, img }) => (
                  <li className="card-list">
                    <Card
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%"
                      }}
                      className="card-margin"
                    >
                      <Image src={img} avatar />
                      <Card.Content>
                        <h2 className="title-text">
                          <Link to={`/dashboard/profiles/${id}`}>
                            {first_name} {last_name}
                          </Link>
                        </h2>
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
export default Mentors;
