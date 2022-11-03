import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Jackets', 'Shorts', 'Pants'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
