import React, { useState } from "react";
// import { CustomerlistData } from "../services/customerlist/CustomerlistData";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import "./customerlist.css";

const Customerlist = () => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const filteredPayload = [
    {
      id: "1",
      grpname: "Family",
      name: "ABC",
      mobile: "1234567890",
      email: "abc@mail.com",
      country: "India",
      state: "West Bengal",
      city: "Kolkata",
      address: "22/Ac Newtown",
    },
    {
      id: "2",
      grpname: "Employees",
      name: "XYZ",
      mobile: "1234567890",
      email: "xyz@mail.com",
      country: "India",
      state: "West Bengal",
      city: "Kolkata",
      address: "22/Ac Salt Lake city",
    },
    {
      id: "3",
      grpname: "Friends",
      name: "Dummy",
      mobile: "1234567890",
      email: "dummy@mail.com",
      country: "India",
      state: "West Bengal",
      city: "Kolkata",
      address: "22/Ac New city Town",
    },
  ];

  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "Canada" },
    { id: 3, name: "USA" },
    { id: 4, name: "France" },
    { id: 5, name: "Germany" },
    { id: 6, name: "South Africa" },
    { id: 7, name: "China" },
    { id: 8, name: "Bangladesh" },
    { id: 9, name: "Sri Lanka" },
    { id: 10, name: "Itlay" },
    { id: 11, name: "Korea" },
    { id: 12, name: "Australia" },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[0].id);

  const handleCountryChange = event => {
    setSelectedCountry(parseInt(event.target.value));
  };
  const companygrp = [
    { id: 1, cgrpname: 'Employees' },
    { id: 2, cgrpname: 'Friends' },
    { id: 3, cgrpname: 'Family' },
  ];

  const handleSubmit = (event) => {
    setInputValue(event.target.value);
    // handleClose();
    console.log(inputValue, "ZZZ");
    // Handle form submission logic here
  };



  return (
    <div className="customergroup">
      <div class="content">
        <div class="page-header">
          <div class="page-title">
            <h4>Contact List!!!</h4>
            <h6>Manage your Contact List</h6>
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
                  Add Contact
                </Button>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Contact Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">

                      <Form.Label>Company Group Name</Form.Label>
                      <Form.Select>
                        <option>Select company group name</option>
                        {companygrp.map((cgrpname) => (
                          <option key={cgrpname.id} value={cgrpname.id}>
                            {cgrpname.cgrpname}
                          </option>
                        ))}
                      </Form.Select>

                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleSubmit}
                        placeholder="Enter name"
                      />

                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleSubmit}
                        placeholder="Enter mobile number"
                      />

                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleSubmit}
                        placeholder="Enter email"
                      />

                      <Form.Label>Country</Form.Label>
                      <Form.Select value={selectedCountry} onChange={handleCountryChange}>
                        {countries.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </Form.Select>

                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleSubmit}
                        placeholder="Enter state"
                      />

                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleSubmit}
                        placeholder="Enter city"
                      />

                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={handleSubmit}
                        placeholder="Enter address"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Add
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
                  <th className="th-sm">Group</th>
                  <th className="th-sm">Name</th>
                  <th className="th-sm">Mobile</th>
                  <th className="th-sm">Email</th>
                  <th className="th-sm">Address</th>
                  <th className="th-sm">City</th>
                  <th className="th-sm">State</th>
                  <th className="th-sm">Country</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayload.map((val, index) => (
                  <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.grpname}</td>
                    <td>{val.name}</td>
                    <td>{val.mobile}</td>
                    <td>{val.email}</td>
                    <td>{val.address}</td>
                    <td>{val.city}</td>
                    <td>{val.state}</td>
                    <td>{val.country}</td>
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

export default Customerlist;
