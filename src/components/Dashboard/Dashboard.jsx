import React from 'react'
import Pie from '../Piechart/Pie'
import Toggle from '../Toggle/Toggle'
import './Dashboard.css'
import dash  from '../../assets/dash.svg'
import circle from '../../assets/circle.svg'
const Dashboard = () => {
  return (
    <div className='parentContainer'>
        <div className='Left'>
        <span className='label'>Order Distribution</span>
        <span className='label rg-l'>Orders</span>
        <Toggle/> 
        <span className='label rg-l'>Amount</span>
        <div className='piechart'>
      <Pie/>
  <ul className="b">
  <li>Swiggy <span className='a'>  44 %</span></li>
  <li>Zomato<span className='a'>18 %</span></li>
  <li>Amazon<span className='a'>9 %</span></li>
  <li>EatFit<span className='a'>29 %</span></li>
</ul>
        </div>
        </div>
        <div className='center'>
          <div className='labelcenter'>
          <span>Product Distribution</span>
          </div>
         <img src={dash} alt="rectangle" className='imgrect' />
        </div>
        <div className='rightc'>
        <div className='labelcenter'>
          <span>Brand Distribution</span>
          </div>
          <img  src={circle} alt="rectagle" className="imgrect"/>
        </div>

    </div>
  )
}

export default Dashboard


