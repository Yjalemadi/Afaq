import React from "react";
import { Button, Row, Col, Steps, DatePicker, AutoComplete } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faSuitcase,
  faPlus,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
const { Step } = Steps;

class RotationPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      famOpen: false,
      famRotation: {},
      famAdded: false,
      rotationsOpen: false,
      rotations: [],
      rotationsAdded: false,
      ojtOpen: false,
      ojtRotations: {},
      ojtAdded: false,
    };
    this.doj = "Mar 01 2019";
    this.endDate = "Mar 01 2020";
    this.actualRole = {
      faIcon: faSuitcase,
    };
    this.stepIcon = {
      faIcon: faCircle,
      color: "#323232",
    };
    this.openFam = this.openFam.bind(this);
    this.closeFam = this.closeFam.bind(this);
    this.addFam = this.addFam.bind(this);
    this.deleteFam = this.deleteFam.bind(this);
    this.openRotation = this.openRotation.bind(this);
    this.closeRotation = this.closeRotation.bind(this);
    this.addRotation = this.addRotation.bind(this);
    this.openOjt = this.openOjt.bind(this);
    this.closeOjt = this.closeOjt.bind(this);
    this.addOjt = this.addOjt.bind(this);
    this.deleteOjt = this.deleteOjt.bind(this);
  }

  openRotation() {
    this.setState({ rotationsOpen: true });
  }

  closeRotation() {
    this.setState({ rotationsOpen: false });
  }

  addRotation() {
    var addedRotations = this.state.rotations;
    var newRotation = [
      {
        key: this.state.rotations.length,
        name: "UX",
        date: "Aug 23 - Feb 29",
        status: "finish",
      },
    ];
    addedRotations.push(newRotation[0]);
    this.setState({
      rotations: addedRotations,
      rotationsOpen: false,
      rotationsAdded: true,
    });
  }

  openFam() {
    this.setState({ famOpen: true });
  }

  closeFam() {
    this.setState({ famOpen: false });
  }

  addFam() {
    var newRotation = [
      {
        name: "Familiarization",
        date: "Mar 01 - Apr 01",
        status: "finish",
      },
    ];
    this.setState({ famRotation: newRotation, famAdded: true, famOpen: false });
  }

  deleteFam() {
    this.setState({ famRotation: {}, famAdded: false });
  }

  openOjt() {
    this.setState({ ojtOpen: true });
  }

  closeOjt() {
    this.setState({ ojtOpen: false });
  }

  addOjt() {
    var newRotation = [
      {
        name: "OJT",
        date: "May 01 - Mar 01",
        status: "finish",
      },
    ];
    this.setState({
      ojtRotations: newRotation,
      ojtAdded: true,
      ojtOpen: false,
    });
  }

  deleteOjt() {
    this.setState({ ojtRotations: {}, ojtAdded: false });
  }

  render() {
    return (
      <div className="rotationPlanner">
        {console.log(this.state.rotations)}
        <Row type="flex" align="middle" className="headerDiv">
          <Col span={24}>
            <Steps labelPlacement="vertical">
              <Step
                key="55"
                title="Date of Joining"
                subTitle={this.doj}
                status="finish"
                icon={
                  <FontAwesomeIcon
                    icon={this.stepIcon.faIcon}
                    color={this.stepIcon.color}
                    size="1x"
                  />
                }
              />
              {this.state.famRotation.length > 0 &&
                this.state.famRotation.map((item) => (
                  <Step
                    key={item.name}
                    title={item.name}
                    subTitle={item.date}
                    status={item.status}
                    icon={
                      <FontAwesomeIcon
                        icon={this.stepIcon.faIcon}
                        color={this.stepIcon.color}
                        size="1x"
                      />
                    }
                  />
                ))}
              {this.state.rotations.length > 0 &&
                this.state.rotations.map((item) => (
                  <Step
                    key={item.key}
                    title={item.name}
                    subTitle={item.date}
                    status={item.status}
                    icon={
                      <FontAwesomeIcon
                        icon={this.stepIcon.faIcon}
                        color={this.stepIcon.color}
                        size="1x"
                      />
                    }
                  />
                ))}
              {this.state.ojtRotations.length > 0 &&
                this.state.ojtRotations.map((item) => (
                  <Step
                    key={item.name}
                    title={item.name}
                    subTitle={item.date}
                    status={item.status}
                    icon={
                      <FontAwesomeIcon
                        icon={this.stepIcon.faIcon}
                        color={this.stepIcon.color}
                        size="1x"
                      />
                    }
                  />
                ))}

              <Step
                key="Actual Role"
                title="Actual Role"
                subTitle={this.endDate}
                status="finish"
                icon={
                  <FontAwesomeIcon
                    icon={this.actualRole.faIcon}
                    color={this.stepIcon.color}
                    size="1x"
                  />
                }
              />
            </Steps>
          </Col>
        </Row>
        <Row>
          <Col className="formWapper">
            <div className="plannerWapper">
              <div className="sectionsWrapper">
                <div className="famWrapper">
                  <div class="d-flex justify-content-between align-items-center p-4 sectionHeader">
                    <div className="afaqHeading m-0">
                      Familiarization{" "}
                      <span className="asterisk">(If Applicable)</span>{" "}
                    </div>
                    <div>
                      <Button
                        type="link"
                        disabled={this.state.famAdded}
                        onClick={this.openFam}
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="2x"
                          color=""
                        ></FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                  {this.state.famOpen && (
                    <div className="planner mb-4">
                      <div className="p-3 header">Add Familiarization</div>

                      <div className="row no-gutters pb-4">
                        <div className="col-sm-5 pl-3">
                          <div className="row no-gutters">
                            <div className="col-sm-3 field d-flex align-items-center">
                              {" "}
                              Start Date{" "}
                              <span style={{ color: "#dd3545" }}>*</span>
                            </div>
                            <div className="col-sm-9">
                              <DatePicker className="w-100" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-7 pr-3 pl-4">
                          <div className="row no-gutters">
                            <div className="col-sm-2 field d-flex align-items-center">
                              Coordinator
                            </div>
                            <div className="col-sm-10">
                              <AutoComplete className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row no-gutters pb-4">
                        <div className="col-sm-5 pl-3">
                          <div className="row no-gutters">
                            <div className="col-sm-3 field d-flex align-items-center">
                              {" "}
                              End Date{" "}
                              <span style={{ color: "#dd3545" }}>*</span>
                            </div>
                            <div className="col-sm-9">
                              <DatePicker className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end actionRow p-3">
                        <div className="pr-1">
                          <Button type="primary" onClick={this.addFam}>
                            Apply
                          </Button>
                        </div>

                        <Button type="link" onClick={this.closeFam}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                  {this.state.famAdded && (
                    <div className="planner mb-4 d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-start align-items-center">
                        <div className="p-3 header">
                          {this.state.famRotation[0].name}
                        </div>
                        <div className="py-3 dateRange">
                          {this.state.famRotation[0].date}
                        </div>
                      </div>
                      <div className="d-flex justify-content-start align-items-center pr-3">
                        <div className="">
                          <Button type="link" className="rotationActions">
                            <FontAwesomeIcon
                              icon={faEdit}
                              size="lg"
                            ></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className="">
                          <Button
                            type="link"
                            onClick={this.deleteFam}
                            className="rotationActions"
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              size="lg"
                            ></FontAwesomeIcon>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="rotationsWrapper">
                  <div class="d-flex justify-content-between align-items-center p-4 sectionHeader">
                    <div className="afaqHeading m-0">
                      Rotations{" "}
                      <span className="asterisk">(If Applicable)</span>{" "}
                    </div>
                    <div>
                      <Button type="link" onClick={this.openRotation}>
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="2x"
                          color=""
                        ></FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                  {this.state.rotationsOpen && (
                    <div className="planner mb-4">
                      <div className="p-3 header">Add Rotation</div>

                      <div className="row no-gutters pb-4">
                        <div className="col-sm-5 pl-3">
                          <div className="row no-gutters">
                            <div className="col-sm-3 field d-flex align-items-center">
                              {" "}
                              Start Date{" "}
                              <span style={{ color: "#dd3545" }}>*</span>
                            </div>
                            <div className="col-sm-9">
                              <DatePicker className="w-100" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-7 pr-3 pl-4">
                          <div className="row no-gutters">
                            <div className="col-sm-2 field d-flex align-items-center">
                              Coordinator
                            </div>
                            <div className="col-sm-10">
                              <AutoComplete className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row no-gutters pb-4">
                        <div className="col-sm-5 pl-3">
                          <div className="row no-gutters">
                            <div className="col-sm-3 field d-flex align-items-center">
                              {" "}
                              End Date{" "}
                              <span style={{ color: "#dd3545" }}>*</span>
                            </div>
                            <div className="col-sm-9">
                              <DatePicker className="w-100" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-7 pr-3 pl-4">
                          <div className="row no-gutters">
                            <div className="col-sm-2 field d-flex align-items-center">
                              Department
                            </div>
                            <div className="col-sm-10">
                              <AutoComplete className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end actionRow p-3">
                        <div className="pr-1">
                          <Button type="primary" onClick={this.addRotation}>
                            Apply
                          </Button>
                        </div>

                        <Button type="link" onClick={this.closeRotation}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                  {this.state.rotationsAdded &&
                    this.state.rotations.map((item) => (
                      <div className="planner mb-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start align-items-center">
                          <div className="p-3 header">{item.name}</div>
                          <div className="py-3 dateRange">{item.date}</div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center pr-3">
                          <div className="">
                            <Button type="link" className="rotationActions">
                              <FontAwesomeIcon
                                icon={faEdit}
                                size="lg"
                              ></FontAwesomeIcon>
                            </Button>
                          </div>
                          <div className="">
                            <Button type="link" className="rotationActions">
                              <FontAwesomeIcon
                                icon={faTrash}
                                size="lg"
                              ></FontAwesomeIcon>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="ojtWrapper">
                  <div class="d-flex justify-content-between align-items-center p-4 sectionHeader">
                    <div className="afaqHeading m-0">
                      On Job Training{" "}
                      <span className="asterisk" style={{ color: "red" }}>
                        *
                      </span>{" "}
                    </div>
                    <div>
                      <Button
                        type="link"
                        disabled={this.state.ojtAdded}
                        onClick={this.openOjt}
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="2x"
                          color=""
                        ></FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                  {this.state.ojtOpen && (
                    <div className="planner mb-4">
                      <div className="p-3 header">Add OJT</div>

                      <div className="row no-gutters pb-4">
                        <div className="col-sm-5 pl-3">
                          <div className="row no-gutters">
                            <div className="col-sm-3 field d-flex align-items-center">
                              {" "}
                              Start Date{" "}
                              <span style={{ color: "#dd3545" }}>*</span>
                            </div>
                            <div className="col-sm-9">
                              <DatePicker className="w-100" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-7 pr-3 pl-4">
                          <div className="row no-gutters">
                            <div className="col-sm-2 field d-flex align-items-center">
                              Line Manager
                            </div>
                            <div className="col-sm-10">
                              <AutoComplete className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row no-gutters pb-4">
                        <div className="col-sm-5 pl-3">
                          <div className="row no-gutters">
                            <div className="col-sm-3 field d-flex align-items-center">
                              {" "}
                              End Date{" "}
                              <span style={{ color: "#dd3545" }}>*</span>
                            </div>
                            <div className="col-sm-9">
                              <DatePicker className="w-100" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-7 pr-3 pl-4">
                          <div className="row no-gutters">
                            <div className="col-sm-2 field d-flex align-items-center">
                              Department
                            </div>
                            <div className="col-sm-10">
                              <AutoComplete className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-end actionRow p-3">
                        <div className="pr-1">
                          <Button type="primary" onClick={this.addOjt}>
                            Apply
                          </Button>
                        </div>

                        <Button type="link" onClick={this.closeOjt}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                  {this.state.ojtAdded && (
                    <div className="planner mb-4 d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-start align-items-center">
                        <div className="p-3 header">
                          {this.state.ojtRotations[0].name}
                        </div>
                        <div className="py-3 dateRange">
                          {this.state.ojtRotations[0].date}
                        </div>
                      </div>
                      <div className="d-flex justify-content-start align-items-center pr-3">
                        <div className="">
                          <Button type="link" className="rotationActions">
                            <FontAwesomeIcon
                              icon={faEdit}
                              size="lg"
                            ></FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className="">
                          <Button
                            type="link"
                            onClick={this.deleteOjt}
                            className="rotationActions"
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              size="lg"
                            ></FontAwesomeIcon>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RotationPlanner;
