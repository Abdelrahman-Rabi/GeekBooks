import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const CreateGroupModel = (props) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
      groupName: e.target.groupName.value,
      groupDescription: e.target.groupDescription.value,
    };
    axios
      .post("http://localhost:5000/createGroup", newGroup)
      .then((response) => {});
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add Group</Modal.Title>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={props.onHide}
        ></button>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={6}>
            <Form onSubmit={handelSubmit}>
              <Form.Group controlId="groupName">
                <Form.Control
                  type="text"
                  name="groupName"
                  required
                  placeholder="enter group name"
                />
              </Form.Group>
              <br />
              <Form.Group controlId="groupDescription">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="groupDescription"
                  placeholder="enter group description"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Button variant="primary" type="submit">
                  Create Group
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button varian="danger" onClick={props.onHide}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateGroupModel;
