import React from 'react';
import { useForm } from '../hooks/useForm';
import './../index.css';
export const EditPlayerForm = ({
  id,
  name,
  age,
  position,
  updatePlayer,
  toggleEditForm
}) => {
  const [player, handleChange] = useForm({ id, name, age, position });

  const handleSubmit = e => {
    e.preventDefault();
    updatePlayer(id, player);
    toggleEditForm(false);
  };

  return (
    <>
      <form action="" className='lg:mt-2 mt-2 lg:flex grid lg:w-4/5 w-7' onSubmit={handleSubmit}>
        <input className=''
          type="text"
          placeholder="Edit player name"
          name="name"
          value={player.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Edit player age"
          name="age"
          value={player.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Edit player position"
          name="position"
          value={player.position}
          onChange={handleChange}
        />
        <button className='bg-green-600 lg:ml-3 lg:w-[70px]'>Save</button>
      </form>
    </>
  );
};
