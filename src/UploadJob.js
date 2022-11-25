import React from "react";
import Default from "./components/UpoladJob/Default";
import Fields from "./components/UpoladJob/Fields";

function UploadJob() {
  document.body.style =
  "background:  #2e2727";
  // let [point, setPoint] = React.useState(1);
  let [fields, setFields] = React.useState([
    "company",
    "Experience",
    "Age",
    "Mail",
    "Position",
    "regLink",
  ]);
  let [someFields, setSomeFields] = React.useState([
    "Skill",
    "Technology",
    "Year of Passing",
    "Job-Location",
    "Language",
    "Salary (LPA)",
    "Registeration-end-date",
    "Link_valid_till",
  ]);
  function addField(ind) {
    console.log("ind", ind);
    setFields([...fields, someFields[ind]]);
    let tempL = [...someFields];
    tempL.splice(ind, 1);
    console.log("temp", tempL);

    setSomeFields(tempL);
  }
  function addTypeField(data) {
    console.log(data);
    setFields([...fields, data]);
  }

  let [isNeedTextEditor, setIsTextEditorNeed] = React.useState(false);
  function setIsNeedTextEditor() {
    setIsTextEditorNeed(!isNeedTextEditor);
  }

  return (
    <React.Fragment>
      <div class="container">
        <nav class="navbar navbar-light bg-secondary mb-4 mt-3 rounded">
          <strong class="navbar-brand text-white">
            Developed by <a href="https://lingeswaran.pages.dev/" target="_blank" style={{textDecoration:"none",color:"aqua"}}>Lingeswaran S </a>
          </strong>
        </nav>

        <div class="ml-3">
          <div class="row">
            <div class="col-5">
              <Fields
                someFields={someFields}
                addField={addField}
                addTypeField={addTypeField}
                setIsNeedTextEditor={setIsNeedTextEditor}
                isNeedTextEditor={isNeedTextEditor}
              />
            </div>
            <div class="col-7">
              <Default fields={fields} isNeedTextEditor={isNeedTextEditor} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UploadJob;
