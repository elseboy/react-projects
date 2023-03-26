import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  //   const firstText = text || "first text";
  //   const secondText = text && "second text";
  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* useState不为空直接返回里面的值, 否则返回useState里面的Joma */}
      {/* <h1>{text || "Joma"}</h1> */}
      {/* useState不为空会返回 &&之后的操作, 否则返回useState里面的空值 */}
      {/* {text && <h1>Peter</h1>} */}

      <h1>{text || "Joma"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h2>error...</h2>}
      {isError ? <p>there is an error</p> : <div>this is no error</div>}
    </>
  );
};

export default ShortCircuit;
