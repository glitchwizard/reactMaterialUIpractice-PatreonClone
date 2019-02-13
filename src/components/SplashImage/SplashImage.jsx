import React from 'react';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';

function SplashImage(){

  const overlay = {
    display: 'block',
    color: 'grey',
    position: 'absolute',
    top: '25%',
    textAlign: 'center',
    marginLeft: '25%',
    marginRight: '25%',
    fontFamily: 'America, sans-serif',
    fontWeight: 'bolder',
    fontSize: '40px',
    height: '25%',
    zIndex: '10',

  }

  const playerWrapper = {
        bottom: '0px',
        left: '0px',
        position: 'relative',
        right: '0px',
        top: '0px',
        overflow: 'hidden',
        display: 'block',
        border: '1px red solid',
        maxHeight: '556px'
}

  const reactPlayer = {
  objectFit: 'cover',
  }

  return(
    <div style={playerWrapper} id="playerWrapper">
      <ReactPlayer
        url='https://c5.patreon.com/external/landing_pages/video/what_is_patreon_background.mp4'
        style={reactPlayer}
        playing
        width='100%'
        height='100%'
        id='ReactPlayer'
      />
    <div style={overlay} id="overlay">
        <p>
          Patreon powers membership businesses for creators
        </p>

        <Button
        variant="contained"
        color="primary">
        WHAT IS PATREON
        </Button>

        <Button style={{margin: '20px'}}
        variant="contained"
        color="primary">
        START MY PAGE
        </Button>
        </div>


    </div>

  )
}

export default SplashImage;
