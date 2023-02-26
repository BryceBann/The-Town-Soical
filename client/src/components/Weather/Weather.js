import React, { useEffect, useState} from 'react';
// import './styles.css';
// import moment from 'moment';
import { Card } from 'react-bootstrap'

const WeatherCard = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

      useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=42bd4df4c8216e16be280cf95790436b`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

    return (
        <>
        {data && (
            <Card className="weather">
                <Card.Body>
                    <Card.Title>Weather</Card.Title>
                    <Card.Text>
                        City: {data.name}
                        <p>Temperature: {data.main.temp}°C</p>
                        <p>Feels like: {data.main.feels_like}°C</p>
                        <p>Humidity: {data.main.humidity}%</p>
                        <p>Wind: {data.wind.speed}m/s</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )}
        
        </>
);
    }

export default WeatherCard;