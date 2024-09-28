import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              Discover our selection of popular dishes, each crafted with the finest ingredients and bursting with flavor. From savory entrées to delectable desserts, our menu offers something for every palate, ensuring a memorable dining experience.
            </p>
          </div>
          <div className="dishes_container">
            {
              data[0].dishes.map(element => (
                <div className="card" key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  <button>{element.category}</button>
                </div>
              ))
            }   
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
