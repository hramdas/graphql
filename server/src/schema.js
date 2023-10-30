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
  type Count{
    count: Int
  }


  type Query {
    books: [Book]!
    book : Book
    customers(limit:Int=10, offset:Int=0): [Customer]!
    customerCount: Count
    customer(id:Int) : Customer
  }

  type Mutation{
    addCustomer(customer:AddCustomerInput): Customer
  }

  enum StatusType {
    Active
    Inactive
  }

  input AddCustomerInput{
    name: String!
    email: String
    contact: String
    status: StatusType!
  }
`;

module.exports = typeDefs