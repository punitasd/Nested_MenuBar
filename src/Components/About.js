import React from "react";
import { Route, Redirect } from "react-router-dom";
import Company from "./Company.js";
import Jobs from "./Jobs.js";
import EditJobs from "./EditJobs.js";
import AboutUs from "./AboutUs.js";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import authContext from "../context.js";
import Button from "@material-ui/core/Button";
const linkStyle = { textDecoration: "none", display: "block" };
const sidebarStyle = {
  boxShadow: "5px 10px 10px #888888",
  height: "90vh",
  width: "150px"
};
export default function About({ match }) {
  let { isAuth } = React.useContext(authContext);

  return (
    <div style={{ display: "flex" }}>
      <div style={sidebarStyle}>
        <List>
          <Link to="/about/company" style={linkStyle}>
            <Button>Company</Button>
          </Link>
          <Link to="/about/jobs" style={linkStyle}>
            <Button>Jobs</Button>
          </Link>
          <Link to="/about/jobs/edit" style={linkStyle}>
            <Button>Edit Jobs</Button>
          </Link>
        </List>
      </div>

      <div>
        <Route exact path={match.url} component={AboutUs} />
        <Route exact path={match.url + "/company"} component={Company} />
        <Route exact path={match.url + "/jobs"} component={Jobs} />
        <Route exact path={match.url + "/jobs/edit"}>
          {!isAuth ? <Redirect to="/signin" /> : <EditJobs />}
        </Route>
      </div>
    </div>
  );
}
