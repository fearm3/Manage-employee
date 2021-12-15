import { useContext, useEffect, useState } from "react"; //useRef ekle
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal, Alert } from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //* const handleShowAlert = () => setShowAlert(true);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); //3saniye sonra kapansın.
  };
  useEffect(() => {
    handleClose();
    return () => handleShowAlert();
  }, [employees]);

  // const myRef = useRef(null);
  // console.log(myRef.current);
  // const onButtonClick = () => {
  //   console.log(myRef.current);
  //   myRef.current.focus();
  // };

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Employee List successfullyupdated!
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((employee) => (
              <tr key={employee.id}>
                <Employee employee={employee} />
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <input ref={myRef} type="text" />
      <button onClick={onButtonClick}>Focus Input</button> */}
    </>
  );
};

export default EmployeeList;
//*Sıralama
//* .sort((a, b) => a.name.localeCompare(b.name))
// .sort((a, b) => (a.name < b.name ? -1 : 1)) A-Z ye
