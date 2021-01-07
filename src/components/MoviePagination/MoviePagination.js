import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

function MoviePagination(props) {
  const {
    increaseCurrentPage,
    currentPage,
    decreaseCurrentPage,
    totalPages,
    setPage,
  } = props;

  const firstPaginationItemNumber = () => {
    return (
      (currentPage < 3 && 1) ||
      (currentPage > totalPages - 2 && totalPages - 2) ||
      currentPage - 1
    );
  };

  const secondPaginationItemNumber = () => {
    return (
      (currentPage < 3 && 2) ||
      (currentPage > totalPages - 2 && totalPages - 1) ||
      currentPage
    );
  };

  const thirdPaginationItemNumber = () => {
    return (
      (currentPage > totalPages - 2 && totalPages) ||
      (currentPage < 2 && 3) ||
      currentPage + 1
    );
  };

  return (
    <div>
      <Pagination>
        {totalPages >= 2 && (
          <Pagination.Prev
            onClick={() => decreaseCurrentPage(1)}
            disabled={currentPage === 1}
          />
        )}

        {totalPages > 3 && (
          <Pagination.Item
            onClick={() => setPage(1)}
            disabled={currentPage === 1}
          >
            {1}
          </Pagination.Item>
        )}

        {totalPages > 3 && (
          <Pagination.Ellipsis
            disabled={currentPage - 3 < 1}
            onClick={() => decreaseCurrentPage(3)}
          />
        )}

        {totalPages >= 1 && (
          <Pagination.Item
            active={currentPage === 1}
            onClick={() => setPage(firstPaginationItemNumber())}
          >
            {firstPaginationItemNumber()}
          </Pagination.Item>
        )}

        {totalPages >= 2 && (
          <Pagination.Item
            active={
              (currentPage > 1 && currentPage < totalPages) || currentPage === 2
            }
            onClick={() => setPage(secondPaginationItemNumber())}
          >
            {secondPaginationItemNumber()}
          </Pagination.Item>
        )}

        {totalPages >= 3 && (
          <Pagination.Item
            active={currentPage === totalPages}
            onClick={() => setPage(thirdPaginationItemNumber())}
          >
            {thirdPaginationItemNumber()}
          </Pagination.Item>
        )}

        {totalPages > 3 && (
          <Pagination.Ellipsis
            onClick={() => increaseCurrentPage(3)}
            disabled={currentPage + 3 > totalPages}
          />
        )}

        {totalPages > 3 && (
          <Pagination.Item
            onClick={() => setPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            {totalPages}
          </Pagination.Item>
        )}

        {totalPages >= 2 && (
          <Pagination.Next
            onClick={() => increaseCurrentPage(1)}
            disabled={currentPage === totalPages}
          />
        )}
      </Pagination>
    </div>
  );
}

MoviePagination.propTypes = {
  increaseCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  decreaseCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default MoviePagination;
