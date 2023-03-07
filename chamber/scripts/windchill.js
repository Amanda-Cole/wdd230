let temp = document.getElementById('temp');
let speed = document.getElementById('windspeed');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.getElementById('weatherDesc');
let windChill = document.getElementById("idwindchill");




const url = "https://api.openweathermap.org/data/2.5/weather?q=Sandy&units=imperial&appid=9713700f155de236fbe0845774b95175";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);  //test data
            displayResults(data);

        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData){

    temp.innerHTML=`${weatherData.main.temp.toFixed(0)}`;
    speed.innerHTML=`${weatherData.wind.speed.toFixed(0)}`;

    console.log(temp,speed);

    const tempData = weatherData.main.temp.toFixed(0);
    const speedData = weatherData.wind.speed.toFixed(0);
    let calculatedWindChill = 0;
    if (tempData<50 && speedData>3.0){
        calculatedWindChill = functWindchill(tempData,speedData);
    
    }else{
        calculatedWindChill = 0;
    }

    console.log(calculatedWindChill);
    windChill.innerHTML = calculatedWindChill;
     const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
     const desc = weatherData.weather[0].description.toLowerCase();
     const capDesc = desc.split(" ").map(word => {
         let firstLetter = word.charAt(0).toUpperCase();
         return`${firstLetter}${word.slice(1)}`;
     }).join(" ");

     weatherIcon.setAttribute('src',iconsrc);
     weatherIcon.setAttribute('alt',desc);
     captionDesc.textContent=(capDesc);
 }
 

function functWindchill(t,s){
    let innerWindchill = 35.74 + (.6215*t)-(35.75*(s**.16)) + (.4275*(t*(s**.16)));
    innerWindchill = innerWindchill.toFixed();
    return innerWindchill;
}




