const baseURL = "https://pokeapi.co/api/v2/pokemon-species/"
let url;

fetch("https://pokeapi.co/api/v2/pokemon-species/")

const searchTerm = document.querySelector('.search');
const startnumber = document.querySelector('.start-number');
const endNumber = document.querySelector('.end-number')
const submitBtn = document.querySelector('.submit')

const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.prev')
const nav = document.querySelector('section')

nav.style.display = 'none';

let pageNumber = 0;
console.log('Page number: ', pageNumber)
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click',previousPage);

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '&page=' + pageNumber + '&q=' + searchTerm.nodeValue;
    console.log('URL: ', url)
    if(startNumber.value !== '') {
        url += '&end_number=' + endNumber.value;
    }
    
}