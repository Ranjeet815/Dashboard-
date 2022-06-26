import Chart from "./components/Chart/Chart";
import Dashboard from "./components/Dashboard/Dashboard";
import Date from "./components/date_dropdowen/Date";
import Navbar from "./components/Navbar/Navbar";
import Allchanals from "./components/Number2/Allchanals";
import ChannelO from "./components/Number3/ChannelO";
import Ordermb from "./components/Number4/Ordermb";
import Number from "./components/NumberRect/Number";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Date/>
      <Number/>
      <Allchanals/>
      <ChannelO/>
      <Ordermb/>
      <Dashboard/>
      <Chart/>
    </div>
  );
}

export default App;
