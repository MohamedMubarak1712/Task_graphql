const typeDefs = `
      type Signup {
          userName: String!
          email: String!
          password: String!
      }

      type Login {
          message: String!
          success: Boolean!
      }

   

      type Group {
          groupName: String!
          avatar: String
      
      }

      type Query {
          checkLogin(email: String!,password: String!): Login
          getGroupList(groupName: String!): Group
      }

      type Mutation {
          createUser(userName: String!, email: String!, password: String!): Login
          createGroup(groupName: String!, avatar: String): Group
      }

`

export default typeDefs