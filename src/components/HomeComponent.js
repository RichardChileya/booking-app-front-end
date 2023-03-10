import React from 'react';
import '../App.css';
import VehiclesList from './VehiclesList';

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
    <h2 className="container">Please select a car </h2>
    <div className="container">
      <div className="car-info row">
        {carData.map((item) => (
          <VehiclesList key={item.id} item={item} />
        ))}
      </div>
    </div>
  </>
);

export default HomeComponent;
