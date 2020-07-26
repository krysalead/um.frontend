import React from "react";
import User from "./User";
import TextField from "@material-ui/core/TextField";
import { DefaultApi } from "../api/api";
import { AppContext } from "../Context";

const searchButtonStyle = {
  width: "90%",
};

class UserList extends React.Component {
  static contextType = AppContext;
  headers = { lastName: "Last Name", firstName: "First Name", email: "Email" };
  constructor(props) {
    super(props);
    this.state = { userList: props.users || [] };
  }
  filterList = (event) => {
    new DefaultApi(null, this.context.baseUrl)
      .searchUser(event.target.value)
      .then(this.handleReponse)
      .catch(this.handleError);
  };
  componentDidMount() {
    new DefaultApi(null, this.context.baseUrl)
      .listUser()
      .then(this.handleReponse)
      .catch(this.handleError);
  }
  // keep the scope of the method to this
  handleReponse = (response) => {
    if (response.status === 0) {
      this.setState({ userList: response.data });
    } else {
      // TODO propagate the error message
      console.error(response.message);
    }
  };
  handleError(err) {
    // TODO propagate the error message
    console.error(err.message);
  }
  render() {
    const listUser = this.state.userList.map((user) => (
      <User user={user} key={user.email} />
    ));
    return (
      <div>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          style={searchButtonStyle}
          onChange={this.filterList}
        />
        <div className="user-list-display">
          <User user={this.headers} key={this.headers.email} />
          {listUser}
        </div>
      </div>
    );
  }
}

export default UserList;
