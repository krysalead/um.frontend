import React from "react";
import User from "./User";
import TextField from "@material-ui/core/TextField";
import { DefaultApi } from "../api/api";
import { AppContext } from "../Context";

class UserList extends React.Component {
  static contextType = AppContext;
  headers = { lastName: "Last Name", firstName: "First Name", email: "Email" };
  constructor(props) {
    super(props);
    this.state = { userList: [] };
  }
  componentDidMount() {
    new DefaultApi(null, this.context.baseUrl)
      .listUser()
      .then((response) => {
        if (response.status == 0) {
          this.setState({ userList: response.data });
        } else {
          this.setState({ errorMessage: response.message });
        }
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
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
