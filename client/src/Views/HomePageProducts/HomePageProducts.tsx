import axios from 'axios'
import React, { useEffect, useState } from 'react'

import EachCardProduct from '../EachCardProduct/EachCardProduct'
import './HomePageProducts.css'

interface Props {
  image: string;
  title: string;
  brand: string;
  price: string;
  category: string;
  description: string;
}

function HomePageProducts() {
  const [eachProduct, setEachProduct] = useState<Props[]>([]);
  const [onClickCards, setOnClickCard] = useState<Props | false>(false);
  const [cart, setCart] = useState<Props[]>([]);

  const getProducts = async () => {
    try {
      const products = await axios.get('http://localhost:5000/getproducts');
      const allProducts = await products;
      setEachProduct(allProducts.data);
      console.log(allProducts.data);
    } catch (err) {
      console.log('Error fetching products:', err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const onClickCard = (eachProductDetails: Props) => {
    setOnClickCard(eachProductDetails);
    console.log(eachProductDetails);
  };

  const onClickBack = () => {
    setOnClickCard(false);
  };

  const handleCart = (pro: Props) => {
    setCart((prev) => [...prev, pro]);
  };

  console.log(cart);

  return (
    <>
      {onClickCards ? (
        <div>
          <EachCardProduct onClickCards={onClickCards} onClickBack={onClickBack} />
        </div>
      ) : (
        <div className="card">
          {eachProduct.map((pro, index) => (
            <div key={index} className="SingleCard">
              <div onClick={() => onClickCard(pro)}>
                <img
                  className="Card-Image1"
                  src={require(`../../../src/Images/${pro.image}`)}
               
                  alt="imagerrrr"
                />
                <p>
                  <b>Title:</b> {pro.title}
                </p>
                <p>
                  <b>Brand:</b> {pro.brand}
                </p>
                <p>
                  <b>Category:</b> {pro.category}
                </p>
              </div>
              <button className="Card-Button" onClick={() => handleCart(pro)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default HomePageProducts;
