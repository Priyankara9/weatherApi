import { useState ,useEffect} from 'react'

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
  const [data,setData]=useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {     
        const fetchData = async () => {
          try {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2cc1f2b7645a443298131959242502&q=walasmulla&days=7&aqi=no&alerts=no`);
            if (!response.ok) {
              throw new Error("Network response not ok");
            }
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error("Fetch error:", error);
          }
        };
        fetchData();
        const intervalId = setInterval(() => {
          // Update the current time state variable every 10 second
          setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(intervalId);
      }, [currentTime]);
  

  return (
    <div className="container-fluid bg-img ">
      <div className="row height-row">
        <div className='col-lg-9 col-md-7 colsm-12 mt-3'><h2 className="ms-auto">Weather Application</h2></div>
        <div className='col-lg-2 col-md-4 col-sm-6 mt-3'><input type="search" placeholder='Search by City ' className='form-control'/></div>
       
       
      </div>
      <div className="row mt-3">
        <div className='col-lg-4 col-md-5 col-sm-12 mb-4'>
        {data && (<div className='container text-center d-flex justify-content-center align-items-center'>
            <div className=' current-Size bg-color'>

             <div className='row d-flex justify-content-center align-items-center'>
                  <div className='col-5 mb-3'>
                  <img src={imgs[0]} className="img-fluid size mx-auto d-block" alt="Weather Icon" />
                  </div>
                  <div className='col-7'><h3 className="text-center"><p>{data.current.temp_c} °C</p></h3></div>
                  <div className='col-12'><p id='city'>{data.location.name}</p></div>
                  <div className='col-12 mb-3'><span>{data.location.localtime}</span></div>
                  <div className='col-5  me-3' style={{backgroundColor:'green'}}><p>wind speed</p><p>{data.current.wind_kph}km/h</p></div>
                  <div className='col-5 ' style={{ backgroundColor: 'blue' }}><p>Humidity</p><p>{data.current.humidity}gm/m3</p></div>
                  <div className='col-6 mt-3'><p>Heat Index</p></div>
                  <div className='col-6 mt-3'>{data.current.feelslike_c}</div>
                  <hr />
                  <div className='col'><p id='condition'>{data.current.condition.text}</p></div>
           

             </div>
            </div>
          </div>)}
        
          
        </div >
        <div className='col-lg-8 col-md-7 col-sm-12 '>
          
         <div className='row mb-3  '>
            
              <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'><div><Forcast day={daysOfWeek[0]} img={imgs[0]} temparature="25" ></Forcast></div></div>
              <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'><div><Forcast day={daysOfWeek[1]} img={imgs[2]} temparature="21"></Forcast></div></div>
            
              <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'><div><Forcast day={daysOfWeek[2]} img={imgs[1]} temparature="25.7" ></Forcast></div></div>            

                   
              <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'><Forcast day={daysOfWeek[4]} img={imgs[1]} temparature="26.4" ></Forcast></div>
              <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'><Forcast day={daysOfWeek[5]} img={imgs[2]} temparature="27"></Forcast></div>            
              <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center'><Forcast day={daysOfWeek[6]} img={imgs[0]} temparature="23.2" ></Forcast></div>             
                   
          </div>
        </div>
      </div>
    </div>
        
  )
}

export default App
