const {gql} = require ('apollo-server-express');

const typeDefs = gql`
    type Thought{
        _id: ID,
        thoughtText: String,
        createdAt: String,
        username: String,
        reactionCount: Int,
        reactions: [Reaction]
    }

    type Reaction{
       _id: ID,
       reactionBody: String,
       username: String,
       createdAt: String
    }

    type User{
        _id: ID,
        username: String,
        email: String,
        password: String,
        thoughts: [Thought],
        friends: [User]
    }

    type Auth{
        token: ID!,
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought

    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addThought(thoughtText: String!): Thought
        addReaction(thoughtID: ID!, reactionBody: String!): Thought
        addFriend(friendId: ID!): User
    }
`
module.exports = typeDefs