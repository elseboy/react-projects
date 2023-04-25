import React from 'react';

const CardList = (props) => {
  const { users } = props;
  return (
    <div>
      <h2>CardList Component</h2>
      {users.map((user) => {
        return <h6 key={user.id}>{user.login}</h6>;
      })}
    </div>
  );
};

export default CardList;
