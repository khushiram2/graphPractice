export const typeDefs=`#graphql
type Game {
    id:ID!
    title: String!
    platform:[String!]!
}
type Review {
    id:ID!
    rating:Int!
    content:String!
}
type Author {
    id:ID!
    name:String!
    verified:Boolean!
}
type Query {
    reviews:[Review]
    games:[Game]
    author:[Author]
}
`




//5 basic data types

//int --- whole numbers
// float --- decimals
// string -- String
//boolean --- true/false
//ID -- Key

// make a feild required by adding ! after the type definition