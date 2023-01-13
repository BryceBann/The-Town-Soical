import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Reg/Login';
import Home from './components/Home/Home';
import { Register } from './components/Login/Reg/Register';
import { createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [currentForm, setCurrentForm] = useState( 'login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName)
  // }
  return (
    <ApolloProvider client={client}>
   <Router>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
   </Router>
    </ApolloProvider>
  );
}

export default App;
