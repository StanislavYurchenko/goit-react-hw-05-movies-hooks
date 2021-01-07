import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import BookList from '../../components/BookList/BookList';
import SearchBox from '../../components/SearchBox/SearchBox';
import MoviePagination from '../../components/MoviePagination/MoviePagination';
import { searchMoviesByKeyword } from '../../services/themoviedbApi';

const MoviesView = () => {
  const [movieList, setMovieList] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);
  const pageNumber = Number(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('searchQuery') || null;

  useEffect(() => {
    searchMoviesByKeyword(searchQuery, pageNumber).then(res => {
      setMovieList(res.results);
      setTotalPages(res['total_pages']);
    });
  }, [pageNumber, searchQuery]);

  function setSearch(query, page = 1) {
    history.push({
      ...location,
      search: `searchQuery=${query}&page=${page}`,
    });
  }

  function onChangeQuery(query) {
    setSearch(query);
  }

  function setPage(page) {
    setSearch(searchQuery, page);
  }

  function increaseCurrentPage(number) {
    const newPage = pageNumber + number;
    setSearch(searchQuery, newPage);
  }

  function decreaseCurrentPage(number) {
    const newPage = pageNumber - number;
    setSearch(searchQuery, newPage);
  }

  return (
    <section>
      <h2>Find movie</h2>
      <SearchBox onChangeQuery={onChangeQuery} />
      {searchQuery && movieList?.length > 0 && (
        <>
          <BookList books={movieList} />
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
};

export default MoviesView;
