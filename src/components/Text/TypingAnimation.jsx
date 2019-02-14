import React from 'react';
import Typing from 'react-typing-animation';

function TypingAnimation(){
const outerblock = {
  fontSize: '25px',
  textAlign: 'center',
  display: 'block',
  height: '235px',

}
const textBlock = {
  margin: '0',
  width: '50%',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}
const typingAnimationStyles = {
  display: 'inline-block',
  color: 'orange',
  marginRight: '10px',
  marginLeft: '10px',
}
  return(

  <div style={outerblock}>
    <div style={textBlock}>
      Membership allows
      <div style={typingAnimationStyles}>
        <Typing loop = {true}>
          <span> musicians</span>
          <Typing.Backspace count={20} delay={1000}/>
          <span> Writers</span>
          <Typing.Backspace count={20} delay={1000}/>
          <span> Visual Artists</span>
          <Typing.Backspace count={20} delay={1000}/>
          <span> Animators</span>
          <Typing.Backspace count={20} delay={1000}/>
          <span> Photographers</span>
          <Typing.Backspace count={20} delay={1000}/>
          <span> Education Creators</span>
          <Typing.Backspace count={20} delay={1000}/>
          <span> All Creators</span>
          <Typing.Backspace count={20} delay={1000}/>
        </Typing>
      </div>
      like you have to have a direct relationship with your biggest fans, get recurring revenue for your work, and create on your own terms.
    </div>
  </div>

  )
}

export default TypingAnimation;
