import React from 'react';
import './_CategoryNav.scss';
const index = () => {
  return (
    <>
      <div className="cat-nav-container container bg-dark">
        <ul>
          <li className="list-items">
            <a href="#">Men</a>
          </li>
          <li className="list-items">
            <a href="#">Women</a>
          </li>
          <li className="list-items">
            <a href="#">Kids</a>
          </li>
          <li className="list-items">
            <a href="#">Best Offers</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
