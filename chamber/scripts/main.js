function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document. getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// HEADER DATE

// const datefield = document.querySelector(".date");

// const now = new Date();

// const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

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



// ADD YEAR FOOTER
const year = document.querySelector("#copyyear");
year.innerHTML= 'test'; {new Date().toLocaleDateString("en-UK,options")};

// MODIFIED DATE FOOTER