import React from 'react';

export function Greetings({ lang, greeting, children }) {
  if (lang === 'de') {
    greeting = 'Hallo';
  }
  if (lang === 'fr') {
    greeting = 'Bonjour';
  }
  if (lang === 'en') {
    greeting = 'Hello';
  }
  if (lang === 'es') {
    greeting = 'Hola';
  }
  return (
      <div className='idCard'>
          <p lang={lang}>{greeting} {children}</p>
      </div>
  )
}
