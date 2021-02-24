import React, { useEffect } from "react";
import "./courses.scss";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  Table,
} from "reactstrap";
import {
  ChevronLeft,
  ChevronRight,
} from "react-feather";
import { MoreVertical } from "react-feather";

//Assets
import placeholder from "../_temp/placeholder.png";

//Utils
import { useWindowDimensions } from "../../Utils/utils";
import withTitleContext from "../../../../layouts/utils/withContexts/withTitle";

const CourseOverview = (props) => { 
  const history = useHistory();
  const { width } = useWindowDimensions();

  useEffect(() => {
    props.setPageTitle("Course Overview");
  }, []);

  const handleClick = () => {
    if (width < 1200) {
      history.push(`/courses/asdasd`);
    }
  };

  return (
    <Row className="page-courses">
      <Col>
        <Card>
          <CardBody className="pb-0 courses-container">
            <Row className="pt-2 table-header">
              <Col xs="4 pr-0" sm="4" md="8" className="pl-lg-3">
                <h4>Week 0 - Course Foundations</h4>
              </Col>
              <Col xs="4 px-0" sm="4" md="4">
                <Row>
                  <Col xs="6" className="text-right progress-label"><h4>Progress:</h4></Col>
                  <Col xs="6" className="text-center progress-counter"><h1>1 / 2</h1></Col>
                </Row>
              </Col>
            </Row>
            <Row className="table-courses">
              <Col className="px-0 pt-0">
                <Table hover>
                  <thead>
                    <tr>
                      <th>
                        <Row>
                          <Col xl={{ size: 3 }} className="pl-2 pl-xl-4">
                            Course Overview
                          </Col>
                          <Col
                            xl={{ size: 2 }}
                            className="xs-hidden tab-below-hidden text-center"
                          >
                            Completed?
                          </Col>
                          <Col xl={{ size: 6 }}>Upvotes</Col>
                          <Col
                            xl={{ size: 1 }}
                            className="xs-hidden tab-below-hidden"
                          >
                            &nbsp;
                          </Col>
                        </Row>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      <td>
                        <Row>
                          <Col xl={{ size: 3 }} className="pl-2 pl-xl-4">
                            <Row>
                              <Col
                                sm="5"
                                className="text-center tab-below-hidden"
                              >
                                <img
                                  src={placeholder}
                                  alt="logged-in-user"
                                  className="width-100"
                                />
                              </Col>
                              <Col xs="12" xl="7" className="pr-1 pl-2 pl-xl-0">
                                <p className="title">Lesson 1</p>
                                <p className="history">Updated 1 day ago</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xl={{ size: 2 }}
                            className="xs-hidden tab-below-hidden text-center"
                          >
                            <p className="title">Yes</p>
                            <p className="history">on 24.05.2019 </p>
                          </Col>
                          <Col xl={{ size: 2 }}>
                            <p className="title">
                              <button className="button-transparent-2 font-weight-bold">
                                Lesson Resources
                              </button>
                            </p>
                          </Col>
                          <Col xl={{ size: 2 }}>
                            <p className="title">
                              <button className="button-transparent-2 font-weight-bold">
                                Public Notes
                              </button>
                            </p>
                          </Col>
                          <Col xl={{ size: 2 }}>
                            <p className="title">
                              <button className="button-transparent-2 font-weight-bold">
                                Personal Notes
                              </button>
                            </p>
                          </Col>

                          <Col
                            xl={{ size: 1 }}
                            className="xs-hidden tab-below-hidden"
                          >
                            <button
                              className="button-transparent-2"
                              onClick={() => {
                                history.push(`/content/courses/asdasd/asdasd`);
                              }}
                            >
                              <MoreVertical size={20} color="#000" />
                            </button>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                    <tr
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      <td>
                        <Row>
                          <Col xl={{ size: 3 }} className="pl-2 pl-xl-4">
                            <Row>
                              <Col
                                sm="5"
                                className="text-center tab-below-hidden"
                              >
                                <img
                                  src={placeholder}
                                  alt="logged-in-user"
                                  className="width-100"
                                />
                              </Col>
                              <Col xs="12" xl="7" className="pr-1 pl-2 pl-xl-0">
                                <p className="title">Lesson 2</p>
                                <p className="history">Updated 1 day ago</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xl={{ size: 2 }}
                            className="xs-hidden tab-below-hidden text-center"
                          >
                            <p className="title">No</p>
                            <p className="history">on 24.05.2019 </p>
                          </Col>
                          <Col xl={{ size: 2 }}>
                            <p className="title">
                              <button className="button-transparent-2 font-weight-bold">
                                Lesson Resources
                              </button>
                            </p>
                          </Col>
                          <Col xl={{ size: 2 }}>
                            <p className="title">
                              <button className="button-transparent-2 font-weight-bold">
                                Public Notes
                              </button>
                            </p>
                          </Col>
                          <Col xl={{ size: 2 }}>
                            <p className="title">
                              <button className="button-transparent-2 font-weight-bold">
                                Personal Notes
                              </button>
                            </p>
                          </Col>

                          <Col
                            xl={{ size: 1 }}
                            className="xs-hidden tab-below-hidden"
                          >
                            <button
                              className="button-transparent-2"
                              onClick={() => {
                                history.push(`/content/courses/asdasd/asdasd`);
                              }}
                            >
                              <MoreVertical size={20} color="#000" />
                            </button>
                          </Col>
                        </Row>
                      </td>
                    </tr>

                    <tr>
                      <td className="pb-0">
                        <div className="row justify-content-end pagination-options">
                          <div className="col-6 col-md-3 col-lg-4 col-xl-3 text-right">
                            Rows per page:{" "}
                            <select name="rows" className="select-rows">
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </div>
                          <div className="col-6 col-md-4 col-lg-4 col-xl-3 pl-0 pl-md-2">
                            1-8 of 1240&emsp;
                            <button className="button-transparent-2 set-transparent">
                              <ChevronLeft size="22" color="#000" />
                            </button>
                            &emsp;
                            <button className="button-transparent-2 set-transparent">
                              <ChevronRight size="22" color="#000" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default withTitleContext(CourseOverview);
