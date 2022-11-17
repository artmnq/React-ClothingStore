import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullItem: React.FC = () => {
  const [item, setItem] = React.useState<{ image: string; title: string; price: number }>();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get('https://6362b47537f2167d6f6b31c3.mockapi.io/items/' + id);
        setItem(data);
      } catch (error) {
        console.log(error, 'ERROR:(');
      }
    }
    fetchItem();
  }, []);

  if (!item) {
    return (
      <div className="container">
        <b>Downloading....</b>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={item.image} alt="item" />
      <h2>{item.title}</h2>
      <h4>{item.price}</h4>
    </div>
  );
};

export default FullItem;
