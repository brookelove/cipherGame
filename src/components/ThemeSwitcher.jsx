ipt

import React, { useState } from 'react';

const ThemeSwitcher = ({ setTheme }) => {
  const changeTheme = (theme) => {
    
    setTheme(themes[theme]);
  };

  return (
    <div>
      <button onClick={() => changeTheme('dark')}>🌙</button>
      <button onClick={() => changeTheme('light')}>☀️</button>
      <button onClick={() => changeTheme('sea')}>🌊</button>
    </div>
  );
};

export default ThemeSwitcher;