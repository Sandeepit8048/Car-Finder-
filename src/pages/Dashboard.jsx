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
    description: 'Easily manage your daily tasks and stay productive.',
    image: img,
  },
  {
    title: 'Honda',
    description: 'See how you’re progressing with insightful analytics.',
    image: img1,
  },
  {
    title: 'Royal rose',
    description: 'Organize tasks by category and priority levels.',
    image: img2,
  },
  {
    title: 'Fortuner',
    description: 'Share tasks with team members and boost teamwork.',
    image: img3,
  },
  {
    title: 'TATA',
    description: 'Your tasks are with you on any device, anytime.',
    image: img4,
  },
  {
    title: 'Ferrari',
    description: 'Never miss a deadline with timely reminders.',
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
