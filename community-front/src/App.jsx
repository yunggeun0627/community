import React from 'react';
import RootRoute from './routes/RootRoute';
import RootLayout from './components/Layout/RootLayout/RootLayout';

function App(props) {
    return (
        <RootLayout>
            <RootRoute />
        </RootLayout>
    );
}

export default App;