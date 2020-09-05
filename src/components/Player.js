import React from 'react';
import './Player.css';
import { useDataLayerValue } from './DataLayer';

const Player = ({ spotify }) => {
  const [_, dispatch] = useDataLayerValue();

  return (
    <div className="player">
      <div className="player__body"></div>
      {/*sidebar*/}
      {/*header*/}
      <button
        onClick={() => {
          dispatch({ type: 'SET_TOKEN', token: null });
        }}
      >
        Log Out
      </button>
      {/*footer*/}
    </div>
  );
};

export default Player;
