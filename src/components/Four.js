import React, { useState } from "react";
import useFetchCity from "./Helper/useFetchCity";
/* In this component we want you to use the open source nominatim search
api (i.e Searching for milton will return a list of places
around the world that have milton in their name).
Once you've pulled a list of results, just display them bellow
in the <ul></ul> 

Example output can be found on the google doc
*/

function Four() {
  const [input, setInput] = useState("");
  const { isLoading, data, fetchDataHandler } = useFetchCity(input);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 4</h2>
      <input
        placeholder="Enter a place"
        type="search"
        value={input}
        onChange={inputHandler}
      />
      <button onClick={fetchDataHandler}>Search</button>
      {isLoading && <p>loading...</p>}
      <ul>
        {data?.length > 0
          ? data?.map((name, key) => <li key={key}>{name}</li>)
          : null}
      </ul>
    </div>
  );
}

export default Four;
