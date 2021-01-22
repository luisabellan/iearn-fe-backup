import React from "react";
import "./support.scss";
import {
  Row,
  Col,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap";
import { List, Filter, ChevronLeft, ChevronRight } from "react-feather";
import { MoreVertical } from "react-feather";

//Assets
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import userImage2 from "../../../assets/img/portrait/small/avatar-s-2.png";
import userImage3 from "../../../assets/img/portrait/small/avatar-s-3.png";

const Support = () => {
  return (
    <Row className="page-support">
      <Col>
        <Card>
          <CardBody className="pb-0">
            <Row className="pt-2 table-header">
              <Col sm="1" className="text-center">
                <button className="button-transparent-2">
                  <h4>FAQS</h4>
                </button>
              </Col>
              <Col sm="1" className="text-center">
                <button className="button-transparent-2 active">
                  <h4>Support</h4>
                </button>
              </Col>
              <Col sm={{ size: 1, offset: 8 }} className="text-center">
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle className="button-sort button-transparent-2">
                    <List size={20} color="#333" /> Sort
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col sm="1 px-0">
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle className="button-sort button-transparent-2">
                    <Filter size={20} color="#333" /> Filter
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Hello</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
            <Row className="table-support">
              <Col className="px-0 pt-4">
                <Table hover>
                  <thead>
                    <tr>
                      <th className="pl-3">Ticket Details</th>
                      <th>Customer Name</th>
                      <th>Date</th>
                      <th>Priority</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Row>
                          <Col sm="2" className="text-center">
                            <img
                              src={userImage}
                              alt="logged-in-user"
                              className="rounded-circle width-50"
                            />
                          </Col>
                          <Col sm="10" className="pr-1 pl-0">
                            <p className="title">Contact Email not Linked</p>
                            <p className="history">Updated 1 day ago</p>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <p className="title">Tom Cruise</p>
                        <p className="history">on 24.05.2019 </p>
                      </td>
                      <td>
                        <p className="title">May 26, 2019</p>
                        <p className="history">6:30 PM</p>
                      </td>
                      <td>
                        <span className="prio-3">HIGH</span>
                      </td>
                      <td>
                        <UncontrolledDropdown className="pr-1">
                          <DropdownToggle nav className="set-transparent">
                            <MoreVertical size={20} color="#000" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>Hello</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm="2" className="text-center">
                            <img
                              src={userImage2}
                              alt="logged-in-user"
                              className="rounded-circle width-50"
                            />
                          </Col>
                          <Col sm="10" className="pr-1 pl-0">
                            <p className="title">
                              Adding Images to Featured Posts
                            </p>
                            <p className="history">Updated 1 day ago</p>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <p className="title">Matt Damon</p>
                        <p className="history">on 24.05.2019 </p>
                      </td>
                      <td>
                        <p className="title">May 26, 2019</p>
                        <p className="history">8:00 AM</p>
                      </td>
                      <td>
                        <span className="prio-1">LOW</span>
                      </td>
                      <td>
                        <UncontrolledDropdown className="pr-1">
                          <DropdownToggle nav className="set-transparent">
                            <MoreVertical size={20} color="#000" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>Hello</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Row>
                          <Col sm="2" className="text-center">
                            <img
                              src={userImage3}
                              alt="logged-in-user"
                              className="rounded-circle width-50"
                            />
                          </Col>
                          <Col sm="10" className="pr-1 pl-0">
                            <p className="title">
                              When will I be charged this month?
                            </p>
                            <p className="history">Updated 1 day ago</p>
                          </Col>
                        </Row>
                      </td>
                      <td>
                        <p className="title">Robert Downey</p>
                        <p className="history">on 24.05.2019 </p>
                      </td>
                      <td>
                        <p className="title">May 26, 2019</p>
                        <p className="history">7:30 PM</p>
                      </td>
                      <td>
                        <span className="prio-2">NORMAL</span>
                      </td>
                      <td>
                        <UncontrolledDropdown className="pr-1">
                          <DropdownToggle nav className="set-transparent">
                            <MoreVertical size={20} color="#000" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>Hello</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="5" className="pb-0">
                        <div className="row justify-content-end pagination-options">
                          <div className="col-2">
                            Rows per page:{" "}
                            <select name="rows" className="select-rows">
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </div>
                          <div className="col-2">
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

export default Support;
