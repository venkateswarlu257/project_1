import React from 'react';
import './EachCardProduct.css'

interface Product {
  image: string;
  title: string;
  brand: string;
  price: string;
  category: string;
  description: string;
}

interface HandleProducts {
  onClickCards: Product;
  onClickBack: () => void;
}

const EachCardProduct: React.FC<HandleProducts> = ({ onClickCards, onClickBack }) => {
  return (
    <div className='eachCard'>
      <div className='EachCard-Item'>
        <div>
          <img className='Card-Image' src={require(`../../../src/Images/${onClickCards.image}`)} alt="Product" />
        </div>
        <div>
          <p><b>Title:</b> {onClickCards.title}</p>
          <p><b>Brand:</b> {onClickCards.brand}</p>
          <p><b>Category:</b> {onClickCards.category}</p>
          <button onClick={onClickBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default EachCardProduct;
