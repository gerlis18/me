import React from "react";

export const Description = props => {
  return (
    <div className="box a">
      <h1>{props.intro ? props.intro.name : null}</h1>
      <p>{props.intro ? props.intro.description : null}</p>
      <p>
        <span style={{ backgroundColor: "#1de9b6" }}>
          <strong>AKA: El playaman 🏝</strong>
        </span>
      </p>
    </div>
  );
};
