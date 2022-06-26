import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import '../NumberRect/Number.css'

const Ordermb = () => {
  return (
    <div className='parentNum'>
    {/* first */}
    <div className='number1'>
        <span className='num'>25,760</span>
        <span className='infoAll'>ORDERS IN MB ONLY</span>
    </div>
     {/* Second */}
     <div className='number2'>
        <span className='num'><CurrencyRupeeIcon/>96,531.00</span>
        <span className='info'>Paid by Users</span>
    </div>
    {/* third */}
    <div className='number3'>
        <span className='num'><CurrencyRupeeIcon/>14,557.00</span>
        <span className='info'>Commission</span>
    </div>
    {/* four */}
    <div className='number4'>
        <span className='num'><CurrencyRupeeIcon/>4,428.00</span>
        <span className='info'>Govt. Tax</span>
    </div>

    {/* five */}
    <div className='number5'>
        <span className='num'><CurrencyRupeeIcon/>77,563.00</span>
        <span className='info'>Net Payable</span>
    </div>

</div>
  )
}

export default Ordermb