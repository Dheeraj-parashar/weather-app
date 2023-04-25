import React from "react";

function DisplayWeather(props){
    const {data}=props;
   

    return(
        <div> { (data.cod!==404)? <>
            <div className="output">
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

        <div className="tableContainer">
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
            </table>
            <table>
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
            </>
            :<>
            <h2>{data.message}</h2>
            </>
            }
        
            
        </div>
    )
}
export default DisplayWeather;