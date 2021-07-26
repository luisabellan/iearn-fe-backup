import React, { useEffect, Fragment } from "react";
import "./courses.scss";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Input } from "reactstrap";

//Utils
import withTitleContext from "../../../../utility/withContexts/withTitle";

//Assets
import video from "../_temp/video.png";

const CourseDetails = (props) => {
  useEffect(() => {
    props.setPageTitle("Week 0 - Course Fundamentals");
  }, []);

  const mapDocuments = () => {
    const docs = [
      "Common Questions",
      "Chart Infographic",
      "Key Points",
      "Suplemental Resources",
      "Transcript",
    ];

    return docs.map((doc, index) => {
      return (
        <Fragment key={index}>
          <div className="col-10">
            <Link to="/" className="my-3 button-transparent-2">
              {doc}
            </Link>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </Fragment>
      );
    });
  };

  const mapVideoFaqs = () => {
    const faqs = [
      {
        title: "Waiting on Feature Request",
        time: "42:38",
      },
      {
        title: "Awaiting Customer Response",
        time: "10:05",
      },
      {
        title: "Awaiting Developer Fix",
        time: "9:14",
      },
      {
        title: "Pending",
        time: "2:07",
      },
    ];

    return faqs.map((faq, index) => {
      return <Fragment key={index}>
        <Row>
          <Col xs="10"><p><button className="button-transparent-2">{faq.title}</button></p></Col>
          <Col xs="2"><p className="history text-right">{faq.time}</p></Col>
        </Row>
        <hr/>
      </Fragment>
    })
  };

  return (
    <Row className="page-courses course-details">
      <Col xs="12">
        <Card>
          <CardBody className="py-3 px-4">
            <Row>
              <Col xs="8">
                <Row>
                  <Col>
                    <h5 className="font-weight-bold">
                      Lesson 1 - What to Expect
                    </h5>
                    <p className="history">as of 25 May 2019, 09:41 PM</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="video-container">
                    <img src={video} alt="Video" />
                  </Col>
                </Row>
              </Col>
              <Col xs="4">
                <Row>
                  <Col>
                    <h5 className="font-weight-bold ml-3">Related Documents</h5>
                    <p className="history">&nbsp;</p>
                  </Col>
                </Row>
                <div className="row justify-content-center related-documents">
                  {mapDocuments()}
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" className="mb-3">
        <Row>
          <Col xs="1" className="text-right">
            <p className="font-weight-bold">Overview:</p>
          </Col>
          <Col xs="11">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </Col>
        </Row>
      </Col>
      <Col xs="7">
        <Card>
          <CardBody className="py-3 px-4">
            <Row>
              <Col>
                <h5 className="font-weight-bold">Personal Notes:</h5>
                <Input type="textarea" />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xs="5">
        <Card>
          <CardBody className="py-3 px-4 video-faqs">
            <Row className="mb-3">
              <Col xs="8">
                <h5 className="font-weight-bold">Lesson Video FAQs</h5>
              </Col>
              <Col xs="4" className="text-right">
                <button className="button-transparent-2">View Details</button>
              </Col>
            </Row>
            {mapVideoFaqs()}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default withTitleContext(CourseDetails);
