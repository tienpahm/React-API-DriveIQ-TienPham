import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTableData} from "../../actions/table";

export default function Table() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.TableReducer);
  console.log(tableData);

  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);
  return <div>hihi</div>;
}
