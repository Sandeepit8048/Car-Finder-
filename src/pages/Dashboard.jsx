import React from 'react';
import Nav from '../components/Nav';

const cardData = [
  {
    title: 'Track Your Tasks',
    description: 'Easily manage your daily tasks and stay productive.',
    image: 'https://images.unsplash.com/photo-1584697964403-46031feadb4f',
  },
  {
    title: 'Analyze Performance',
    description: 'See how you’re progressing with insightful analytics.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
  },
  {
    title: 'Stay Organized',
    description: 'Organize tasks by category and priority levels.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
  },
  {
    title: 'Collaborate Easily',
    description: 'Share tasks with team members and boost teamwork.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
  },
  {
    title: 'Access Anywhere',
    description: 'Your tasks are with you on any device, anytime.',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926',
  },
  {
    title: 'Reminders & Alerts',
    description: 'Never miss a deadline with timely reminders.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
];

function Dashboard() {
  return (
    <div>
      <Nav />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3  mx-auto">
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
