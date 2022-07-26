import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchTerm);
  });

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox onSearchChange={onSearchChange} />

      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
