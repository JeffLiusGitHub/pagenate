import React, { useState, useMemo, useCallback } from "react";

import {
  SearchContainer,
  InputContainer,
  ButtonContainer,
  ResultList,
  ResultItem
} from "./SearchStyle";
import Pagination from "./Helper/Pagination";
import useFetchCity from "./Helper/useFetchCity";
/* In this challenge we want you to make some visual improvements 
to challenge 4, simply just copy your code from the previous 
challenge and add it to this component. Our talented designer has created 
a mockup that you should use as reference seen in “Challenge 5”
section of the NetEngine FE test google doc. You will also notice
that we have added pagination to the designs, if you have time after you 
have completed the style changes implement this feature. */

function Five() {
  const [input, setInput] = useState("");
  const { isLoading, data, fetchDataHandler } = useFetchCity(input);
  const [currentPage, setCurrentPage] = useState(1);
  const cityPerPage = 3;

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const paginateHandler = useCallback(
    (pageNumber) => {
      if (
        Math.ceil(data.length / cityPerPage) < pageNumber ||
        pageNumber <= 0
      ) {
        return;
      } else {
        setCurrentPage(pageNumber);
      }
    },
    [data.length]
  );
  const indexOfLastCity = currentPage * cityPerPage;
  const indexOfFirstCity = indexOfLastCity - cityPerPage;
  const currentData = useMemo(() => {
    return data.slice(indexOfFirstCity, indexOfLastCity);
  }, [data, indexOfFirstCity, indexOfLastCity]);

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 5</h2>
      <SearchContainer>
        <InputContainer
          placeholder="Search here"
          type="search"
          value={input}
          onChange={inputHandler}
        />
        <ButtonContainer onClick={fetchDataHandler}>Search</ButtonContainer>
      </SearchContainer>

      {isLoading && <p>loading...</p>}
      <ResultList>
        {data?.length > 0
          ? currentData.map((name, key) => (
              <ResultItem key={key}>{name}</ResultItem>
            ))
          : null}
      </ResultList>
      {data?.length > 0 && (
        <Pagination
          cityPerPage={cityPerPage}
          totalCities={data.length}
          paginate={paginateHandler}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Five;
