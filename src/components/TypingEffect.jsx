import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const phrases = ["lover", "Gujrathi", "Rajasthani"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText(prevText => prevText + phrases[phraseIndex][charIndex]);
      setCharIndex(prevCharIndex => prevCharIndex + 1);
    }, 100); // Adjust typing speed here

    if (charIndex === phrases[phraseIndex].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setText('');
        setCharIndex(0);
        setPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
      }, 2000); // Pause before switching phrases
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, phraseIndex]);

  return (
    <h3
    className="
      text-4xl sm:text-6xl md:text-8xl 
      font-bold leading-tight 
      text-red-500 mb-12 md:mb-20 
      ml-[5vw] sm:ml-[10vw] md:ml-[13vw]"
    style={{
      fontFamily: 'Dancing Script, cursive',
      fontWeight: 600,
      fontStyle: 'normal',
    }}
  >
    I'm a {text}
  </h3>
  

  );
};

export default TypingEffect;
