import React from 'react';
import './forcast.css';
import cloudy from '../assets/cloudy.png';

export default function Forcast(props) {
  return (
    <div className=" d-flex justify-content-center align-items-center bg-color box-size ">
      <div className="row">
        <div className="col">
          <h3 className="text-center">{props.day}</h3>
          <hr />
          <img src={props.img} className="img-fluid size mx-auto d-block" alt="Weather Icon" />
          <h3 className="text-center">{props.temparature} °C</h3>
        </div>
      </div>
    </div>
  );
}
