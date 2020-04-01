import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserCircle,
  faUsers,
  faAddressCard,
  faBook,
  faPlaneDeparture
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const topMenuItems = [
      { name: "PM Homepage", icon: faUsers, path: "/pmpage" },
      { name: "GD Homepage", icon: faHome, path: "/gdpage" },
      { name: "GD Profile", icon: faAddressCard, path: "/gdprofile" },
      { name: "Rotation Planner", icon: faBook, path: "/planner" }
    ];
    const buttomMenuItems = [
      { name: "Profile", icon: faUserCircle, path: "/gdprofile" },
      { name: "Home", icon: faPlaneDeparture, path: "/" }
    ];
    return (
      <div class="navigationWrapper d-flex align-content-between flex-wrap">
        <div class="header pt-2">
          {topMenuItems.map(item => {
            return (
              <div class="iconDiv p-2">
                <div class="icon d-flex justify-content-center align-items-center">
                  <Tooltip placement="right" title={item.name}>
                    <Link to={item.path}>
                      <FontAwesomeIcon icon={item.icon} />
                    </Link>
                  </Tooltip>
                </div>
              </div>
            );
          })}
        </div>
        <div class="footer">
          <div class="footer pb-2">
            {buttomMenuItems.map(item => {
              return (
                <div class="iconDiv p-2">
                  <div class="icon d-flex justify-content-center align-items-center">
                    <Tooltip placement="right" title={item.name}>
                      <Link to={item.path}>
                        <FontAwesomeIcon icon={item.icon} />
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
