import React from "react";
import User from "./User";
import TextField from "@material-ui/core/TextField";
import { DefaultApi } from "../api/api";

class UserList extends React.Component {
  headers = { lastName: "Last Name", firstName: "First Name", email: "Email" };
  constructor(props) {
    super(props);
    this.state = { userList: [] };
  }
  componentDidMount() {
    new DefaultApi(null, "http://localhost:4000/v1")
      .listUser()
      .then((response) => {
        if (response.status == 0) {
          this.setState({ userList: response.data });
        } else {
          console.log(response.message);
        }
      });
  }
  render() {
    const listUser = this.state.userList.map((user) => (
      <User user={user} key={user.email} />
    ));
    return (
      <div>
        <TextField id="outlined-basic" label="Search..." variant="outlined" />
        <div className="user-list-display">
          <User user={this.headers} key={this.headers.email} />
          {listUser}
        </div>
      </div>
    );
  }
}

export default UserList;
