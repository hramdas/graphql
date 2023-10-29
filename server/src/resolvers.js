const { getCustomers, getCustomersCount } = require("./services/customers");

const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


const resolvers = {
  Query: {
    books: () => books,
    book: () => books[0],
    customers: async (_, { limit = 10, offset = 0 }) => {
      const customers = await getCustomers(limit, offset)
      return customers
    },
    // customer: async () => {
    //   const customer = await getCustomers(limit, offset)
    //   return customer
    // },
  },
};

module.exports = resolvers;
