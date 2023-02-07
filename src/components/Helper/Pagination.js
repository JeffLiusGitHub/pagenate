import React from "react";
import { PaginationContainer, PageButtonContainer } from "./PaginationStyle";
const Pagination = ({ cityPerPage, totalCities, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCities / cityPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationContainer>
        {currentPage > 1 && (
          <PageButtonContainer onClick={() => paginate(currentPage - 1)}>
            Prev
          </PageButtonContainer>
        )}
        {pageNumbers.map((number) => (
          <PageButtonContainer
            current={currentPage === number}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </PageButtonContainer>
        ))}
        {currentPage < pageNumbers.length && (
          <PageButtonContainer onClick={() => paginate(currentPage + 1)}>
            Next
          </PageButtonContainer>
        )}
      </PaginationContainer>
    </nav>
  );
};

export default React.memo(Pagination);
