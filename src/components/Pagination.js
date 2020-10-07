import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="center">
      {pageNumbers.map((number) => (
        <div key={number} className="pagination">
          <button onClick={() => paginate(number)}>
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};
export default Pagination;