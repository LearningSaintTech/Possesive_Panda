import React, { useRef } from 'react';
import { GoArrowRight } from "react-icons/go";

const allowedCharacters = ['a', '%', 'z', '3', '&', 'l', '@', '*', '7', 'b', '#', '?', 'w', '5', '$', 'q', '9', 'x', '^', 'k'];

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
  return allowedCharacters[randomIndex];
}

function createEventHandler(text, textContentRef) {
  let isInProgress = false;

  return function handleHoverEvent() {
    if (isInProgress) return;

    const textContent = textContentRef.current;
    if (!textContent) return;

    const randomizedText = text.split('').map(getRandomCharacter).join('');

    for (let i = 0; i <= text.length; i++) {
      isInProgress = true;

      setTimeout(() => {
        const nextIndex = i;
        if (textContent) {
          textContent.innerHTML = `${text.substring(0, nextIndex)}${randomizedText.substring(nextIndex)}`;
        }

        if (nextIndex === text.length) {
          isInProgress = false;
        }
      }, i * 40);
    }
  };
}

const TextHoverButton = ({ text }) => {
  const textContentRef = useRef(null);
  const eventHandler = createEventHandler(text, textContentRef);

  return (
    <a
      className="text-hover-effect"
      href="#"
      onMouseOver={eventHandler}
      style={styles.link}
    >
      <span className="text-content" ref={textContentRef}>{text}</span>
      <GoArrowRight className="ml-2 md:ml-5 size-[3.5vw] md:size-[2vw] lg:size-[1.5vw]" />
    </a>
  );
};

const styles = {
    link: {
      display: 'flex', 
      alignItems: 'center', 
      cursor: 'pointer',
      color: 'white',
      width: '13.542vw',
      paddingTop: '1.615vw',
      paddingLeft:'2.448vw',
      paddingBottom: '1.615vw',  // Corrected from paddingButtom to paddingBottom
      fontFamily: 'Poppins',
      fontSize: '24px',  // Added 'px' unit
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      letterSpacing: '0.24px',  // Added 'px' unit
      textTransform: 'uppercase',
      borderRadius: '65.5px',
      border: '1px solid #4D4D4D',
      background: '#1D1D1D',
    }
  };
  

export default TextHoverButton;
