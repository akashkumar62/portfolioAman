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
  className="text-8xl font-bold leading-tight text-red-500 mb-20 ml-[13vw] "
  style={{
    fontFamily: 'Dancing Script, cursive',
    fontOpticalSizing: 'auto', // This is a newer CSS property and may not be supported in all browsers
    fontWeight: '600', // Replace <weight> with the actual weight value you want
    fontStyle: 'normal'
  }}
>
  I'm a {text}
</h3>

  );
};

export default TypingEffect;
