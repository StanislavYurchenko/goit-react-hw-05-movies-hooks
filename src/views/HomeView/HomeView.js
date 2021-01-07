import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import BookList from '../../components/BookList/BookList';
import MoviePagination from '../../components/MoviePagination/MoviePagination';
import { popularFetch } from '../../services/themoviedbApi';

function HomeView() {
  const [popularMovieList, setPopularMovieList] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);
  const pageNumber = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    popularFetch(pageNumber).then(res => {
      setPopularMovieList(res.results);
      setTotalPages(res['total_pages']);
    });
  }, [pageNumber]);

  function setPage(page = 1) {
    history.push({
      ...location,
      search: `page=${page}`,
    });
  }

  function increaseCurrentPage(number) {
    const newPage = pageNumber + number;
    setPage(newPage);
  }

  function decreaseCurrentPage(number) {
    const newPage = pageNumber - number;
    setPage(newPage);
  }

  return (
    <section>
      <h2>Popular movies</h2>
      {popularMovieList?.length > 0 && (
        <>
          <BookList books={popularMovieList} />
          <MoviePagination
            increaseCurrentPage={increaseCurrentPage}
            currentPage={pageNumber}
            decreaseCurrentPage={decreaseCurrentPage}
            totalPages={totalPages}
            setPage={setPage}
          />
        </>
      )}
    </section>
  );
}

export default HomeView;
