import React from "react";
import ProgressBar from "./ProgressBar";

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
                <ProgressBar percent={skill.percent / 100} />
              </label>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
