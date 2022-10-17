
import { Typography ,styled } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTranscations from './Components/NewTransactions';
import Transactions from './Components/Transactions';
import { useState } from 'react';

const Typographycss = styled(Typography)`
margin : 10px 0;
font-size : 35px;
color:blue;
text-transform:uppercase;
`
const Component = styled(Box)`
display:flex;
background:#fff;
width:800px;
padding:10px;
border-radius:20px;
margin:auto;
&>div{
  height:70vh;
  width:50%;
  padding:10px;
}`

function App() {
  
  const [transactions, setTransactions] = useState([
    {id:1, text:'mommos', amount:-20},
    {id:2, text:'salary', amount:+3000},
    {id:3, text:'book', amount:-100},
    {id:3, text:'bonus', amount:+1500}  
  ])
 
  

  return (
    <Box className="App">
      <Typographycss>Expense tracker</Typographycss>
      <Component>
        <Box>
        <Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions} />
        <NewTranscations setTransactions={setTransactions}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;
