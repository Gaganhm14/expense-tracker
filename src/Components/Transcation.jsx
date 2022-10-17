import React from 'react'
import {ListItem,ListItemText ,styled,ListItemIcon} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


const Detail = styled(ListItem)`
margin-top:10px;`
const Transcation = ({transaction,setTransactions,transactions}) => {

const color = transaction.amount > 0 ? 'green':'red';

const deleteTransaction =(id)=>{
    setTransactions(transactions.filter(transaction => transaction.id !== id))
}
  return (
    <div>
        <Detail style={{background:`${color}`,color:"white"}}>
        <ListItemIcon><DeleteIcon onClick={()=>deleteTransaction(transaction.id )} /></ListItemIcon>
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{transaction.amount}</ListItemText>
        </Detail>
    </div>
  )
}

export default Transcation;