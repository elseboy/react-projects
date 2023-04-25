import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  let api = async () => {
    await axios.get('https://api.github.com/users').then((res) => {
      setData(res.data);
    });
  };

  const filteredUsers = data.filter((user) => {
    return user.login.includes(searchText);
  });

  const handleInput = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          className="search-box"
          type="search"
          placeholder="search users"
          onChange={handleInput}
        />
        {filteredUsers.map((user) => {
          return <h6 key={user.id}>{user.login}</h6>;
        })}
        <div>
          <button onClick={api}>get users</button>
        </div>
      </header>
    </div>
  );
}

export default App;
