import React, { useState } from "react";
import { useFetch } from "../components/hooks";

import { Grid, Image, Card } from "semantic-ui-react";
import Loading from "../components/loader";

import ModuleAccordion from "../components/ModuleAccordion";

import "../static/modules.css";

// import moment from "moment";
// import "moment/locale/ru";

const SingleModule = props => {
  const [id, setId] = useState(props.match.params.id);
  const [user, setUser] = useState(props.user);

  var moment = require("moment");
  moment().locale("en");

  // const [display, setDisplay] = useState("none")
  // if (user.id = data.module.mentor.id) {
  //   setDisplay("")
  // }

  const [data, loading] = useFetch(`/modules/${id}`);
  console.log("TESTING", data);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>{data.module.title}</h1>
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
