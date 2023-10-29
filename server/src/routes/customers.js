const { addCustomer, updateCustomer, getCustomers, deleteCustomer } = require("../controllers/customers")

module.exports = (app) => {
  app.post('/customer', addCustomer),
    app.patch('/customer/:id', updateCustomer)
  app.get('/customers', getCustomers)
  app.delete('/customer/:id', deleteCustomer)
}