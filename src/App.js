import React  from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from 'react-router-dom';

import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
import Profile from './scenes/profile';
import Calendar from './scenes/calendar';
import FAQ from './scenes/faq';

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
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
