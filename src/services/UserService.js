import { DefaultApi } from "../api/api";
import { BASE_URL } from "../constants/AppConfig";

const UserApi = {
  searchUser(searchTerms) {
    if (searchTerms !== "") {
      return new DefaultApi(null, BASE_URL)
        .searchUser(searchTerms)
        .then(this.handleReponse)
        .catch(this.handleError);
    } else {
      return this.listUser();
    }
  },
  listUser() {
    return new DefaultApi(null, BASE_URL)
      .listUser()
      .then(this.handleReponse)
      .catch(this.handleError);
  },
  addUser(user) {
    return new DefaultApi(null, BASE_URL)
      .addUser(user)
      .then(this.handleReponse)
      .catch(this.handleError);
  },
  // keep the scope of the method to this
  handleReponse(response) {
    if (response.status === 0) {
      return response.data;
    } else {
      throw new Error(response.message);
    }
  },
  handleError(err) {
    throw new Error(err);
  },
};

export default UserApi;
