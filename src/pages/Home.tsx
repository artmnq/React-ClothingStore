import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/ItemBlock/Skeleton';
import ItemBlock from '../components/ItemBlock';
import Pagination from '../components/Pagination';
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from '../redux/slices/filterSlice';
import {
  fetchItems,
  selectItemData,
} from '../redux/slices/itemsSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectItemData);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const getItems = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchItems({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getItems();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const clothes = items.map((obj: any) => (
    <Link to={`/item/${obj.id}`} key={obj.id}>
      <ItemBlock {...obj} />
    </Link>
  ));
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onChangeCategory={onChangeCategory}
          />
          <Sort />
        </div>
        <h2 className="content__title">All clothing:</h2>
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>ERROR</h2>
            <span>
              There was an Error loading the items, please try again
              later
            </span>
          </div>
        ) : (
          <div className="content__items">
            {status === 'loading' ? skeletons : clothes}
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      </div>
    </>
  );
};

export default Home;
