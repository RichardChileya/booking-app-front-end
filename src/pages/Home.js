import React from 'react';
import HomeComponent from '../components/HomeComponent';

const Home = () => {
  const logo = [
    {
      id: 1, name: 'Luxury Cars', image: 'https://t4.ftcdn.net/jpg/03/58/16/05/360_F_358160523_d0Tc3knJ0j1RBobgWCjM4BZUo9gx33ZX.jpg',
    },
  ];
  return (
    <div>
      {logo.map((logoData) => (
        <div key={logoData.id} className="booking-header">
          <h1>
            Welecome to
            {' '}
            {logoData.name}
          </h1>
          <img src={logoData.image} alt="" />
        </div>

      ))}
      <HomeComponent />
    </div>
  );
};

export default Home;
