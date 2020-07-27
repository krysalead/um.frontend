import { LOAD_USERS, ADD_USER, FILTER_USERS } from "../constants/ActionsType";

export default (state = {}, action) => {
  switch (action.type) {
    case FILTER_USERS:
    case LOAD_USERS:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        list: [].concat(state.list, [action.payload]),
      };
    default:
      return state;
  }
};
