import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Customers from './components/Customers'
import { Stack } from '@mui/material'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_SERVER_BASE_URL + "/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Stack spacing={2}>
          <Header />
          <Customers />
        </Stack>
      </>
      </ApolloProvider>
  )
}

export default App
