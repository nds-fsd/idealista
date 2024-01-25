import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import UserContextProvider from './context/UserContextProvider';
// import { Axios } from "axios";

import App from "./App";
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools ></ReactQueryDevtools>
    </QueryClientProvider>
  </UserContextProvider>
)