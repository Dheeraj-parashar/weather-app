import React from "react";

function DisplayWeather(props){
    const {data}=props;
    console.log(data);
    const iconUrl=""
    return(
        <div>
            <div>
            <span>
                {data.name} {data.sys.country}. weather{" "}
            </span>
            <span>
                as of {new Date().toLocaleTimeString() }
            </span>
            <h1>{Math.floor(data.main.temp -273)}
            <sup>o</sup>C</h1>
            <span>{data.weather[0].description}</span>
            </div>

            <table>
                <tr>
                    <td>
                        <h4>Temperature</h4>
                    </td>
                    <td>{(data.main.temp_min- 273.15).toFixed(2)}/{" "}
                        {(data.main.temp_max- 273.15).toFixed(2)}<sup>o</sup>C
                    </td>
                </tr>

                <tr>
                    <td>
                        <h4>Pressure</h4>
                    </td>
                    <td>{data.main.pressure}</td>
                </tr>

                <tr>
                    <td>
                        <h4>Wind Speed</h4>
                    </td>
                    <td>{data.wind.speed}</td>
                </tr>

                <tr>
                    <td>
                        <h4>Wind Direction</h4>
                    </td>
                    <td>{data.wind.deg}<sup>O</sup></td>
                </tr>
                
            </table>
            
        </div>
    )
}
export default DisplayWeather;