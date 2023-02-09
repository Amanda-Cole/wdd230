/* <div class = "card" id = "weather">
<h2>Weather</h2>
<div id = "weatherImgDegree">
    <img src="images/Optimized-sun250x250.jpg" alt="sun" class="responsive">
    <p><span id = "temp">51</span>°F</p>
</div>    
<p><span id = "forecast"></span></p>
<p>Wind Speed: &nbsp; <span id = "windspeed">4.2</span>mph</p>
<p>Wind Chill: &nbsp; <span id = "windchill"></span>°F</p>
</div> */

const t = document.getElementById('temp');
const s = document.getElementById('windspeed');
const windchill = "0"

if (t<50 && s>3.0){
    functWindchill(t,s)
}else{
    windchill = "N/A"
}

function functWindchill(t,s){
    windchill = 35.74 + (.6215*t)-(35.75*(s**.16)) + (.4275*(t*(s**.16)))
        


    
}