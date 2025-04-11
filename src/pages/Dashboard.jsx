import React from 'react';
import Nav from '../components/Nav';
import img from '../assets/0x0.webp';
import img1 from '../assets/Creta.jpg';
import img2 from '../assets/images.jpeg';
import img3 from '../assets/land-cruiser.jpg';
import img4 from '../assets/SUVs-2.webp';  



const cardData = [
  {
    title: 'Ferrari',
    description: 'Sports cars are engineered for speed, acceleration, and agility ',
    image: img,
  },
  {
    title: 'Honda',
    description: 'That deep growl or sharp roar from a performance engine adds to the thrill ',
    image: img1,
  },
  {
    title: 'Royal rose',
    description: 'Cars often come with cutting-edge tech — performance tracking, launch control',
    image: img2,
  },
  {
    title: 'Fortuner',
    description: 'Whether on a track or winding roads, sports cars offer a precise, connected feel to the road.',
    image: img3,
  },
  {
    title: 'TATA',
    description: 'It’s not just about speed — it’s the way it makes you feel. Every drive becomes an experience.',
    image: img4,
  },
  {
    title: 'Ferrari',
    description: 'Sleek, stylish, and bold — sports cars are often designed to turn heads and make a statement.',
    image: img,
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Nav />
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
