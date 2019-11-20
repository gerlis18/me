import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import picture from "./assets/images/ASD_0017.jpeg";
import { Description } from "./components/Description";
import { Social } from "./components/Social";
import { dbRef } from "./firebase";
import { Skills } from "./components/Skills";

const App = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    dbRef
      .collection("portfolio")
      .get()
      .then(({ docs }) => {
        setInfo(docs[0].data());
      });
  }, []);

  return (
    <div className="wrapper">
      <Description {...info} />
      <div className="box b">
        <h2>
          <span>
            <i>Today is going to be a good day!</i>
          </span>
        </h2>
      </div>
      <Skills {...info} />
      <Social {...info} />
      <div className="box e">
        <img src={picture} alt="Me" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
