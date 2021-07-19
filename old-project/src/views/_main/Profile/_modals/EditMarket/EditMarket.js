import React, { useState, useEffect } from "react";
import "./EditMarket.scss";
import "react-image-crop/dist/ReactCrop.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Alert,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";

//Context
import withUser from "../../../../../utility/withContexts/withUser";

//API
import api from "../../../../../api/api";

//States
import states from "../../../SignUp/json/states.json";
//Source: https://gist.github.com/mshafrir/2646763

const EditMarket = ({ isOpen, toggle, profile }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(false);
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    setMarkets(profile.markets);
  }, []);

  const updateMarkets = (name) => {
    let arr = [...markets];

    if (arr.includes(name)) {
      let i = arr.indexOf(name);
      arr.splice(i, 1);
    } else {
      arr.push(name);
    }

    setMarkets(arr);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    api
      .patch(`/users/${profile.id}`, { markets })
      .then((res) => {
        setIsLoading(false);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const mapStates = () => {
    return (
      <Row className="markets-container">
        <Col>
          {states.map((state, index) => {
            return index <= 29 ? (
              <label key={index}>
                <input
                  type="checkbox"
                  name={state.name}
                  onChange={() => updateMarkets(state.abbreviation)}
                  checked={markets.includes(state.abbreviation)}
                />
                &ensp;
                {state.name}
              </label>
            ) : null;
          })}
        </Col>
        <Col>
          {states.map((state, index) => {
            return index >= 30 ? (
              <label key={index}>
                <input
                  type="checkbox"
                  name={state.name}
                  onChange={() => updateMarkets(state.abbreviation)}
                  checked={markets.includes(state.abbreviation)}
                />
                &ensp;
                {state.name}
              </label>
            ) : null;
          })}
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Modal
        {...{ isOpen, toggle }}
        size="lg"
        centered={true}
        className="edit-market"
      >
        <ModalHeader toggle={() => toggle()}>Update Market</ModalHeader>
        <ModalBody>
          {error && (
            <Alert color="warning" fade={false}>
              There was an error while saving. Please retry after a while.
            </Alert>
          )}
          <Label className="w-100">Select the markets that you work in.</Label>
          {mapStates()}
          <div className="row mt-3">
            <div className="col-6">
              <Button
                className="mt-2 mb-2"
                block
                size="md"
                color="secondary"
                onClick={() => toggle()}
                disabled={isLoading}
              >
                BACK
              </Button>
            </div>
            <div className="col-6">
              <Button
                className="mt-2 mb-2"
                block
                size="md"
                color="primary"
                type="submit"
                onClick={onSubmit}
                disabled={isLoading}
              >
                SAVE
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default withUser(EditMarket);
