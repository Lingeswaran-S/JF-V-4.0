import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor(props) {
  const editorRef = useRef(null);
  let str;
  const log = () => {
    if (editorRef.current) {
      str = editorRef.current.getContent({ format: "string" });
      props.saveEditorDetails("moreDetails",str)
    }
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Type as you want</p>"
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
            init_instance_callback : function(editor) {
              var warn = document.querySelector('.tox .tox-notification--in');
              var brand = document.querySelector('.tox .tox-statusbar__branding');
              warn.style.display = 'none';
              brand.style.display = 'none';
            }
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
