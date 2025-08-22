import React from 'react';
import RootLayout from './components/Layout/RootLayout/RootLayout';
import RootRoute from './routes/RootRoute';

function App(props) {
  return (
      <RootLayout>
        <RootRoute/>
      </RootLayout>
  );
}

export default App;
