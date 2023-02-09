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

const tem = document.getElementById('temp');
const speed = document.getElementById('windspeed');

console.log (tem,speed);

// let t = parseInt(tem)
// let s = parseInt(speed)

let t = 40;
let s = 5;

let windchill = 0;

if (t<50 && s>3.0){
    windchill = functWindchill(t,s);

}else{
    windchill = 0;
}

function functWindchill(t,s){
    let innerWindchill = 35.74 + (.6215*t)-(35.75*(s**.16)) + (.4275*(t*(s**.16)));
    innerWindchill = innerWindchill.toFixed();
    return innerWindchill;
}
newWindChill = document.getElementById("idwindchill");
newWindChill.innerHTML = windchill;


