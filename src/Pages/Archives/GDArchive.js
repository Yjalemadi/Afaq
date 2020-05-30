/* eslint-disable array-callback-return */
import React from "react";
import { Table, Tag, Avatar, Row, Col, Input, Button } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import ArchivePopup from "./Popup.js";

export default class ArchiveGDHistory extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        key: "0",
        name: "Eman",
        id: 76131,
        stream: ["IT"],
        endDate: ["21-JUN-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
      {
        key: "1",
        name: "Khalid",
        id: 96294,
        stream: ["HR"],
        endDate: ["06-MAY-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
      {
        key: "2",
        name: "Omar",
        id: 82746,
        stream: ["HR"],
        endDate: ["09-APR-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
      {
        key: "3",
        name: "Fatima",
        id: 49591,
        stream: ["COM (Delegated)"],
        endDate: ["22-JUL-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
      {
        key: "4",
        name: "Maryam",
        id: 63840,
        stream: ["COM (Delegated)"],
        endDate: ["05-JAN-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
      {
        key: "5",
        name: "Yousuf",
        id: 97789,
        stream: ["IT"],
        endDate: ["29-FEB-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
      {
        key: "6",
        name: "Reem",
        id: 34567,
        stream: ["HR"],
        endDate: ["08-OCT-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
      {
        key: "7",
        name: "Elham",
        id: 81239,
        stream: ["IT"],
        endDate: ["08-OCT-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
      {
        key: "8",
        name: "Abdulaziz",
        id: 109283,
        stream: ["IT"],
        endDate: ["21-DEC-2018"],
        duration: "12 Months",
        pm: "Mehsaal Adel Al Mutlaq",
      },
    ];
    this.selectedStream = [];
    this.selectedPhase = [];
    this.state = {
      showPopup: false,
      tableData: this.data,
      visible: false,
    };
    this.handleStreamChange = this.handleStreamChange.bind(this);
    this.handlePhaseChange = this.handlePhaseChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  handleStreamChange(value) {
    this.selectedStream = value;
    var array = this.filterData();
    this.handleStateChange(array);
  }

  handlePhaseChange(value) {
    this.selectedPhase = value;
    var array = this.filterData();
    this.handleStateChange(array);
  }

  handleStateChange(array) {
    console.log(this.selectedStream.length);
    if (this.selectedStream.length === 0 && this.selectedPhase.length === 0) {
      this.setState({
        tableData: array,
      });
    } else {
      this.setState({
        tableData: array,
      });
    }
  }

  filterData() {
    var array = this.data;
    var filter = [];
    if (this.selectedStream.length !== 0) {
      this.selectedStream.map((tag, index) => {
        array.map((item) => {
          item.stream[0] === this.selectedStream[index] && filter.push(item);
        });
      });
      if (this.selectedPhase.length !== 0) {
        var filter2 = [];
        this.selectedPhase.map((tag, index) => {
          filter.map((item) => {
            item.phase[0] === this.selectedPhase[index] && filter2.push(item);
          });
        });
        return filter2;
      } else {
        return filter;
      }
    }
    if (this.selectedPhase.length !== 0) {
      this.selectedPhase.map((tag, index) => {
        array.map((item) => {
          item.phase[0] === this.selectedPhase[index] && filter.push(item);
        });
      });
      return filter;
    } else {
      return array;
    }
  }

  compareByAlpha(a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  }

  render() {
    const columns = [
      {
        dataIndex: "avatar",
        key: "avatar",
        width: 64,
        render: (avatar) => <Avatar>USER</Avatar>,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => this.compareByAlpha(a.name, b.name),
        // sortDirection: ["descend", "ascend"]
        render: (text) => (
          <span>
            <Link to="/GDProfile">{" " + text}</Link>
          </span>
        ),
        /* <Link to="/GDProfile">{' ' + text}</Link> */
      },
      {
        title: "Staff ID",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => a.id - b.id,
        // sortDirection: ["descend", "ascend"]
      },
      {
        title: "Stream",
        key: "stream",
        dataIndex: "stream",
        sorter: (a, b) => this.compareByAlpha(a.stream, b.stream),
        // sortDirection: ["descend", "ascend"],
        render: (tags) => (
          <span>
            {tags.map((tag) => {
              var color;
              if (tag === "IT") {
                color = "rgba(255,10,0,0.25)";
              }
              if (tag === "HR") {
                color = "rgba(255,191,0,0.25)";
              }
              if (tag === "COM (Delegated)") {
                color = "rgba(127,0,255,0.25)";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: "End Date",
        key: "endDate",
        dataIndex: "endDate",
        sorter: (a, b) => moment(a.endDate).unix() - moment(b.endDate).unix(),
      },
      {
        title: "Duration",
        dataIndex: "duration",
        key: "duration",
        sorter: (a, b) => moment(a.duration).unix() - moment(b.duration).unix(),
      },
      {
        title: "Program Manager",
        dataIndex: "pm",
        key: "pm",
        sorter: (a, b) => this.compareByAlpha(a.pm, b.pm),
        sortDirection: ["descend", "ascend"],
      },
    ];

    const { Search } = Input;

    return (
      <div>
        <Row
          type="flex"
          align="middle"
          justify="space-around"
          className="headerDiv"
        >
          <Col span={25}>
            <Search
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              style={{ width: 1000 }}
            />
          </Col>
          <Col span={2}>
            <Button
              style={{ border: 0, color: "darkgrey" }}
              onClick={this.togglePopup.bind(this)}
            >
              Filters
            </Button>
          </Col>
        </Row>

        <Row>
          <Col className="contentWarpper">
            <div className="afaqCard">
              <div className="afaqHeading">Archived Graduate Developees</div>
              <Table
                columns={columns}
                dataSource={this.state.tableData}
                pagination={{ position: "false" }}
                scroll={{ y: "calc(100vh - 15vh - 206px)" }}
              />
            </div>
          </Col>
        </Row>
        {this.state.showPopup ? (
          <ArchivePopup closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
