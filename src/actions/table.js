import * as api from "../api";
import {
  ADD_TABLE_DATA,
  DELETE_TABLE_DATA,
  FETCH_TABLE_DATA,
} from "../constants/actionsTypes";

//Action creator

export const getTableData = () => async (dispatch) => {
  try {
    const {data} = await api.fetchData();
    const action = {type: FETCH_TABLE_DATA, payload: data};
    dispatch(action);
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteTableData = () => {
  return {
    type: DELETE_TABLE_DATA,
    payload: null,
  };
};

export const addTableData = () => {
  return {
    type: ADD_TABLE_DATA,
    payload: null,
  };
};
