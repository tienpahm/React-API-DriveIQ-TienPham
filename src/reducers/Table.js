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
      let newData = [...state.data];
      return {...state, data: newData};
    case ADD_TABLE_DATA:
      let newAddData = [...state.data];
      newAddData.push(state.data[0]);
      return {...state, data: newAddData};
    default:
      return state;
  }
};
