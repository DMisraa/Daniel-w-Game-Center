import React, { useRef, useEffect } from "react";
import './player.css'



function Player({ isEditing, handlePlayerName, handleEdit, name, isYellowActive, isRedActive }) {
  const inputRef = useRef(null);

  let playerCSS 

  if (isYellowActive) {
   playerCSS += ' yellow-active active' 
  } else if (isRedActive) {
    playerCSS += ' red-active active' 
  }

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleEdit();
    }
  }

  return (
    <li className={playerCSS} >
      <span className= 'player' >
        {!isEditing ? (
          <span className="player-name"> {name} </span>
        ) : (
          <input
            ref={inputRef}
            placeholder={name}
            required
            type="text"
            onChange={handlePlayerName}
            onKeyPress={handleKeyPress}
          />
        )}
      </span>
      <button onClick={handleEdit}> {isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}

export default Player;
