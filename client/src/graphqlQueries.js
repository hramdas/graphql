import { gql } from "@apollo/client";

export const getCustomersWithCount = gql(
  `query getCustomers($limit: Int=10, $offset : Int=0) {
    customers(limit:$limit, offset:$offset) {
      id:customerId
      name
      email
      contact
      status
    }
    customerCount{
      count
    }
  }`
)