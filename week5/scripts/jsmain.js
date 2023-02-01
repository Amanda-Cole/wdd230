
// get elements - set java script variables to HTML labels
const input = document.querySelector('input');
const chbutton = document.querySelector('button');
const list = document.querySelector('ul');

// add event Listener for Add button 
chbutton.addEventListener('click',() =>{
    if (input.value !== ''){           
        let chapter = input.value;

        const li = document.createElement("li");
        const deletebtn = document.createElement('button');

        li.textContent = chapter;
        deletebtn.textContent = "❌"
        deletebtn.addEventListener('click', () =>{
            list.removeChild(li);
        })
        li.appendChild(deletebtn);
        list.appendChild(li);
    }
    input.value = '';
    input.focus();
})
