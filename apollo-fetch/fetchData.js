const { createApolloFetch } = require('apollo-fetch');


const fetch = createApolloFetch({
  uri: 'http://localhost:3001/graphql',
});

fetch({
  query: '{ posts { title }}',
}).then(res => {
  console.log(res.data);
});

// You can also easily pass variables for dynamic arguments
fetch({
  query: `query PostsForAuthor($id: Int!) {
    author(id: $id) {
      firstName
      posts {
        title
        votes
      }
    }
  }`,
  variables: { id: 1 },
}).then(res => {
  console.log(res.data);
});