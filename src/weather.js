import React from "react";
// import "./weather.css"
import { useState } from "react";
import DisplayWeather from "./DisplayWeather";

function Weather() {
    const APIKEY = "e3704b0f20560bef2046859b338956f8";

    const [form, setForm] = useState({
        city: "",
        country: ""
    })
    const [weather, setWeather] = useState({
    })
    function handleChange(e) {

        let name = e.target.name;
        let val = e.target.value;
        if (name === "city") {
            setForm({ ...form, city: val })
        }
        if (name === "country") {
            setForm({ ...form, country: val })
        }
    }
    async function weatherData(e) {
        e.preventDefault();
        if (form.city === "" || form.country === "") alert("please enter values")
        else {
            const val = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            ).then((res) => res.json().then())
            setWeather({...weather,data:val}

            );
            
        }
        console.log(weather.data)
    }
    
    

    return (
        <div className="weather">
            <span className="title">
                Weather app
            </span>
            <br />
            <form>
                <input type="text" name="city" value={form.city} placeholder="city" onChange={(e) => handleChange(e)} />
                <input type="text" name="country" value={form.country} placeholder="country" onChange={(e )=> handleChange(e)} />
                <button className="getweather" onClick={(e) =>weatherData(e)}>Submit</button>


            </form>

            {

                    (weather.data !== undefined) &&
                <DisplayWeather data={weather.data} />

            }
        </div>
    )
}
export default Weather;