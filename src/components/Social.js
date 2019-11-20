import React from "react";

export const Social = props => {
  return (
    <div className="box d">
      <h2>
        <span>Social:</span>
      </h2>
      {props.social ? (
        <ul>
          <li>
            <a
              href={props.social.github.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.social.github.username}
              <span className={props.social.github.cssClass}></span>
            </a>
          </li>
          <li>
            <a
              href={props.social.linkedin.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.social.linkedin.username}
              <span className={props.social.linkedin.cssClass}></span>
            </a>
          </li>
          <li>
            <a
              href={props.social.twitter.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.social.twitter.username}
              <span className={props.social.twitter.cssClass}></span>
            </a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
