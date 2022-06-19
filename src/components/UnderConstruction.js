import React from "react";

export default function UnderConstruction({ children, style, ...props }) {
  const styles = {
    error: {
      color: "red",
    },
  };

  return (
    <>
      <div style={{ margin: "0px 10rem", width: "100%" }}>
        <img
          src="SL-043020-30500-40.jpg"
          alt="Under Construction"
          style={{ width: "75%", margin: "0px" }}
        ></img>
        <p>
          <a
            style={{ color: "white", fontSize: "small", margin: "0px" }}
            href="https://www.freepik.com/vectors/caution"
          >
            Caution vector created by starline - www.freepik.com
          </a>
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "white", margin: "1%" }}>
          Aydee Reichert &copy; 2022
        </p>
      </div>
    </>
  );
}
