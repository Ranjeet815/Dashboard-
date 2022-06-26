import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import '../NumberRect/Number.css'
const ChannelO = () => {
  return (
    <div className='parentNum'>
        {/* first */}
        <div className='number1'>
            <span className='num'>38,709</span>
            <span className='infoAll'>ORDERS IN CHANNEL ONLY</span>
        </div>
         {/* Second */}
         <div className='number2'>
            <span className='num'><CurrencyRupeeIcon/>2,87,490.00</span>
            <span className='info'>Paid by Users</span>
        </div>
        {/* third */}
        <div className='number3'>
            <span className='num'><CurrencyRupeeIcon/>43,354.00</span>
            <span className='info'>Commission</span>
        </div>
        {/* four */}
        <div className='number4'>
            <span className='num'><CurrencyRupeeIcon/>13,190.00</span>
            <span className='info'>Govt. Tax</span>
        </div>

        {/* five */}
        <div className='number5'>
            <span className='num'><CurrencyRupeeIcon/>2,31,404.00</span>
            <span className='info'>Net Payable</span>
        </div>

    </div>
  )
}

export default ChannelO