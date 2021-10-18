import {
  ADD_TABLE_DATA,
  DELETE_TABLE_DATA,
  FETCH_TABLE_DATA,
} from "../constants/actionsTypes";

const table = {
  data: [],
};

export const TableReducer = (state = table, {type, payload}) => {
  switch (type) {
    case FETCH_TABLE_DATA:
      return {...state, data: payload};
    case DELETE_TABLE_DATA:
      state.data.pop();
      let new_data = [...state.data];
      return {...state, data: new_data};
    case ADD_TABLE_DATA:
      return {...state};
    default:
      return state;
  }
};
