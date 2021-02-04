import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";

const app = express();
const path = "/graphql";

const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path });

app.listen(4000, () => console.log(`Server on ${4000}`));
