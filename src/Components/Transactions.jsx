import React from 'react'
import {Typography,Box,Divider,List} from "@mui/material"
import Transcation from './Transcation'
const Transactions = ({transactions,setTransactions}) => {
  return (
    <Box>
        <Typography>Transaction History</Typography>
        <Divider/>
        <List>
            {
                transactions.map(transaction =>(
                    <Transcation transaction={transaction} setTransactions={setTransactions} transactions={transactions} />
                ))
            }
        </List>
    </Box>
  )
}

export default Transactions