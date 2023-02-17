function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

document.querySelector(".banner_close").addEventListener("click",function(){
    this.closest(".banner").style.display = "none";
})


// HEADER DATE


const datefieldUK = document.querySelector("#date"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
// 	now
// );
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

// datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

let weekDay = now.getDay();

if (weekDay !=0 && weekDay <=2){
    document.querySelector(".banner").style.display = "flex";
}




// ADD YEAR FOOTER

document.getElementById("copyyear").innerHTML = new Date().getFullYear();

// MODIFIED DATE FOOTER
var date = document.lastModified;
document.getElementById("modified_date").innerHTML = date;

// LAST VISITED = .visitcounter

const visitsDisplay = document.getElementById("visits");
const daysBetweenOutput = document.getElementById("daysBetween");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastTime = Number(window.localStorage.getItem("lastVisitDateTime"));
numVisits++;
if (numVisits > 1){
    visitsDisplay.textContent = numVisits;
}else{
    visitsDisplay.textContent = 'This is your first visit!';
    lastTime = Date.now();
}
let daysBetween = (Date.now() - lastTime)/84600000;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastVisitDateTime", Date.now());

let rounded = Math.round(daysBetween);
if (rounded !==0){
    daysBetweenOutput.textContent= rounded;
}else{
    daysBetweenOutput.textContent = "It hasn't been a day yet";
}
// let rounded = Math.round(daysBetween);
// daysBetweenOutput.textContent= rounded;
