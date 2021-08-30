const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    
  }

  type User {
    
  }

  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;
