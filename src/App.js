import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.scss";
import Homepage from "./Homepage";
import PMHomepage from "./Pages/PMHomepage";
import GDProfile from "./Pages/GDProfile";
import GDHomepage from "./Pages/GDHomepage";
import RotationPlanner from "./Pages/RotationPlanner";
import { Layout } from "antd";
const { Sider, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Sider className="layoutSidebar"></Sider>
        <Layout>
          <Content>
            <Router>
              <Switch>
                <Route path="/planner">
                  <RotationPlanner />
                </Route>
                <Route path="/pmpage">
                  <PMHomepage />
                </Route>
                <Route path="/gdpage">
                  <GDHomepage />
                </Route>
                <Route path="/gdprofile">
                  <GDProfile />
                </Route>
                <Route path="/">
                  <Homepage />
                </Route>
              </Switch>
            </Router>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
