import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';
import SearchIcon from '../../assets/img/search_icon.svg';
import ClearSearch from '../../assets/img/clear_search.svg';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={SearchIcon} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search item..."
      />
      {value && (
        <img
          onClick={() => onClickClear()}
          className={styles.clearIcon}
          src={ClearSearch}
          alt="clear"
        />
      )}
    </div>
  );
};

export default Search;
