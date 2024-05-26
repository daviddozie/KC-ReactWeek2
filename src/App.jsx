import React, { useState } from 'react';
import Card from './components/Card';
import './index.css';

const App = () => {
  const [people, setPeople] = useState([
    {
      title: 'Profile 1',
      name: 'John Doe',
      age: 30,
      location: 'New York',
      hobbies: ['Reading', 'Traveling', 'Swimming', 'Gaming', 'Cooking', 'Hiking'],
    },
    {
      title: 'Profile 2',
      name: 'Jane Smith',
      age: 25,
      location: 'London',
      hobbies: ['Cooking', 'Hiking', 'Painting', 'Yoga', 'Cycling', 'Photography'],
    },
    {
      title: 'Profile 3',
      name: 'Samuel Green',
      age: 40,
      location: 'Sydney',
      hobbies: ['Fishing', 'Gardening', 'Cycling', 'Golf', 'yoga', 'Kayaking'],
    },
    {
      title: 'Profile 4',
      name: 'Alice Brown',
      age: 28,
      location: 'Tokyo',
      hobbies: ['Writing', 'Chess', 'Running', 'Photography', 'Cooking', 'Drawing'],
    },
    {
      title: 'Profile 5',
      name: 'Bob White',
      age: 35,
      location: 'Berlin',
      hobbies: ['Swimming', 'Traveling', 'Music', 'Coding', 'Cooking', 'Fitness'],
    },
    {
      title: 'Profile 6',
      name: 'Cathy Yellow',
      age: 32,
      location: 'Paris',
      hobbies: ['Art', 'History', 'Reading', 'Traveling', 'Baking', 'Gardening'],
    },
    {
      title: 'Profile 7',
      name: 'Michael Johnson',
      age: 45,
      location: 'Toronto',
      hobbies: ['Running', 'Movies', 'Dancing', 'Hiking', 'Cycling', 'Photography'],
    },
    {
      title: 'Profile 8',
      name: 'Sarah Williams',
      age: 22,
      location: 'Dubai',
      hobbies: ['Shopping', 'Yoga', 'Cooking', 'Traveling', 'Blogging', 'Swimming'],
    },
    {
      title: 'Profile 9',
      name: 'David Brown',
      age: 38,
      location: 'New Delhi',
      hobbies: ['Running', 'Music', 'Reading', 'Photography', 'Traveling', 'Drawing'],
    },
    {
      title: 'Profile 10',
      name: 'Linda Clark',
      age: 29,
      location: 'San Francisco',
      hobbies: ['Tech', 'Gaming', 'Cooking', 'Running', 'Fitness', 'Movies'],
    },
    {
      title: 'Profile 11',
      name: 'Emma Davis',
      age: 34,
      location: 'Vancouver',
      hobbies: ['Yoga', 'Photography', 'Traveling', 'Reading', 'Running', 'Cooking'],
    },
    {
      title: 'Profile 12',
      name: 'Daniel Thompson',
      age: 27,
      location: 'Cape Town',
      hobbies: ['Surfing', 'Climbing', 'Fishing', 'Photography', 'Traveling', 'Diving'],
    },
  ]);

  const removeCard = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {people.map((person, index) => (
        <Card
          key={index}
          title={person.title}
          name={person.name}
          age={person.age}
          location={person.location}
          hobbies={person.hobbies}
          onClose={() => removeCard(index)}
        />
      ))}
    </div>
  );
};

export default App;
