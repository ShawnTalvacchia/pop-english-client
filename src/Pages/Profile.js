import React, { useState } from "react";
import { useFetch } from "../components/hooks";

import { Link } from "react-router-dom";
import { Grid, Image, Card, CommentActions } from "semantic-ui-react";
import { Rating } from "semantic-ui-react";
import { Accordion, Icon } from "semantic-ui-react";

import Loading from "../components/loader";
import CommentAccordion from "../components/CommentAccordion";
import "../static/modules.css";

const URL = process.env.REACT_APP_BACKEND_URL;

var moment = require("moment");
moment().locale("en");

const Profile = props => {
  const [id, setId] = useState(props.match.params.id);
  console.log("props", props);

  const [data, loading] = useFetch( URL + `profiles/${id}`);
  console.log("TESTING", id, data);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Grid stackable columns={2}>
            <Grid.Column className="profile-about" width={10}>
              <h2>
                {data.profile.first_name} {data.profile.last_name}
              </h2>
              <p>Reviews</p>
              <p>{data.profile.about}</p>
              <h6>About</h6>
              <Rating
                icon="star"
                defaultRating={data.avg / 2}
                maxRating={5}
                disabled
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Image
                centered
                size="medium"
                className=""
                src={data.profile.img}
              />
            </Grid.Column>
          </Grid>
          <div>
            {data.profile.role === "mentor" ? (
              <ul>
                {data.modules.map(
                  ({ id, title, start_date, end_date, reviews, comments }) => (
                    <li className="card-list">
                      <Card
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%"
                        }}
                        className="card-margin"
                      >
                        <Card.Content>
                          <h2 className="title-text">
                            <Link to={`/dashboard/modules/${id}`}>{title}</Link>
                          </h2>
                          <Card.Meta style={{ marginBottom: "1rem" }}>
                            <span>
                              {moment(start_date)
                                .locale("en")
                                .format("MMM Do YY")}
                            </span>
                            -
                            <span>
                              {moment(end_date)
                                .locale("en")
                                .format("MMM Do YY")}
                            </span>
                          </Card.Meta>
                          <Grid columns="equal">
                            <Grid.Row>
                              <Grid.Column>
                                <h6>Interaction:</h6>
                                <Rating
                                  icon="star"
                                  defaultRating={reviews.interaction / 2}
                                  maxRating={5}
                                  disabled
                                />
                              </Grid.Column>
                              <Grid.Column>
                                <h6>Knowledge:</h6>
                                <Rating
                                  icon="star"
                                  defaultRating={reviews.knowledge / 2}
                                  maxRating={5}
                                  disabled
                                />
                              </Grid.Column>
                              <Grid.Column>
                                <h6>Materials:</h6>
                                <Rating
                                  icon="star"
                                  defaultRating={reviews.interaction / 2}
                                  maxRating={5}
                                  disabled
                                />
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <CommentAccordion reviews={comments} />
                            </Grid.Row>
                          </Grid>
                        </Card.Content>
                      </Card>
                    </li>
                  )
                )}
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
