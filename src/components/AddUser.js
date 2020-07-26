import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function AddUser() {
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField id="adduser-firstName" label="First Name" />
        <TextField id="adduser-lastName" label="Last Name" />
        <TextField id="adduser-email" label="Email" />
      </div>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

export default AddUser;
