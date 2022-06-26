import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Number.css'
const Number = () => {
  return (
    <div className='parentNum'>
        {/* first */}
        <div className='number1'>
            <span className='num'>2,68,910</span>
            <span className='infoAll'>ALL ORDERS</span>
        </div>
         {/* Second */}
         <div className='number2'>
            <span className='num'><CurrencyRupeeIcon/>7,83,00,241.00</span>
            <span className='info'>Paid by Users</span>
        </div>
        {/* third */}
        <div className='number3'>
            <span className='num'><CurrencyRupeeIcon/>1,18,07,879.00</span>
            <span className='info'>Commission</span>
        </div>
        {/* four */}
        <div className='number4'>
            <span className='num'><CurrencyRupeeIcon/>35,92,440.00</span>
            <span className='info'>Govt. Tax</span>
        </div>

        {/* five */}
        <div className='number5'>
            <span className='num'><CurrencyRupeeIcon/>6,28,95,954.00</span>
            <span className='info'>Net Payable</span>
        </div>

    </div>
  )
}

export default Number