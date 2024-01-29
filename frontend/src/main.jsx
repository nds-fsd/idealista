import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider';
// import { Axios } from "axios";

import App from "./App";
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools ></ReactQueryDevtools>
    </QueryClientProvider>
  </UserContextProvider>
  </BrowserRouter>
)