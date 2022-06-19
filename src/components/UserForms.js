import React from "react";
import ResumeForm from "../forms/ResumeForm";
import JobDescriptionForm from "../forms/JobDescriptionForm";
import background from "../images/wordcloud.png";

export default function UserForms() {
  return (
    <>
      <div id="UserForm" class="bg_image" >
        <div style={{ margin: "0px auto", width: "80%", paddingTop: "3%", opacity:'1' }}>
          <ResumeForm style={{ padding: "0px" }} />
          <JobDescriptionForm />
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "white", margin: "10%" }}>
            Aydee Reichert &copy; 2022
          </p>
        </div>
      </div>
    </>
  );
}
