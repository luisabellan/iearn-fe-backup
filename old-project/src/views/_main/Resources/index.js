import React, { useEffect } from "react";
import "./resources.scss";
// import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Table,
} from "reactstrap";
import {
  // List,
  // Filter,
  // ChevronLeft,
  // ChevronRight,
  ArrowDown,
  ArrowUp,
} from "react-feather";
// import { MoreVertical } from "react-feather";

//Assets
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import userImage2 from "../../../assets/img/portrait/small/avatar-s-2.png";
import userImage3 from "../../../assets/img/portrait/small/avatar-s-3.png";
import userImage4 from "../../../assets/img/portrait/small/avatar-s-4.png";
import userImage5 from "../../../assets/img/portrait/small/avatar-s-5.png";
// import placeholder from "../Content/_temp/placeholder.png";

//Utils
// import { useWindowDimensions } from "../Utils/utils";
import withTitleContext from "../../../utility/withContexts/withTitle";

const Resources = (props) => {
  // const history = useHistory();
  // const { width } = useWindowDimensions();

  const resourcesList = [
    {
      image: userImage,
      lastName: `Bernes`,
      firstName: `Elle`,
      type: `Video`,
      upVotes: 18,
      description: `Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum`,
    },
    {
      image: userImage2,
      lastName: `Ellis`,
      firstName: `Lilliana`,
      type: `Spreadsheet`,
      upVotes: 16,
      description: `Lorem Ipsum Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum`,
    },
    {
      image: userImage3,
      lastName: `Grant`,
      firstName: `Christian`,
      type: `Video`,
      upVotes: 12,
      description: `Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum`,
    },
    {
      image: userImage4,
      lastName: `Gray`,
      firstName: `Gilly`,
      type: `PDF`,
      upVotes: 10,
      description: `Lorem Ipsum Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum`,
    },
    {
      image: userImage5,
      lastName: `Howard`,
      firstName: `Justin`,
      type: `Document`,
      upVotes: 7,
      description: `Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum`,
    },
  ];

  useEffect(() => {
    props.setPageTitle("Resources");
    props.setActiveSubPage("");
  });

  return (
    <Row className="page-courses">
      <Col>
        <Card>
          <CardBody className="pb-0 courses-container">
            <Row className="pt-2 table-header sm-hidden">
              <Col xs="6 pr-0" sm="4" md="6" lg="8" xl="10" className="pl-lg-3">
                <h4>Resources</h4>
              </Col>
              {/* <Col
                xs="4 px-0"
                sm="4"
                md="3"
                lg="2"
                xl="1"
                className="text-right"
              >
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle className="button-sort button-transparent-2">
                    <List size={20} color="#333" />
                    <span className="xs-hidden"> Sort</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col xs="4 px-0" sm="4" md="3" lg="2" xl="1">
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle className="button-sort button-transparent-2">
                    <Filter size={20} color="#333" />
                    <span className="xs-hidden"> Filter</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col> */}
            </Row>
            <Row className="table-courses">
              <Col className="pt-0 pt-lg-4">
                <Table hover>
                  <thead>
                    <tr>
                      <th>
                        <Row>
                          <Col xl={{ size: 3 }} sm="6" xs="6" md="6">
                            Author
                          </Col>
                          <Col
                            xl={{ size: 2 }}
                            sm="3"
                            md="3"
                            xs="6"
                            className="text-right text-lg-left"
                          >
                            Type
                          </Col>
                          <Col
                            xl={{ size: 2 }}
                            sm="3"
                            md="3"
                            className="text-center sm-hidden"
                          >
                            Up Votes
                          </Col>
                          <Col xl={{ size: 5 }} className="pl-2 pl-xl-4">
                            Description
                          </Col>
                        </Row>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resourcesList.map((item, index) => {
                      return (
                        <tr key={item}>
                          <td>
                            <Row>
                              <Col xl={{ size: 3 }} xs="6" className="pr-0">
                                <Row>
                                  <Col
                                    xl={{ size: 3 }}
                                    sm="4"
                                    xs="4"
                                    className="text-center text-md-left px-1 px-sm-2"
                                  >
                                    <img
                                      src={item.image}
                                      alt="logged-in-user"
                                      className="rounded-circle width-50"
                                    />
                                  </Col>
                                  <Col
                                    className="pr-1 pl-2 pl-xl-0"
                                    xl={{ size: 7 }}
                                    sm={{ size: 7, offset: 1 }}
                                    xs="8"
                                  >
                                    <p className="title">
                                      {item.lastName}, {item.firstName}
                                    </p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col
                                xl={{ size: 2 }}
                                sm="3"
                                xs="6"
                                className="text-right text-md-left"
                              >
                                <p className="title">{item.type}</p>
                              </Col>
                              <Col
                                xl={{ size: 2 }}
                                sm="3"
                                xs="12"
                                className="text-right text-md-center sm-hidden"
                              >
                                <p className="title">
                                  <button className="button-transparent-2">
                                    <ArrowDown size="22" color="#c5c7cd" />
                                  </button>
                                  &ensp;{item.upVotes}&ensp;
                                  <button className="button-transparent-2">
                                    <ArrowUp size="22" color="#0c2340" />
                                  </button>
                                </p>
                              </Col>
                              <Col xl={{ size: 5 }} className="pl-2 pl-xl-4">
                                <Row>
                                  <Col xs="12">
                                    <p className="title pt-2 pt-md-0">
                                      {item.description}
                                    </p>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      );
                    })}

                    {/* <tr>
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
                    </tr> */}
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

export default withTitleContext(Resources);
