import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Shared from './pages/shared/Shared'
import MainPage from './pages/main/MainPage'
import PortfolioPage from './pages/portfolio/PortfolioPage'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://api.badeev.info/graphql?'
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Shared>
          <Switch>
            <Route path='/' component={MainPage} exact />
            <Route path='/portfolio' component={PortfolioPage} />
          </Switch>
        </Shared>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
