import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { FiPlusCircle } from "react-icons/fi";
import { addMovie } from "../actions/actions";
import { v4 as uuidv4 } from "uuid";

const AddMovie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  const [add, setAdd] = useState(() => {
    return {
      id: uuidv4(),
      title: "",
      auther: "",
      img: "",
      rating: "",
    };
  });
  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  return (
    <>
      <FiPlusCircle className="plus" variant="primary" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-control">
            <label htmlFor="title">Title : </label>
            <input type="text" name="title" onChange={handleChange} />
          </div>

          <div className="form-control">
            <label htmlFor="auther">Auther : </label>
            <input type="text" name="auther" onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="img">img : </label>
            <input type="text" name="img" onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="rate">Rate : </label>
            <input type="number" name="rating" onChange={handleChange} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {dispatch(addMovie({ id:uuidv4() ,title: add.title, auther: add.auther, img: add.img, rating: add.rating })) ; setShow(false)}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
