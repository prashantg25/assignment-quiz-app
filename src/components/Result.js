import React from "react";

export const Result = ({ total, attempted, correct }) => {
  const element = (
    <div>
      <center>
        <h2>Thank You!!</h2>
        <h3>
          You attempted {attempted} out of {total}.<br></br>
          Your score :{correct}/{total}
        </h3>
      </center>
    </div>
  );
  return element;
};
