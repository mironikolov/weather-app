import React, { useState, useEffect } from 'react';
import Weathercard from '../Weathercard/Weathercard';
import {env} from '../../env';

export default function Citysearch() {
    
    const [city, setCity] = useState( () => {
        return 'Varna'
    });

    const [data, setData] = useState([]);
    
    function handleChange( event ){
        setCity( event.target.value );
    }
    
    useEffect(() => {
        let data = [];

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${env.weatherApiKey}`)
        .then( response => response.json() )
        .then( json => {
            if (json !== undefined ) {
                data = json.list.filter( (val, index, arr ) => {
                    return ( index % 8 === 0);
                });
            }
            
            setData( data );
        })
        .catch( err => {
            setData( data );
        });
    }, [city]);

    return (
        <>
            <label>
                City:
                <input type = "text" name = "city" onChange = { handleChange } />
            </label>
            <div className = "row">
            {data.map( (item, i) => {
                return <Weathercard key={i}
                day={item.dt}
                minTemp={item.main.temp_min}
                maxTemp={item.main.temp_max}
                weather={item.weather[0].main}/>
            })}
            </div>
        </>
    )
}
