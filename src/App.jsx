import logo from './logo.svg';
import './App.css';

import LineChart from './components/LineChart';
import SecondChart from './components/SecondChart';
function App() {
  
  return (
    <div className="App">
      
      <div className='mainContainer'>
      
      <img src="petbackground.jpg" alt="" />
 <div className="chart-main">
     <LineChart  />
 </div>
 <h1>10,875</h1>
 <h2>45 days</h2>
 <div className='avg-time'>
  <h3>Avg Time to Adopt by Age Bucket</h3>
  <div>
    <div>
      <div > <p>0-1 Puppy</p> </div><div style={{width:"100px"}}></div><div> <p>30 days</p></div>
    </div>
    <div>
      <div> <p>2-6 Adult </p></div><div style={{width:"140px"}}></div><div> <p>85 days</p> </div>
    </div>
    <div>
      <div> <p>7+ Senior</p></div><div style={{width:"180px"}}></div><div> <p>103 days</p></div>
    </div>
  </div>
  <p>Note:Starts at Date of Transport</p>
 </div>
 <div className='second-chart'>
 <h3>Avg Time to Adopt by Age Bucket</h3>
<SecondChart/>
 </div>
 <div className='proportion'>
  <h3>Proportion of Dogs that...</h3>
   <div>
    <div>
      <div > <p>Get Alongs with Dogs</p> </div> <div> <div style={{width:"87%"}}>87%</div> <div style={{width:"1%"}}></div> <div style={{width:"12%"}}></div> </div>
    </div>
    <div>
      <div> <p>Get Alongs with Cats </p></div> <div> <div style={{width:"29%"}}>29%</div> <div style={{width:"7%"}}></div> <div style={{width:"64%"}} >64%</div> </div>
    </div>
    <div>
      <div> <p>Get Alongs with Kids</p></div> <div> <div style={{width:"58%"}}>58%</div> <div style={{width:"3%"}}></div> <div style={{width:"39%"}}>39%</div> </div>
    </div>
    <div>
      <div> <p>Are Housebroken</p></div><div> <div style={{width:"38%"}}>38%</div> <div style={{width:"6%"}}></div> <div style={{width:"56%"}}>56%</div> </div>
    </div>
  </div>
  <div className='final'>
    <div>
      <div style={{backgroundColor:"#98e2e7"}}></div>
      <div>Does/Are</div>
    </div>
    <div>
    <div  style={{backgroundColor:"#5c6068"}}></div>
      <div>Does Not/Are Not</div>
    </div>
    <div>
    <div  style={{backgroundColor:"#d3d3d3"}}></div>
      <div>Not Sure</div>
    </div>
  </div>
 </div>
 <div className='primary'>
 <h3>Top 10 Primary Breeds (Including Mixes)</h3>
  <div>
    <div>
      <div > <p>Labarador</p> </div><div style={{width:"140px"}}></div><div> <p>1,422</p></div>
    </div>
    <div>
      <div> <p>Pit</p></div><div style={{width:"100px"}}></div><div> <p>838</p> </div>
    </div>
    <div>
      <div> <p>Hound</p></div><div style={{width:"50px"}}></div><div> <p>400</p></div>
    </div>
    <div>
      <div> <p>Shepherd</p></div><div style={{width:"40px"}}></div><div> <p>376</p></div>
    </div>
    <div>
      <div> <p>Terrier</p></div><div style={{width:"35px"}}></div><div> <p>306</p></div>
    </div>
    <div>
      <div> <p>American</p></div><div style={{width:"22px"}}></div><div> <p>157</p></div>
    </div>
    <div>
      <div> <p>Catahoula</p></div><div style={{width:"20px"}}></div><div> <p>150</p></div>
    </div>
    <div>
      <div> <p>Hounds</p></div><div style={{width:"18px"}}></div><div> <p>126</p></div>
    </div>
    <div>
      <div> <p>Australian</p></div><div style={{width:"15px"}}></div><div> <p>108</p></div>
    </div>
    <div>
      <div> <p>Mountain</p></div><div style={{width:"12px"}}></div><div> <p>100</p></div>
    </div>
  </div>

 </div>
 <p className='finaltouch'>designed by<span> Mina Ozen Catherine Callahan</span></p>
      </div>
 
    </div>
  );
}

export default App;


