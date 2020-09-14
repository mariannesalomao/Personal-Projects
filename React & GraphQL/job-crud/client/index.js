import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "react-apollo"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import './style/style.css'

import JobList from './components/JobsList'
import JobCreate from './components/JobCreate'
import JobDetail from './components/JobDetail'

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
})

const client = new ApolloClient({
  link: createHttpLink({ uri: "/graphql" }),
  cache
})
const Root = () => {
  return (
      <ApolloProvider client={client}>
        <HashRouter >
            <Route exact path="/" component={JobList} />
            <Route exact path="/jobs/new" component={JobCreate} />
            <Route path="/jobs/:id" component={JobDetail} />
        </HashRouter>
      </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
