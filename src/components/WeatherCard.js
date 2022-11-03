function WeatherCard({ weatherInfo }) {

    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        city,
        speed,
        country,
        sunset,
    } = weatherInfo;

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()} PM`;


    return (

        <div className="weatherInfo">
            <div className="firstpart">
                <div className="temp">
                    <span className="temperature">{Math.floor(temp)}<sup>&deg; C</sup></span>
                </div>

                <div className="description">
                    <div className="place">{city}, {country}</div>
                    <div className="weatherCondition">{weatherMood}</div>
                </div>
            </div>

            <div className="secondpart">
                <div className="temp-minmax info">
                    <i className="wi wi-sunset"></i>
                    <p className="align">
                        {timeStr}<br /> Sunset
                    </p>
                </div>
                <div className="humidity info">
                    <i className="wi wi-humidity"></i>
                    <p className="align">
                        {humidity} <br /> Humidity
                    </p>
                </div>
                <div className="pressure info">
                    <i className="wi wi-strong-wind"></i>
                    <p className="align">
                        {pressure} <br /> Pressure
                    </p>
                </div>
                <div className="wind info">
                    <i className="wi wi-windy"></i>
                    <p className="align">
                        {speed} <br /> Speed
                    </p>
                </div>
            </div>

        </div>


    );
}

export default WeatherCard;