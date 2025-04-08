import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/global.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet  } from 'react-helmet';
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Helmet >
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </Helmet >
);

