import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTableData} from "../../actions/table";
import {Table} from "antd";

export default function TableAPI() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.TableReducer);
  console.log(tableData.data);

  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Domains",
      dataIndex: "domains",
      key: "domains",
      render: (domains) => (
        <>
          {domains.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Webpages",
      dataIndex: "web_pages",
      key: "web_pages",
      render: (webs) => (
        <>
          {webs.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={tableData.data} columns={columns} />
    </div>
  );
}
