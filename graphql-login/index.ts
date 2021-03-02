import db from './models'

import {GraphQLServer} from 'graphql-yoga'
import typeDefs from './schema'
import resolvers from './resolver'


const server = new GraphQLServer({ typeDefs, resolvers })

db.sequelize.sync();


server.start(() => console.log('Server is running on localhost:4000'))