const { addCustomer: addCustomerController } = require("./controllers/customers");
const { getCustomers, getCustomersCount, findOneCostomer } = require("./services/customers");

const resolvers = {
  Query: {
    customers: async (_, { limit = 10, offset = 0 }) => {
      const customers = await getCustomers(limit, offset)
      return customers
    },
    customerCount: async () => {
      const count = await getCustomersCount()
      return {count}
    },
    customer: async (_, { id }) => {
      const customer = await findOneCostomer(id)
      return customer
    },
  },
  Mutation: {
    addCustomer: async (_, { name, email, contact, status }) => {
      const res = await addCustomerController(name, email, contact, status)
      return res
    }
  }
};

module.exports = resolvers;
