export const typeDefs=`#graphql


type Record {
    id: ID
    name: String
    position: String
    level: String
    comments:[Comment]
  }
  type Comment{
    record: Record!
    body:String!
  }

  type Query {
    record(id:ID!): Record
    records: [Record!]!
   comments: [Comment!]!
   comment(id:ID!): Comment


  }

  type Mutation {
    createRecord(name: String!, position: String!, level: String!): Record
    deleteRecord(id: ID!): Record
    updateRecord(id: ID name: String, position: String, level: String): Record
  }



`