import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus
            onBlur={() => {
              deactivateEditMode();
            }}
            type="text"
            onChange={onStatusChange}
            value={status}
          />
        </div>
      ) : (
        <div
          onDoubleClick={() => {
            activateEditMode();
          }}
        >
          {props.status || "-------"}
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
