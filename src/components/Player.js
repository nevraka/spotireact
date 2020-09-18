import React from 'react';
import './Player.css';
import { useDataLayerValue } from './DataLayer';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const Player = ({ spotify }) => {
  const [_, dispatch] = useDataLayerValue();

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      {/* <button
        onClick={() => {
          dispatch({ type: 'SET_TOKEN', token: null });
        }}
      >
        Log Out
      </button> */}
      <Footer />
    </div>
  );
};

export default Player;
