import React from 'react';
import debounce from 'lodash.debounce';

import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice';

import styles from './Search.module.scss';
import SearchIcon from '../../assets/img/search_icon.svg';
import ClearSearch from '../../assets/img/clear_search.svg';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img
        className={styles.searchIcon}
        src={SearchIcon}
        alt="search"
      />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search item..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src={ClearSearch}
          alt="clear"
        />
      )}
    </div>
  );
};

export default Search;
