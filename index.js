import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import express from 'express';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';

import {typeDefs} from "./src/schema.js"

import {resolvers} from "./src/resolvers.js"
const app = express();

app.use(cors());
app.use(express.json());


const server=new ApolloServer({

    //typedefs imported from schema.js
        typeDefs,
    // resolvers call
    resolvers
    
    
    
    })
    
    const {url}=await startStandaloneServer(server,{
    
        listen:{port:8000, key:console.log("runinig")}
     
    })