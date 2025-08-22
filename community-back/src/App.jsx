import React from 'react';
import RootLayout from './components/Layout/RootLayout/RootLayout';
import RootRoute from './routes/RootRoute';
import Compass from './Pages/Compass/Compass';

function App(props) {
  return (
      <RootLayout>
        <Compass />
      </RootLayout>
  );
}

export default App;
