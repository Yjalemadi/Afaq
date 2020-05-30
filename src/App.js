import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.scss";
import Navigation from "./Navigation";
import Homepage from "./Homepage";
import PMHomepage from "./Pages/PMHomepage";
import GDProfile from "./Pages/GDProfile";
import GDHomepage from "./Pages/GDHomepage";
import RotationPlanner from "./Pages/RotationPlanner";
import SLPage from "./Pages/SLPage";
import GDArchives from "./Pages/Archives/GDArchive";
import { Layout } from "antd";
const { Sider, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Sider className="layoutSidebar">
            <Navigation />
          </Sider>
          <Layout>
            <Content>
              <Switch>
                <Route path="/planner">
                  <RotationPlanner />
                </Route>
                <Route path="/pmpage">
                  <PMHomepage />
                </Route>
                <Route path="/slpage">
                  <SLPage />
                </Route>
                <Route path="/gdpage">
                  <GDHomepage />
                </Route>
                <Route path="/gdprofile">
                  <GDProfile />
                </Route>
                <Route path="/gdarchives">
                  <GDArchives />
                </Route>
                <Route path="/">
                  <Homepage />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
