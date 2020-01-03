const baseURL = "https://pokeapi.co/api/v2/pokemon/"
let url;

const searchTerm = document.querySelector('.search');
let currentNumber;
const submitBtn = document.querySelector('.submit')
const searchForm = document.querySelector('form')

const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.prev')
const section = document.querySelector('section')

// nav.style.display = 'none';
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', fetchNext);
previousBtn.addEventListener('click', fetchPrevious);

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + searchTerm.value;
    console.log('URL: ', url)
    
    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json) {
        displayResults(json);
    })
}

function fetchPrevious(e) {
    let previousNumber = currentNumber - 1;
    e.preventDefault();
    url = baseURL + previousNumber;
    console.log('URL: ', url)
    
    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json) {
        displayResults(json);
    }) }

    function fetchNext(e) {
        let nextNumber = currentNumber + 1;
        e.preventDefault();
        url = baseURL + nextNumber;
        console.log('URL: ', url)
        
        fetch(url).then(function(result) {
            return result.json();
        }).then(function(json) {
            displayResults(json);
        }) }

function displayResults(json) {
    section.innerHTML="";
    // debugger;
    console.log(json)

    let pokeName = json.name;
    console.log(pokeName);

    let pokeHeader = document.createElement('h1');
    pokeHeader.innerText = pokeName;
    section.appendChild(pokeHeader);

    let pokeType = json.types;
    
    let pokeTypestring = ''
    for (let type of pokeType) {
        console.log(type)
        pokeTypestring += `${type.type.name}, `
    }
    // if(pokeType.length > 1) {
        
    // } else {
    //     console.log(pokeType)
    // }
    console.log(pokeType);

    let pokeData = document.createElement('h2');
    pokeData.innerText = pokeTypestring;
    section.appendChild(pokeData);

    // Create an image tag and add the sprite url as the source
  if(json.sprites.front_default) {  let pokeSpriteUrl = json.sprites.front_default;
    let pokeimg = document.createElement("img");
    pokeimg.setAttribute('src', pokeSpriteUrl );
    section.appendChild(pokeimg);
  }
    currentNumber = json.id;
    if(json.id == 1){ 
        previousBtn.style.display = 'none' 
    } else previousBtn.style.display = 'block';

    if (json.id == 808) {
        nextBtn.style.display = 'none'
    } 
}