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
      {pageNumbers.map((number) => (
        <li className={`page-item ${currentPage === number ? "active" : ""}`} key={number}>
          <a className="page-link" onClick={() => paginate(number)} href="#">
            {number}
          </a>
        </li>
      ))}
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
