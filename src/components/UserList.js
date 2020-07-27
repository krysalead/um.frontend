import React from "react";
import User from "./User";
import TextField from "@material-ui/core/TextField";

const searchButtonStyle = {
  width: "90%",
};

const UserList = (props) => {
  const headers = {
    lastName: "Last Name",
    firstName: "First Name",
    email: "Email",
  };
  let listUser = props.users || [];
  const filterList = (event) => {
    props.onUserSearch(event.target.value);
  };
  listUser = listUser.map((user) => <User user={user} key={user.email} />);
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        style={searchButtonStyle}
        onChange={filterList}
      />
      <div className="user-list-display">
        <User user={headers} key={headers.email} />
        {listUser}
      </div>
    </div>
  );
};

export default UserList;
