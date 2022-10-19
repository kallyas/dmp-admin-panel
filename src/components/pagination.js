/* eslint-disable */
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = (e) => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = (e) => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <ul className="pagination m-0 ms-auto">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <a
          className="page-link"
          onClick={handlePrevious}
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        >
          <IconChevronLeft />
          prev
        </a>
      </li>
      {pageNumbers.map((number) => {
        //  add elipsis if pages are more than 5
        // eg: 1 2 3 4 5 ... 10
        if (pageNumbers.length > 5) {
          if (
            number === 1 ||
            number === pageNumbers.length ||
            (number >= currentPage - 1 && number <= currentPage + 1)
          ) {
            return (
              <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
                <a onClick={() => paginate(number)} href="#" className="page-link">
                  {number}
                </a>
              </li>
            );
          } else if (number === currentPage - 2 || number === currentPage + 2) {
            return (
              <li key={number} className="page-item disabled">
                <a href="#" className="page-link">
                  ...
                </a>
              </li>
            );
          }
        }
        //  if pages are less than 5
        // eg: 1 2 3 4 5
        else {
          return (
            <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
              <a onClick={() => paginate(number)} href="#" className="page-link">
                {number}
              </a>
            </li>
          );
        }
      })}
      <li className={`page-item ${currentPage === pageNumbers.length ? "disabled" : ""}`}>
        <a className="page-link" onClick={handleNext} href="#">
          next
          <IconChevronRight />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
