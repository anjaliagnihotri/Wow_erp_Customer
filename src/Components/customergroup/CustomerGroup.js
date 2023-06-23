import React, { useState } from "react";
import "./CustomerGroup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
// import { useEffect } from "react";
import { contactgroupAdd } from "../services/customerlist/CustomerlistData";
const CustomerGroup = () => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ctoken = localStorage.getItem("user");
  const c_id = localStorage.getItem("user-data");


  const filteredPayload = [
    {
      id: "1",
      cgname: "Family",
      doc: "12/10/24",
    },
    {
      id: "12",
      cgname: "Employees",
      doc: "12/10/24",
    },
    {
      id: "15",
      cgname: "Friends",
      doc: "12/10/24",
    },
  ];

  // useEffect(() => {
  //   getSalesData();
  // }, []);

  // const getSalesData = async (page = 1) => {
  //   try {
  //     const response = await SalesListData(page);
  //     const data = response.data.records;
  //     console.log(data,);
  //     ; // Calculate total pages based on data length (assuming 10 items per page)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const handleSubmit = async (e) => {
    console.log("!@$#@!$@!$", e.target.value);
    setInputValue(e.target.value);
  };

  const addGroup = async () => {
    const options = {
      headers: { Authorization: ctoken,}
    };
    
    try {
      const response = await axios.post(
        "http://localhost:8009/group",
        { GroupName: inputValue }, options
      );
      const data = response.data;
      console.log(data, "value data");
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getSalesData();
  // }, []);

  // const getSalesData = async (page = 1) => {
  //   try {
  //     const response = await SalesListData(page);
  //     const data = response.data.records;
  //     console.log(data,);
  //     ; // Calculate total pages based on data length (assuming 10 items per page)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div className="customergroup">
      <div class="content">
        <div class="page-header">
          <div class="page-title">
            <h4>Customer Group!!!</h4>
            <h6>Manage your Customer Group</h6>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="table-top">
              <div class="search-set">
                <div class="search-path">
                  <a class="btn btn-filter" id="filter_search">
                    <img
                      src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/icons/filter.svg"
                      alt="img"
                    />
                    <span>
                      <img src="assets/img/icons/closes.svg" alt="img" />
                    </span>
                  </a>
                </div>
                <div class="search-input">
                  <a class="btn btn-searchset">
                    <img
                      src="https://preadmin.dreamguystech.com/html/pos/template/assets/img/icons/search-white.svg"
                      alt="img"
                    />
                  </a>
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label>
                      {" "}
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Search..."
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <Button variant="primary" onClick={handleShow}>
                  Add customer Group
                </Button>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Label>Group Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={inputValue}
                        onChange={handleSubmit}
                        placeholder="Enter group name!"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={addGroup}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <table
              id="dtBasicExample"
              className="table table-striped table-bordered table-sm"
              cellSpacing="0"
              width="10%"
            >
              <thead>
                <tr>
                  <th className="th-sm">Id</th>
                  <th className="th-sm">Customer Group</th>
                  <th className="th-sm">Date of creation</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayload.map((val, index) => (
                  <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.cgname}</td>
                    <td>{val.doc}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div class="table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                class="dataTables_wrapper dt-bootstrap4 no-footer"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGroup;
