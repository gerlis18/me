import React from "react";

export const Skills = props => {
  return (
    <div className="box c">
      <h2>
        <span>Skills:</span>
      </h2>
      {props.skills ? (
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index} style={{ marginTop: "10px" }}>
              <label>
                {skill.name} {skill.percent}%
              </label>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
