import React from "react";
import e from "../Event/e.css";

function ERead() {
  return (
    <div class="row pl-3 mt-2 ">
      <div
        class="col-7  rounded mb-3"
        style={{ border: "1px solid green", backgroundColor: "#dff5e6" }}
      >
        <table
          class="table table-striped  mt-3  "
          style={{
            tableLayout: "fixed",
          }}
        >
          <thead class="table-success border">
            <tr>
              <th colSpan="2">Events-------------</th>
            </tr>
          </thead>
          <tbody class="table table-bordered">
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>
                  This tutorial follows Bootstrap 4, which was released in 2018,
                  as an upgrade to Bootstrap 3, with new components, faster
                  stylesheetc, more responsiveness, etc. Bootstrap 5 (released
                  2021) is the newest version of Bootstrap; It supports t
                </div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>
            <tr>
              <td>Org-Name</td>
              <td style={{ wordWrap: "break-word" }}>
                <div>Ans</div>
              </td>
            </tr>

            {/* <tr>
                <td colSpan={2}>
                  <a
                    href={link}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <button
                      class="btn btn-info  container "
                      style={{ display: link !== "Not" ? "block" : "none" }}
                    >
                      {link !== "Not" ? "Apply/Register" : "Link Not Available"}
                    </button>
                  </a>
                  <span
                    style={{
                      display: link !== "Not" ? "none" : "block",
                      color: "red",
                    }}
                  >
                    Link not available
                    <div style={{ color: "green" }}>
                      Please contact Organization
                    </div>
                  </span>
                </td>
              </tr> */}
          </tbody>
        </table>
        {/* style={{ border: "1px solid green",}} */}
      </div>
      <div class="col-4 " style={{ position: "fixed", left: "58%" }}>
        <a
          href="https://images.all-free-download.com/images/graphicwebp/homes_cube_architecture_219145.webp"
          download
          target="_blank"
        >
          <img
            width="103%"
            class="mt-0  rounded"
            style={{ border: "1px solid green" }}
            src="https://images.all-free-download.com/images/graphicwebp/homes_cube_architecture_219145.webp"
          ></img>
        </a>
        <button
          class="btn-secondary rounded mt-4 p-2 "
          style={{ width: "103%" }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default ERead;
