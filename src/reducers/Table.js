import {FETCH_TABLE_DATA} from "../constants/actionsTypes";

const table = {
  data: [],
};

export const TableReducer = (state = table, {type, payload}) => {
  switch (type) {
    case FETCH_TABLE_DATA:
      return {...state, data: payload};

    default:
      return state;
  }
};
