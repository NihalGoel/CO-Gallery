import menu from '../components/menu.module.css';
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import  'jquery.marquee';

export default function Menu({ children }) {
  const el = useRef();

  useEffect(function() {
    const $el = $(el.current);

    $el.marquee({
      duration: 5000,
      gap: 50,
      delayBeforeStart: 0,
      direction: 'left'
    });
  });

  return (
    <div ref={el}>
      I'm using jQuery.Marquee with React!!!!
    </div>
  );
}
