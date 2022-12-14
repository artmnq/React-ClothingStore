import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/ItemBlock/Skeleton';
import ItemBlock from '../components/ItemBlock';
import Pagination from '../components/Pagination';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
import { fetchItems } from '../redux/item/asyncActions';
import { selectItemData } from '../redux/item/selectors';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectItemData);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

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
    <ItemBlock key={obj.id} {...obj} />
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
          <Sort value={sort} />
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
