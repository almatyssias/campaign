import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Workspace from './Components/Workspace';
import mainTheme from './Themes/mainTheme';

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Workspace />
    </ThemeProvider>
  );
};

export default App;
