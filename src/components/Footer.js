import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__green" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;