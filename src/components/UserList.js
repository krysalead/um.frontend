import React from "react";
import User from "./User";
import TextField from "@material-ui/core/TextField";

function UserList(props) {
  let listUser = [];
  if (props.users) {
    listUser = props.users.map((user) => <User user={user} key={user.email} />);
  }
  return (
    <div>
      <TextField id="outlined-basic" label="Search..." variant="outlined" />
      <div>{listUser}</div>
    </div>
  );
}

export default UserList;
