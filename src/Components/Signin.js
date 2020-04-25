import React from "react";
import authContext from "../context.js";
export default function Signin() {
  let auth = React.useContext(authContext);
  return (
    <div>
      <input
        type="checkbox"
        checked={auth.isAuth}
        onChange={auth.toggleIsAuth}
      />
      I'am authenticated
    </div>
  );
}
