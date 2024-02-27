import React from 'react'

export default function Current(props) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-5'>
            <img src={props.img} className="img-fluid size mx-auto d-block" alt="Weather Icon" />
            </div>
            <div className='col-7'><h3 className="text-center">{props.temparature} °C</h3></div>
            <div className='col-12'><p>{props.city}</p></div>
            <div className='col-7'><span>{props.date}</span></div>
            <div className='col-5'><span>{props.time}</span></div>
            <div className='col-6'><p>wind speed</p><p>{props.speed}km/h</p></div>
            <div className='col-6'><p>Humidity</p><p>{props.humidity}gm/m3</p></div>
            <div className='col-6'></div>
            <div className='col-6'></div>
            <hr />
            <div className='col'></div>

        </div>

    </div>
  )
}
