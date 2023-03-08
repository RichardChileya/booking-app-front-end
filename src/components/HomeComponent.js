import React from 'react';
import '../App.css';

const logo = [{
  id: 1, name: 'Luxury Cars', image: 'https://t4.ftcdn.net/jpg/03/58/16/05/360_F_358160523_d0Tc3knJ0j1RBobgWCjM4BZUo9gx33ZX.jpg',
},
];

const carData = [
  {
    id: 1,
    name: 'Ford Ranger',
    image: 'https://media.ed.edmunds-media.com/ford/ranger/2021/oem/2021_ford_ranger_crew-cab-pickup_lariat_fq_oem_1_1600.jpg',
    desc: ' A luxarious SUV for your formal events. Secure and fast',
  },

  {
    id: 2,
    name: 'BMW',
    image: 'https://hips.hearstapps.com/hmg-prod/images/2020-bmw-228i-xdrive-gran-coupe-1617522824.jpeg',
    desc: ' The ultimate driving machine, perfect for those who crave excitement on the road',
  },

  {
    id: 3,
    name: 'Porche',
    image: 'https://static.theceomagazine.net/wp-content/uploads/2018/09/12091501/porsche.jpg',
    desc: ' Get ready to explore in style with this luxurious SUV in style and speend',
  },

  {
    id: 4,
    name: 'Ranger',
    image: 'https://vanguardluxuryrentals.com/wp-content/uploads/2019/05/BEN00498-1.jpg',
    desc: 'Get ready to explore in style with this luxurious SUV.',
  },

  {
    id: 5,
    name: 'Nissan',
    image: 'https://images.cars.com/cldstatic/wp-content/uploads/nissan-rogue-platinum-2021-06-exterior-front-angle-silver-suv-scaled.jpg',
    desc: 'The perfect blend of style and practicality, the Nissan is an ideal choice for those seeking a reliable and affordable car rental',
  },

  {
    id: 6,
    name: 'Audi',
    image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-audi-q5-sportback-2020-official-hero-front.jpg',
    desc: "If you're looking for a luxurious and high-performance car rental, the Audi is the perfect choice. With its sleek design and powerful engine, you're sure to turn heads wherever you go",
  },
];

const HomeComponent = () => (
  <>
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
    <h2 className="container">Please select a car </h2>
    <div className="container">
      <div className="car-info">
        {carData.map((item) => (
          <div key={item.id} className="car-details">
            <img src={item.image} alt=" vehicles" className="car-imgs" />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <div className="icons-container">
              <span><img src="https://cdn-icons-png.flaticon.com/512/4628/4628653.png" alt="fb icon" className="icons" /></span>
              <span><img src="https://cdn-icons-png.flaticon.com/512/356/356076.png" alt="twitter icon" className="icons" /></span>
              <span><img src="https://cdn-icons-png.flaticon.com/512/1362/1362857.png" alt="instagram icon" className="icons" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default HomeComponent;
