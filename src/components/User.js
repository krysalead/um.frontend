import React from "react";

function User(props) {
  if (props.user) {
    return (
      <div className="user-display">
        <div>{props.user.lastName}</div>
        <div>{props.user.firstName}</div>
        <div>{props.user.email}</div>
      </div>
    );
  } else {
    return "";
  }
}

export default User;
