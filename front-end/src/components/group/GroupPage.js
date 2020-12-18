import React, { useState } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import CreateGroupModel from "./CreateGroupModel";

const GroupPage = () => {
  const [addModelShow, setAddModelShow] = useState(false);

  const addModelClose = () => {
    setAddModelShow(false);
  };
  return (
    <div>
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => {
            setAddModelShow(true);
          }}
        >
          Create Group
        </Button>
        <CreateGroupModel show={addModelShow} onHide={addModelClose} />
      </ButtonToolbar>
    </div>
  );
};

export default GroupPage;
