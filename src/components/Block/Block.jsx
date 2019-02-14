import React from 'react';
import Dollarsvg from './Dollarsvg';
import LightbulbSVG from './LightbulbSVG';
import SubBlock from './SubBlock';

const blockStyles= {
  height:'432px',
  backgroundColor: '#052d49',
  color: 'white',
  width: '100%',
  padding: '48px',
  display: 'block'
}
const centerDiv = {
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  fontSize: '16px',
  height: '320px',
  justifyContent: 'flex-start',
  margin: 'auto',
  padding: '0px',
  width: '752px',
}

var masterMessageList = [
  {
    message: 'A meaningful revenue stream Fans pay you a subscription amount of their choice in exchange for exclusive experiences & behind-the-scenes content.',
    image2: 'Dollarsvg'
  },
  {
    message: 'Regain creative freedom Predictable income from your patrons means you can create on your terms. No strings attached.',
    image2: 'LightbulbSVG'
  },
  {
    message: 'Over $350 million sent to creators An average patron pays more on a monthly basis than consumers pay for Netflix, Spotify, or Amazon Prime.',
    image2: 'Dollarsvg'
  }
];

function Block(){
  return(

    <div style = {blockStyles} >
      <div style = {centerDiv}>
        {masterMessageList.map( (mess,index) =>
        <SubBlock message = {mess.message}
                  Imagesvg = {mess.image2}
        key={index} />
      )}

      </div>
    </div>
  )
}

export default Block;
