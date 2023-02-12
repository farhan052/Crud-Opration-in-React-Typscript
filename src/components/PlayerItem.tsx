import React, { useState } from 'react';
import { EditPlayerForm } from './EditPlayerForm';
import './../index.css';
export const PlayerItem = ({
  id,
  name,
  age,
  position,
  deletePlayer,
  updatePlayer
}) => {
  const [isEdit, setToggleEditing] = useState(false);

  if (isEdit) {
    return (
      <EditPlayerForm
        id={id}
        name={name}
        age={age}
        position={position}
        updatePlayer={updatePlayer}
        toggleEditForm={setToggleEditing}
      />
    );
  }

  return (
    <>
    <div className=' lg:flex mt-3 lg:justify-evenly lg:w-[80vw] border-spacing-x-1 border-slate-800 border-solid'>
      <h2 className='lg:w-[200px]'>{name}</h2>
      <h3 className='lg:w-[200px]'>Age: {age}</h3>
      <h3  className='lg:w-[200px]'>Position: {position}</h3>
      <button className='w-[70px] bg-blue-700  ' onClick={() => setToggleEditing(!isEdit)}>Update</button>
      <button className='w-[70px] bg-red-700 ml-4 lg:ml-0'  onClick={() => deletePlayer(id)}>Delete</button>
      </div>
    </>
  );
};
