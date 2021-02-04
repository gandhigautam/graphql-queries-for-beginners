import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import posts from "./data";

const typeDefs = gql`
  type Post {
    id: String
    title: String
    likes: [Like]
  }

  type Like {
    id: String
    name: String
  }

  type Query {
    posts: [Post]
    post(id: String!): Post
  }
`;

const resolvers = {
  Query: {
    post: (_, args) => posts.find((post) => post.id === args.id),
    posts: () => posts,
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
