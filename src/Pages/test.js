import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Loading from "../components/loader";

import { useFetch } from "../components/hooks";
import { Card, Icon, Image } from "semantic-ui-react";
import { Button } from "react-bootstrap";

import "../static/modules.css";
import { DateTimeInput } from "semantic-ui-calendar-react";
var moment = require("moment");
moment().locale("en");

const Modules = props => {
  const [data, loading] = useFetch("/modules");
  const [display, setDisplay] = useState("none");
  const [isload, setIsload] = useState(false);
  const [role, setRole] = useState(props.user.role);

  useEffect(() => {
    console.log(new Date());
    test();
  }, []);

  const test = async () => {
    const a = props.user.role;

    if (a == "admin" || a == "mentor") {
      console.log("fired");
      setDisplay("");
      setIsload(true);
    }
  };

  return (
    <>
      {" "}
      {isload && (
        <div>
          <div className="courses-header">
            <h1>Upcoming Courses</h1>
            <div style={{ display }}>
              <Link smooth to="/dashboard/create">
                <Button className="register-button" size="lg">
                  CREATE
                </Button>
              </Link>
            </div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <ul>
              {data.modules.map(
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
      )}
    </>
  );
};

export default Modules;
