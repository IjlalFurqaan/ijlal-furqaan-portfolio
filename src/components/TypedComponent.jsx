/* eslint-disable react/prop-types */
// TypedComponent.jsx
import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'; 
import Typed from 'typed.js';

const TypedComponent = ({ strings, typeSpeed = 50, backSpeed = 30, loop = true }) => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={typedElement} />;
};

export default TypedComponent;
