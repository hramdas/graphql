import React from 'react'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from './Pagination';

const tableHeadCells = ["ID", "Name", "Email", "Contact", "Status", "Date added", "", ""]

export default function CustomersList({ customers, customersCount, limit, page, handlePage, handleConfirmDeleteModal, handleEditCustomerModal }) {
  
  console.log('customersCount', customersCount)
  return (
    <TableContainer component={Paper}>
      <>
        <Table aria-label="simple table">
          <TableHead sx={{ background: '#dddddd' }}>
            <TableRow>
              {tableHeadCells.map((columnName, index) => (
                <TableCell key={index} sx={{ fontWeight: 700 }}>
                  {columnName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers?.length ? (
                customers.map((customer) => {
                  const {_id, customerId, name, email, contact, status, created_at } = customer
                  const deleteButton = <IconButton onClick={()=>handleConfirmDeleteModal(_id)}><DeleteIcon /></IconButton>
                  const editButton = <IconButton onClick={()=>handleEditCustomerModal(customer)}><EditIcon/> </IconButton>

                  return(
                  <TableRow key={_id}>
                    {[ customerId, name, email, contact, status, created_at, editButton, deleteButton ].map((item, index) => (
                      <TableCell key={index}>{item}</TableCell>
                    ))}
                  </TableRow>)
                })
            ) : (
              <TableRow>
                <TableCell colSpan={6}>No records found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        
        <Pagination
          listCount={customersCount}
          limit={limit}
          page={page}
          handlePage={handlePage}
        />
      </>
  </TableContainer>
  )
}
