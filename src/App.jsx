import { useState } from 'react'

import './App.css'
import Forcast from './components/forcast'
import cloudy from './assets/cloudy.png'
import sunny from './assets/sunny.png'
import rainy from './assets/rainy.png'
import sunnyBg from './assets/sunny-bg.jpg'


function App() {
  const currentDate=new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [day, setDay] = useState(daysOfWeek[currentDate.getDay()]);
  const imgs=[cloudy,sunny,rainy];
  const [img,setImg]=useState(imgs[0]);

  return (
    <div className="container-fluid bg-img ">
      <div className="row">
        <div className='col-4 '>
          <div className=' d-flex justify-content-around align-items-center '>
            
          </div>
          
        </div>
        <div className='col-8'>
          <div className='row m-2'>
            <div className='d-flex justify-content-around align-items-center  '>
              <div><Forcast day={daysOfWeek[0]} img={imgs[0]} temparature="25" ></Forcast></div>
              <div><Forcast day={daysOfWeek[1]} img={imgs[2]} temparature="25"></Forcast></div>
            
              <div><Forcast day={daysOfWeek[2]} img={imgs[1]} temparature="25" ></Forcast></div>            
            </div>
          </div>

          <div className='row m-2'>
            <div className='d-flex justify-content-around align-items-center  '>
              <div><Forcast day={daysOfWeek[4]} img={imgs[1]} temparature="25" ></Forcast></div>
              <div><Forcast day={daysOfWeek[5]} img={imgs[2]} temparature="25"></Forcast></div>
            
              <div><Forcast day={daysOfWeek[6]} img={imgs[0]} temparature="25" ></Forcast></div>            
            </div>
          </div>
          
        </div>
      </div>
    </div>
        
  )
}

export default App
