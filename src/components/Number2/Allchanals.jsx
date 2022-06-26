import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import '../NumberRect/Number.css'
const Allchanals = () => {
  return (
    <div className='parentNum'>
    {/* first */}
    <div className='number1'>
        <span className='num'>2,04,441</span>
        <span className='infoAll'>ORDERS IN MB & CHANNEL</span>
    </div>
     {/* Second */}
     <div className='number2'>
        <span className='num'><CurrencyRupeeIcon/>7,79,10,688.00</span>
        <span className='info'>Paid by Users</span>
    </div>
    {/* third */}
    <div className='number3'>
        <span className='num'><CurrencyRupeeIcon/>1,17,49,134.00</span>
        <span className='info'>Commission</span>
    </div>
    {/* four */}
    <div className='number4'>
        <span className='num'><CurrencyRupeeIcon/>35,74,567.00</span>
        <span className='info'>Govt. Tax</span>
    </div>

    {/* five */}
    <div className='number5'>
        <span className='num'><CurrencyRupeeIcon/>6,25,86,987.00</span>
        <span className='info'>Net Payable</span>
    </div>

</div>
  )
}

export default Allchanals