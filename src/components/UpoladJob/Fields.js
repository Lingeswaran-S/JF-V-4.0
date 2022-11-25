import React from "react";
import Btn from "./Btn";

function Fields(props) {
  let type = "";
  function setType(e) {
    type = e.target.value;
  }
  return (
    <table>
      {props.someFields.map((field, ind) => (
        <tr>
          <Btn field={field} ind={ind} addField={props.addField} />
        </tr>
      ))}
      <tr>
        <td>
          <input
            class="rounded  p-2 col-12"
            placeholder="Type Field"
            onChange={(e) => setType(e)}
          />
        </td>
        <td>
          <button
            class="btn btn-dark m-2 mr-0 p-2"
            onClick={() => props.addTypeField(type)}
          >
            Add
          </button>
        </td>
      </tr>
      <tr>
        {!props.isNeedTextEditor && (
          <td>
            <button
              style={{
                backgroundColor: props.isNeedTextEditor ? "green" : "#065050",
                color: "white",
              }}
              class="btn"
              onClick={() => props.setIsNeedTextEditor()}
            >
              Click Here If you need Enriched Text Editor
            </button>
          </td>
        )}
      </tr>
    </table>
  );
}

export default Fields;
