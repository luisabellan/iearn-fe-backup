import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Sort, Filter } from "react-feather";

const Support = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Row className="pt-2">
              <Col sm="1" className="text-center">
                <button className="button-transparent-2">
                  <h4>FAQS</h4>
                </button>
              </Col>
              <Col sm="1" className="text-center">
                <button className="button-transparent-2">
                  <h4>Support</h4>
                </button>
              </Col>
              <Col sm={{ size: 1, offset: 8 }} className="text-center">
                <UncontrolledDropdown className="pr-1">
                  <DropdownToggle caret>
                    <Sort size={20} color="#333" /> Sort
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Hello
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col sm="1" className="text-center"></Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Support;
