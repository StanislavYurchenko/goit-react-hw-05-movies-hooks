import { useState } from 'react';

function SearchBox({ onChangeQuery }) {
  const [userQuery, setUserQuery] = useState('');

  const onChange = event => {
    setUserQuery(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    onChangeQuery(userQuery);
    setUserQuery('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="userQuery"
        onChange={onChange}
        value={userQuery}
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
