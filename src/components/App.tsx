import React, { useState } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { Players } from './Players';
import { Player } from '../types/types';
import { v4 as uuid } from 'uuid';

const App = () => {
  const initialData = [
    {
      id: uuid(),
      name: 'Mohd 5208',
      age: 28,
      position: 'Goalkeeper'
    }
  ];

  const [players, setPlayers] = useState(initialData);

  const addPlayer = (newPlayer: Player) => {
    newPlayer.id = uuid();
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = playerId => {
    const updatedPlayer = players.filter(player => playerId !== player.id);
    setPlayers(updatedPlayer);
  };

  const updatePlayer = (playerId, newData: Player) => {
    let updatedPlayer = players.map(player => {
      if (player.id === playerId) {
        return {
          id: player.id,
          name: newData.name,
          age: newData.age,
          position: newData.position
        };
      }
      return player;
    });
    setPlayers(updatedPlayer);
  };

  return (
    <div className='grid  place-items-center'>
      <h1 className='font-extrabold text-center m-6 text-4xl'>CRUD Operation with React Typescript</h1>
      <div className='flex'>
      <AddPlayerForm addPlayer={addPlayer}  /></div>
      <div>
      <Players
        players={players}
        deletePlayer={deletePlayer}
        updatePlayer={updatePlayer}
      /></div>
    </div>
  );
};

export default App;
