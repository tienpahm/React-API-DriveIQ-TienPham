import * as api from "../api";
import {FETCH_TABLE_DATA} from "../constants/actionsTypes";

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
