const typeDefs = `
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
    customers(limit:Int=10, offset:Int=0): [Customer]!
    customerCount: Count
    customer(id:Int) : Customer
  }

  type Mutation {
    addCustomer(customer: AddCustomerInput): Customer
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