# Creating a simple Job CRUD app with NodeJS, MongoDB, GraphQL, React and Apollo

# Description

A simple Apollo + GraphQL + NodeJs + Express + MongoDB + React CRUD

# Algumas Considerações

Por conta do meu trabalho, eu não tive tempo de me aprofundar e aprimorar esse teste.
Na parte do front-end, com o React, simplesmente optei por implementar com Class Components porque tenho um
projeto parecido com o teste que estou enviando para vocês.

Gostaria de ter feito o projeto usando Hooks, mas eu não tive muito tempo para me concentrar para
implementar o front-end de forma mais performática.

Segue na documentação tudo que eu fiz no projeto.

### Set Up
Clone and install:

```bash
git clone https://github.com/mariannesalomao/job-crud
npm/yarn install
```

Create a cluster in MongoDB Atlas and add connection string in your server.js file where prompting MONGO_URI = ''
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Create a cluster](https://docs.atlas.mongodb.com/create-new-cluster/)

### Running the Application

Run it using:

```bash
npm run dev
```
- And in browser App will running on http://localhost:4000/
- And Graphql server will be running on http://localhost:4000/graphql

### Project Structure

    .
    ├── client                  # Client folder
            ├── components              # components folder
            ├── queries                 # queries folder
            └── index                   # index.js file
    ├── server                  # Server folder
            ├── models                  # Model folder
            ├── schema                  # Schema folder
            └── server                  # server.js file

#### Server directory
[http://localhost:4000/graphql](http://localhost:4000/graphql)

**server.js** - This is the main file for running the server of backend. This file contains all the required modules, establish the mongoose connection and GraphQL connection.

**models** - This folder contains mongoose **job** and **job description** schema model that represents set of information's for job and your descriptions records in database.

**schema** - And Finally this schema folder contains the most of the GraphQL logic. The schema/schema.js takes all the types and mutations
- **GraphQL Types** : We need to design GraphQL user schema to specify the types for API using GraphQL schema language. Inside we got **job_type.js** and **job_description_type.js** of types that define user schema.
- **GraphQL Queries** : Inside schema/root_query_type.js file write a very simple GraphQl query and mongoose query used inside to retrieve jobs/jobs description list of data from mongodb database.
- **GraphQL Mutation**: Inside **mutations.js** file we create 4 methods addJob, addJobDescription, likeJobDescription and deleteJob. add methods creates new jobs/jobs description, like method updates the number of likes, delete method deletes the record.

#### Client directory
[http://localhost:4000](http://localhost:4000)

**index.js** - Here we create a Apollo Client to establish connection to our GraphQL Server API, And Routing with React

**queries** - Here we define Apollo GraphQL queries by using `graphql-tag`. Graphql Tag is a JavaScript template literal tag that parses GraphQL queries.

**components** - Component folder consist of files responsible for creating jobs/jobs description, likes and deleting the job. we used `react-apollo` to connect our components and pass our **mutations** and **queries** defined using `graphql-tag`
