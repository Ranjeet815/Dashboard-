import React,{useState} from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './date.css'
const Date = () => {
  const getInitialState = () => {
    const value = "All";
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='parentContainer'>
      {/* date display */}
        <div className='datecontainer'>
            <span className='dateLabel'>Date Range:</span>
            <span className='dateDisplay'>1 Jan 2022 - 31 Jan 2022 <CalendarMonthIcon className='icon'/></span>
        </div>
        {/* drop dowen value */}
       <div className='dropdowen'>
       <span className='dateLabel'>Channel:</span>
       <select value={value} onChange={handleChange} className="select">
        <option value="All">All</option>
        <option value="Swiggy">Swiggy</option>
        <option value="Zomato">Zomato</option>
        <option value="EatFit">EatFit</option>
      </select>
       </div>
     </div>
  )
}

export default Date