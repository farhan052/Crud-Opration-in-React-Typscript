import React, { useState } from 'react';
import { FormProps } from '../types/types';
import './../index.css';
import { Player } from '../types/types';

export const AddPlayerForm: React.FC<FormProps> = ({ addPlayer }) => {
  const initialValue: Player = {
    id: '',
    name: '',
    age: 0,
    position: ''
  };

  const [player, setPlayer] = useState(initialValue);

  const handleChange = e => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPlayer(player);
    setPlayer(initialValue);
  };

  return (
    <>
      <form className=' inline  lg:flex lg:justify-evenly  lg:w-[80vw]  bg-slate-400 p-11 ' onSubmit={handleSubmit}>
        <div className='w-full' >
        <input className='h-8 mt-3 w-full  ' 
          type="text"
          name="name"
          placeholder="Enter player name"
          onChange={handleChange}
          value={player.name}
        /></div>
        <div>
        <input
        className=' h-8 mt-3 w-full'
          type="number"
          name="age"
          placeholder="Enter player age"
          onChange={handleChange}
          value={player.age}
        /></div>
        <div>
        <input className='h-8 mt-3 w-full'
          type="position"
          name="position"
          placeholder="Enter player position"
          onChange={handleChange}
          value={player.position}
        /></div>
        <div className='w-full  justify-center'>
        <button className='h-14 lg:ml-4 bg-green-700 lg:mt-0 mt-3 w-full lg:w-10/12'>ADD</button></div>
      </form>
    </>
  );
};
