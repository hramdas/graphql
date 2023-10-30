import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { gql, useQuery } from "@apollo/client";
import { deleteCustomerAPI, getCustomersAPI, } from '../api/customers';
import './customers-list.css'
import AddCustomer from './AddCustomer';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import EditCustomer from './EditCustomer';
import CustomersList from './CustomersList';
import { getCustomersWithCount } from '../graphqlQueries';

export default function Customers() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [addCustomerModal, setAddCustomerModal] = useState(false)
  const [editCustomerModal, setEditCustomerModal] = useState(false)
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)
  const [deleteCustomerId, setDeleteCustomerId] = useState()
  const [customerToEdit, setCustomerToEdit] = useState()

  const { data, loading } = useQuery(getCustomersWithCount)
  const {customersCount, customers} = data || {}

  const handleAddCustomerModal = () => {
    setAddCustomerModal(!addCustomerModal)
  }
  const handleEditCustomerModal = (customer) => {
    setCustomerToEdit(customer)
    setEditCustomerModal(!editCustomerModal)
  }
  const handleEditModal = ()=>   setEditCustomerModal(!editCustomerModal)
  const handleConfirmDeleteModal = (id) => {
    setDeleteCustomerId(id)
    setConfirmDeleteModal(!confirmDeleteModal)
  }
  const handlePage = (event, newPage) => setPage(newPage)

  const handleDeleteCustomer = async (id) => {
    const data = await deleteCustomerAPI(deleteCustomerId)
    setConfirmDeleteModal(!confirmDeleteModal)
  }
 
  useEffect(() => {
 
  }, [page])
  
  if (loading) return <div>Loading ... </div>
  console.log("data", data)
  return (
    <div className="customers">
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '5px 2%'}}> 
        <Button variant="contained" size="small" onClick={handleAddCustomerModal}>Add Customer</Button>
      <div className="customers-count">Customers count - {customersCount?.count}</div></div>
    
      <CustomersList customers={customers} customersCount={customersCount?.count} limit={limit} page={page} handlePage={handlePage} handleConfirmDeleteModal={handleConfirmDeleteModal} handleEditCustomerModal={handleEditCustomerModal} /> 

      {/* /Create customer */}
      {/* <AddCustomer open={addCustomerModal} handleClose={handleAddCustomerModal}  fetchCustomers={fetchCustomers} /> */}
      
      {/* Edit customer */}
      {/* <EditCustomer open={editCustomerModal} handleClose={handleEditModal} customer={customerToEdit} fetchCustomers={fetchCustomers}/> */}

      <ConfirmDeleteModal open={confirmDeleteModal} handleClose={handleConfirmDeleteModal} handleDeleteCustomer={handleDeleteCustomer} />
    </div>
  )
}
