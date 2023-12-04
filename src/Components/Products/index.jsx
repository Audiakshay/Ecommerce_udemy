import React from 'react';
import './_Products.scss';

const index = () => {
  const product = [
    {
      id: new Date().valueOf(),
      pName: 'Jacket',
      imgUrl: 'shop-1.jpg',
      price: 200,
    },
    {
      id: new Date().valueOf(),
      pName: 'Hand Bag',
      imgUrl: 'shop-2.jpg',
      price: 1200,
    },
    {
      id: new Date().valueOf(),
      pName: 'Skirt',
      imgUrl: 'shop-3.jpg',
      price: 400,
    },
    {
      id: new Date().valueOf(),
      pName: 'Jeans pant',
      imgUrl: 'shop-4.jpg',
      price: 700,
    },
    {
      id: new Date().valueOf(),
      pName: 'Boots',
      imgUrl: 'shop-5.jpg',
      price: 400,
    },
    {
      id: new Date().valueOf(),
      pName: 'Bag',
      imgUrl: 'shop-6.jpg',
      price: 800,
    },
    {
      id: new Date().valueOf(),
      pName: 'Earings',
      imgUrl: 'shop-7.jpg',
      price: 80,
    },
    {
      id: new Date().valueOf(),
      pName: 'Scarf',
      imgUrl: 'shop-8.jpg',
      price: 50,
    },
    {
      id: new Date().valueOf(),
      pName: 'Long Boots',
      imgUrl: 'shop-9.jpg',
      price: 300,
    },
  ];
  return (
    <div className="product-container">
      {product.map((item) => (
        <div key={item.id} className="mx-5 p-3 product-card">
          <div className="product-image-container">
            <img
              src={require('../../assets/images/shop/' + item.imgUrl)}
              alt={item.imgUrl}
            />
          </div>
          <div className="product-info">
            <h5>
              <a href="#">{item.pName}</a>
            </h5>
            <p className="product-price">${item.price}</p>
            <div className="product-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
