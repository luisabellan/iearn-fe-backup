import React, { useEffect, useState } from "react";
import "./directory.scss";
// import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  Table,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // FormGroup,
  // Input,
} from "reactstrap";
// import { List, Filter, ChevronLeft, ChevronRight, Search } from "react-feather";
import Spinner from "../../../components/spinner/spinner";
import { Link } from "react-router-dom";

//Assets
// import placeholder from "../_temp/pdf_icon.png";

//API
import api from "../../../api/api";

//Context
import withTitleContext from "../../../utility/withContexts/withTitle";

const Deals = (props) => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    props.setPageTitle("Directory");
    props.setActiveSubPage("");
  });

  useEffect(() => {
    populatePeople();
  }, []);

  const handleClick = () => {};

  const populatePeople = () => {
    setIsLoading(true);

    api
      .get(`/users`)
      .then(({ data }) => {
        setIsLoading(false);
        setPeople(data);
      })
      .catch((err) => console.log(err));
  };

  const mapUsers = () => {
    let arr = [...people];

    if (isLoading)
      return (
        <tr>
          <td className="py-5">
            <Spinner />
          </td>
        </tr>
      );

    const mapSkills = (skills) => {
      let length = skills.length - 1;

      return skills.map((skill, index) => {
        if (index < length) {
          return `${skill}, `;
        } else {
          return `${skill}`;
        }
      });
    };

    return arr.map((person, index) => {
      return (
        <tr
          onClick={() => {
            handleClick();
          }}
          key={index}
        >
          <td>
            <Row>
              <Col xl={{ size: 3 }}
                md="5"
                sm="5"
                xs="5"
                className="people-wrapper"
              >
                {person.userImg ? (
                  <img
                    src={
                      `https://mentor-beast-nuclius.s3.us-east-2.amazonaws.com/` +
                      person.userImg
                    }
                    alt="logged-in-user"
                    className="rounded-circle width-35 height-35"
                  />
                ) : (
                  <div className="width-35">
                    <div className="circle">
                      <div className="circle__inner">
                        <div className="circle__wrapper">
                          <div className="circle__content">
                            {person.firstName[0]} {person.lastName[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="person-name">
                  <p className="ml-2 text-capitalize">
                    {person.lastName}, {person.firstName}
                  </p>
                </div>
              </Col>
              <Col xl={{ size: 3 }} md="4" sm="4" xs="4">
                <span className={person.location ? "" : "opacity-50"}>
                  {person.location ? person.location : "Unset"}
                </span>
              </Col>
              <Col xl={{ size: 4 }} className="tab-below-hidden">
                {mapSkills(person.skills)}
              </Col>
              <Col xl={{ size: 2 }} md="3" sm="3" xs="3">
                <Link
                  to={{
                    pathname: "/people/user",
                    state: {
                      ...person,
                    },
                  }}
                  className="text-light-blue font-weight-500"
                >
                  View Profile
                </Link>
              </Col>
            </Row>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <Row className="page-directory">
        <Col>
          <Card>
            <CardBody className="pb-0 directory-container">
              {/* <Row className="pt-2 table-header">
                <Col
                  xs="4 pr-0"
                  sm="4"
                  md="6"
                  lg="8"
                  xl="10"
                  className="pl-lg-3"
                >
                  <form>
                    <FormGroup>
                      <div className="position-relative has-icon-left">
                        <Input
                          type="text"
                          id="iconLeft"
                          name="iconLeft"
                          className="round"
                        />
                        <div className="form-control-position">
                          <Search size={16} className="info" />
                        </div>
                      </div>
                    </FormGroup>
                  </form>
                </Col>
                <Col
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
                </Col>
              </Row>
               */}
              <Row className="table-directory">
                <Col className="px-0 pt-0">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>
                          <Row>
                            <Col xl={{ size: 3 }} md="5" sm="5" xs="5">
                              People
                            </Col>
                            <Col xl={{ size: 3 }} md="4" sm="4" xs="4">
                              Location
                            </Col>
                            <Col
                              xl={{ size: 4 }}
                              className="tab-below-hidden"
                            >
                              Skills
                            </Col>
                            <Col xl={{ size: 2 }} md="3" sm="3" xs="3"></Col>
                          </Row>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mapUsers()}
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
    </>
  );
};

export default withTitleContext(Deals);
