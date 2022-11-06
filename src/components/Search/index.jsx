import React from 'react';

import styles from './Search.module.scss';

import SearchIcon from '../../assets/img/search_icon.svg';
import ClearSearch from '../../assets/img/clear_search.svg';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={SearchIcon} alt="search" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Search item..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          src={ClearSearch}
          alt="clear"
        />
      )}
    </div>
  );
};

export default Search;
