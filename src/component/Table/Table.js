import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTableData, deleteTableData, getTableData} from "../../actions/table";
import {Button, Table} from "antd";
import {message} from "antd";

export default function TableAPI() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.TableReducer);

  const columns = [
    {
      title: "Code",
      dataIndex: "alpha_two_code",
      key: "code",
    },
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

  const error = () => {
    message.error("Please load university list to begin");
  };

  const addUniversity = () => {
    if (tableData.data.length !== 0) {
      dispatch(addTableData());
    } else {
      error();
    }
  };

  const deleteUniversity = () => {
    if (tableData.data.length !== 0) {
      dispatch(deleteTableData());
    } else {
      error();
    }
  };

  return (
    <div>
      <div className="mb-2">
        <Button
          onClick={() => {
            dispatch(getTableData());
          }}>
          LOAD
        </Button>
        <Button
          className="mx-1"
          onClick={() => {
            deleteUniversity();
          }}>
          DELETE
        </Button>
        <Button
          onClick={() => {
            addUniversity();
          }}>
          ADD
        </Button>
      </div>
      <p className="font-italic">
        Tips : Click <span>LOAD</span> to begin
      </p>
      <Table dataSource={tableData.data} columns={columns} rowKey="name" />
    </div>
  );
}
