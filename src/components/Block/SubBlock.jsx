import React from 'react';
import PropTypes from 'prop-types';
import Dollarsvg from './Dollarsvg';

const subBlockStyle = {
  boxSizing: 'border-box',
  display: 'block',
  flexBasis: '33.33%',
  border: '1px solid white',
  flexGrow: '0',
  flexShrink: '0',
  maxWidth: '33.33%',
  paddingLeft: '8px',
  paddingRight: '8px'
}

function SubBlock({message, Imagesvg}){
  return(
    <div style={subBlockStyle}>
      <Imagesvg />{Imagesvg}
        <Dollarsvg />
      <h4>{message}</h4>
    </div>
  )
}

SubBlock.propTypes = {
  message: PropTypes.string.isRequired,
  Imagesvg: PropTypes.string.isRequired
};

export default SubBlock;
