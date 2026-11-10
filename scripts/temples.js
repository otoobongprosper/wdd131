const today = new Date();
document.querySelector("#current-date").innerHTML = today.getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;

// store the selected element that are going to be used
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// add event listener to the hamberg button and call back function that toggle the list element

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});