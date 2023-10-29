const typeDefs = `
  type Book {
    id:ID
    title: String
    author: String
  }
  type Customer {
    customerId:ID!
    name: String!
    email: String
    contact: String
    status: StatusType!
  }


  type Query {
    books: [Book]
    book : Book
    customers(limit:Int=10, offset:Int=0): [Customer]
    customer : Customer
  }


  enum StatusType {
    Active
    Inactive
  }
`;

module.exports = typeDefs