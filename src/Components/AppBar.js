import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const linkStyle = { color: "white", textDecoration: "none" };

export default function MenuBar() {
  return (
    <div style={{ marginBottom: 10 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={linkStyle}>
            <Button color="inherit">Home</Button>
          </Link>

          <Link to="/about" style={linkStyle}>
            <Button color="inherit">About</Button>
          </Link>

          <Link to="/signin" style={linkStyle}>
            <Button color="inherit">Signin</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
