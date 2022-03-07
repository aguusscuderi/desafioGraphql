
const  { buildSchema } = require('graphql')

let schema = buildSchema(`

    type Product {
        title: String
        price: String
        id: ID!
    }

    type Query {
        getAllProducts: [Product]
    }

    input InputProduct {
        title: String
        price: String
    }

    type Mutation {
        createProduct(data: InputProduct): Product
        deleteProduct(id: ID!): [Product]
        updateProduct(id: ID!, data: InputProduct): [Product]
    }
    
`)

module.exports = { schema } 