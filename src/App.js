import React  from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from 'react-router-dom';

import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';

// CssBaseline resets CSS to the defaults and ThemeProvider provides the ability to pass in the themes into material UI.

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
