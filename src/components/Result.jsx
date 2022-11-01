import React from "react";
import { Link } from "react-router-dom";
import question from "./question";
const Result = ({ answer }) => {
  function giveResult() {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
      if (answer[i] === question[i].ans) cnt++;
    }
    return cnt;
  }

  return (
    <div className="cover">
<section className="welcome_box">
      <div className="box">
        <h2>Congratulations </h2>
        <p>🥳</p>
        <p>you Scored <p className="resu">{giveResult()}</p><p className="p"> --------------------------------- </p>
        <p className="out">5</p>
        </p>
        <Link style={{ all: "unset" }} to="/">
          <button className="btnnnn">Start Again</button>
        </Link>
      </div>
    </section>
    </div>

  );
};

export default Result;