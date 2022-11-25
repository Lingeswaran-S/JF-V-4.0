import React from "react";

function Btn(props) {
  return (
    <button
      class="btn btn-success m-1"
      onClick={() => props.addField(props.ind)}
    >
      {props.field}
    </button>
  );
}

export default Btn;
