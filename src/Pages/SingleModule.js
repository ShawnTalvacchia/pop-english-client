import React, { useState, useEffect } from "react";
import { useFetch } from "../components/hooks";

import { Grid, Image, Card } from "semantic-ui-react";
import { Button } from "react-bootstrap";

import Loading from "../components/loader";

import ModuleAccordion from "../components/ModuleAccordion";

import "../static/modules.css";
const URL = process.env.REACT_APP_BACKEND_URL;
// import moment from "moment";
// import "moment/locale/ru";
var moment = require("moment");
moment().locale("en");

const SingleModule = props => {
  const [id, setId] = useState(props.match.params.id);
  const [user, setUser] = useState(props.user);
  const [display, setDisplay] = useState("sign-up-button");
  const [text, setText] = useState("ENROLL");

  const [data, loading] = useFetch(URL + `modules/${id}`);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (data && data.module) {
      setStatus(data.module.enrolled);
      alert("enrolled is: " + data.module.enrolled);
    }
  }, [loading]);

  const renderStatusButton = () => {
    if (status === null) {
      return <span></span>;
    }
    let text = "Enroll";
    if (status === true) {
      text = "Unenroll";
    }
    return (
      <Button onClick={handleEnroll} className={display} size="lg">
        {text}
      </Button>
    );
  };

  const handleEnroll = async e => {
    e.preventDefault();

    const resp = await fetch(`${URL}enroll/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Token ${props.token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const rep = await resp.json();
    if (rep.message == "Enrolled") setStatus(true);
    else setStatus(false);
  };

  console.log("TESTING", data);
  console.log("TEXT", text);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>{data.module.title}</h1>
            {renderStatusButton()}
          </div>
          <Grid stackable columns={2}>
            <Grid.Column width={3}>
              <Image className="single-module-img" src={data.module.img} />
            </Grid.Column>
            <Grid.Column width={9}>
              <Card.Meta>
                <span>Starting: </span>
                <span className="date">
                  {moment(data.module.start_date)
                    .locale("en")
                    .format("MMMM Do YYYY")}
                </span>
              </Card.Meta>
              <Card.Meta>
                <span>Ending: </span>
                <span className="date">
                  {moment(data.module.end_date)
                    .locale("en")
                    .format("MMMM Do YYYY")}
                </span>
              </Card.Meta>

              <Card.Description
                style={{
                  marginTop: "1rem"
                }}
              >
                {data.module.description}
              </Card.Description>
            </Grid.Column>
          </Grid>
          <Grid>
            <ModuleAccordion
              syllabus={data.module.syllabus}
              user={user}
              module={data.module}
            />
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SingleModule;
