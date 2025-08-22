import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { global } from './styles/global.js';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: 0,
    }
  }
});

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient} >
    <BrowserRouter>
      <>
        <Global styles={global} />
        <App />
      </>
    </BrowserRouter>
  </QueryClientProvider>
)
