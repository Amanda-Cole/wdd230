const url = 'https://run.mocky.io/v3/b7bdaab2-4834-451c-b993-879f8688cc4d';

async function getDirectoryData(){
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.members);
    displayMembers(data.members);
}

getDirectoryData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click",() =>{
    display.classList.add("grid");
    display.classList.remove("list");
})
listbutton.addEventListener("click",() =>{
    display.classList.add("list");
    display.classList.remove("grid");
})

const displayMembers =(members)=>{
    const cards = document.querySelector('div.cards');

    var index = 0;
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p')
        let membership = document.createElement('p');
        let linkUrl = document.createElement('a');
        let portrait = document.createElement('img');

        name.textContent= `${member.name}`;
        address.textContent=`${member.address}`;
        membership.textContent=`${member.membership}`;
        phone.textContent=`${member.phone}`;
        
        linkUrl.href =member.linkUrl;
        linkUrl.title= member.linkUrl;
        linkUrl.textContent= member.linkUrl;

        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt',`${member.name} logo`);
        if (index > 0) {
            //portrait.setAttribute('loading', 'lazy');
        }
        portrait.setAttribute('width','250');
        portrait.setAttribute('height','80')


        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(linkUrl);
        cards.appendChild(card);

        index++;






        
    });
}

