import axios from "axios";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import TextEditor from "./Editor";
import { Editor } from "@tinymce/tinymce-react";

function Default(props) {
  const editorRef = useRef(null);

  let [point, setPoint] = React.useState(0);
  function pointSet() {
    setPoint(1);
  }

  let values = props.fields;
  const initialValues = {
    company: "",
    Experience: "",
    Age: "",
    moreDetails: "",
  };

  // for (const key in initialValues) {
  //   values.push(key);
  // }
  let [data, setData] = React.useState(initialValues);
  function handle(name, value) {
    setData({ ...data, [name]: value });
  }
  function postData(submit) {
    submit.preventDefault();
    if (!props.isNeedTextEditor) {
      handle("moreDetails", "");
    }
    let response = "none";
    axios
      .post(
        "https://jserverlinges.herokuapp.com/jobs",
        // "https://6270ca6c6a36d4d62c1d8729.mockapi.io/crud/sample/Test"
        //"http://localhost:3000/events"
        data
      )
      .then(() => {
        pointSet();
        setTimeout(() => {
          setPoint(0);
          reLoad();
        }, 2000);
      })
      .catch((err) => {
       alert(" There is a problem while uploading job .please Try again")
      });
    
  }

  function reLoad() {
    window.location.reload();
  }

  return (
    <React.Fragment>
      <form class="form-control form-control-color" onSubmit={postData}>
        <table class="">
          {values.map((ele) => (
            <tr>
              <input
                class="rounded m-2 p-2 col-12"
                type="text"
                placeholder={ele}
                required="required"
                name={ele}
                onChange={(e) => handle(e.target.name, e.target.value)}
              ></input>
            </tr>
          ))}
        </table>

        <button class="btn btn-dark" type="submit">
          Submit
        </button>
        <button class="btn btn-danger ml-1" onClick={reLoad}>
          Reload
        </button>
        {/* <strong>Successfully !</strong> */}
      </form>
      {{ 1: <strong>Successfully JobDetails applied !</strong> }[point]}
      {/* <TextEditor saveEditorDetails={handle} /> */}
      {
        {
          true: (
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              onChange={() =>
                handle(
                  "moreDetails",
                  editorRef.current.getContent({ format: "string" })
                )
              }
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                init_instance_callback: function (editor) {
                  var warn = document.querySelector(
                    ".tox .tox-notification--in"
                  );
                  var brand = document.querySelector(
                    ".tox .tox-statusbar__branding"
                  );
                  warn.style.display = "none";
                  brand.style.display = "none";
                },
              }}
            />
          ),
        }[props.isNeedTextEditor]
      }
    </React.Fragment>
  );
}

export default Default;
