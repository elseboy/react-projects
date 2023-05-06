import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

        <div>
          <button onClick={api}>get users</button>
        </div>
        <SearchBox className="search-box" onChangeHandler={handleInput} />
        <br />
        <CardList users={filteredUsers} />
      </header>
    </div>
  );
}

export default App;
