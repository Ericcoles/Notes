import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <div className="notepad">
        <h2>This is your input</h2>
        <p>
          First name: <span>{props.firstname}</span>
        </p>
        <p>
          Last name: <span>{props.lastname}</span>
        </p>
        <p>
          Phone: <span>{props.phone}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
