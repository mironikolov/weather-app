import React from 'react'
import Card from 'react-bootstrap/Card';
import sun from '../../images/sun-solid.svg';
import cloud from '../../images/cloud-solid.svg';
import rain from '../../images/cloud-rain-solid.svg';

var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Weathercard( props ) {
    const date = new Date(props.day * 1000);
    const minTemp = (props.minTemp - 273.15).toFixed(2);
    const maxTemp = (props.maxTemp - 273.15).toFixed(2);
    const weather = props.weather;

    let weatherPic;
    switch (weather) {
        case 'Clear':
            weatherPic = sun;
            break;

        case 'Clouds':
            weatherPic = cloud;
            break;

        case 'Rain':
            weatherPic = rain;
            break;

        default:
            weatherPic = sun;
            break;
    }

    return (
        <Card className = "col-6 col-md-2">
            <Card.Body>
                <Card.Img variant="top" src = {weatherPic} />
                <Card.Title>{weekdays[date.getDay()]}</Card.Title>
                <Card.Text> {minTemp} / {maxTemp} {weather}</Card.Text>
            </Card.Body>
        </Card>
    )
}
