import React from "react";
import "./User.css";

const lastNameStyle = {
  width: "30%",
};
const firstNameStyle = {
  width: "30%",
};
const emailStyle = {
  width: "40%",
};

function User(props) {
  if (props.user) {
    return (
      <div className="user-display">
        <div style={lastNameStyle}>{props.user.lastName}</div>
        <div style={firstNameStyle}>{props.user.firstName}</div>
        <div style={emailStyle}>{props.user.email}</div>
      </div>
    );
  } else {
    return "";
  }
}

export default User;
