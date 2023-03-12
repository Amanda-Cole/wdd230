const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    // this shows in the inspect area of website
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file

    // this displays prophets
    displayProphets(data.prophets);
  }
  
getProphetData();

// buttons for grid or list
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click",() =>{
    display.classList.add("grid");
    display.classList.remove("list");
})
listbutton.addEventListener("click",showList);

function showList(){
    display.classList.add("list");
    display.classList.remove("grid");
}

// Main displayProphets function
const displayProphets = (prophets)=>{
    const cards = document.querySelector('div.cards'); 

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthplace = document.createElement('p');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent=`${prophet.birthdate}`;
        birthplace.textContent=`Place of Birth: ${prophet.birthplace}`;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width','340');

        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        cards.appendChild(card);
        
    });
}
