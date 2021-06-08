import React, { useState, useEffect, Fragment } from "react";
import "../deals.scss";
import { useHistory } from "react-router-dom";
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
  FormGroup,
  Input,
  CustomInput,
} from "reactstrap";
import { List, Filter, ChevronLeft, ChevronRight, Search } from "react-feather";
import { Link } from "react-router-dom";

//Assets
// import placeholder from "../_temp/pdf_icon.png";

//API
import api from "../../../../api/api";

//Utils
import { useWindowDimensions, formatNumberWithCommas } from "../../Utils/utils";
import withTitleContext from "../../../../utility/withContexts/withTitle";
import withUserContext from "../../../../utility/withContexts/withUser";

const Deals = (props) => {
  const history = useHistory();
  const { width } = useWindowDimensions();
  const [deals, setDeals] = useState([]);

  //Get Deals
  useEffect(() => {
    api
      .get(`/deals?user=${props.user.id}`)
      .then((res) => {
        setDeals(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    props.setPageTitle("My Deals");
    props.setActiveSubPage("");
  });

  const handleClick = () => {
    if (width < 1200) {
      history.push(`/decision-tree/asdasd`);
    }
  };

  const mapCollabs = (arr) => {
    return arr.map((col, index) => {
      return index === 0 ? (
        <Fragment key={index}>{col.name}</Fragment>
      ) : (
        <Fragment key={index}>
          ,<br />
          {col.name}
        </Fragment>
      );
    });
  };

  const mapDeals = () => {
    if (deals.length) {
      return deals.map((deal, index) => {
        return (
          <tr key={index}>
            <td>
              <Row>
                <Col xl={{ size: 2 }} className="pl-2 pl-xl-4">
                  <p className="mb-0">{mapCollabs(deal.collaborators)}</p>
                </Col>
                <Col xl={{ size: 1 }}>{formatNumberWithCommas(deal.price)}</Col>
                <Col xl={{ size: 2 }}>
                  {deal.address}, {deal.city}, {deal.state} {deal.zip}
                </Col>
                <Col xl={{ size: 2 }} className="xs-hidden tab-below-hidden">
                  {deal.notes}
                </Col>
                <Col xl={{ size: 2 }} className="pr-0 text-center">
                  <Link to="/">Resources</Link>
                </Col>
                <Col xl={{ size: 2 }} className="xs-hidden tab-below-hidden">
                  <Link to="/">Images</Link>
                </Col>
                <Col
                  xl={{ size: 1 }}
                  className="xs-hidden tab-below-hidden text-center"
                >
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox"
                    label=""
                    defaultChecked
                  />
                </Col>
              </Row>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardBody className="my-3">
              <h3 className="text-center">
                Start with the Decision Tree Tool to add a new deal.
              </h3>
              <Link to="/people/deals/decision-tree">
                <h1 className="text-center">Strategy Tool</h1>
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="page-decision-tree">
        <Col>
          <Card>
            <CardBody className="pb-0 decision-tree-container">
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
              </Row> */}
              <Row className="table-decision-tree">
                <Col className="px-0 pt-0">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>
                          <Row>
                            <Col xl={{ size: 2 }} className="pl-2 pl-xl-4">
                              Collaborators
                            </Col>
                            <Col xl={{ size: 1 }}>Price</Col>
                            <Col xl={{ size: 2 }}>Address</Col>
                            <Col
                              xl={{ size: 2 }}
                              className="xs-hidden tab-below-hidden"
                            >
                              Notes
                            </Col>
                            <Col xl={{ size: 2 }} className="pr-0 text-center">
                              &nbsp;
                            </Col>
                            <Col
                              xl={{ size: 2 }}
                              className="xs-hidden tab-below-hidden"
                            >
                              &nbsp;
                            </Col>
                            <Col
                              xl={{ size: 1 }}
                              className="xs-hidden tab-below-hidden text-center"
                            >
                              Active
                            </Col>
                          </Row>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mapDeals()}
                      <tr></tr>
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

export default withTitleContext(withUserContext(Deals));
