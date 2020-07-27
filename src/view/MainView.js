import React from "react";
import { connect } from "react-redux";
import AddUser from "../components/AddUser";
import UserList from "../components/UserList";
import { ADD_USER, LOAD_USERS, FILTER_USERS } from "../constants/ActionsType";
import UserService from "../services/UserService";

const mapStateToProps = (state) => ({
  ...state.Users,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAdd: (payload) =>
    dispatch({ type: ADD_USER, payload: UserService.addUser(payload) }),
  onLoad: (payload) => dispatch({ type: LOAD_USERS, payload }),
  onUserSearch: (payload) =>
    dispatch({ type: FILTER_USERS, payload: UserService.searchUser(payload) }),
});

class MainView extends React.Component {
  componentWillMount() {
    this.props.onLoad(UserService.listUser());
  }
  render() {
    return (
      <div>
        <AddUser onUserAdd={this.props.onUserAdd} />
        <UserList
          users={this.props.list}
          onUserSearch={this.props.onUserSearch}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainView);
