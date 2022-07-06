//Global Constants
const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const ulContainer = document.querySelector('#dog-breeds')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.querySelector('#breed-dropdown')

//Global Variable
let breedsArray = []
//Event Listeners
dropDown.addEventListener('change', handleChange)
ulContainer.addEventListener('click',handleClick)

//Challenge 1
//This repository includes an index.html file that loads an index.js file.
// Add JavaScript that:
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array


function getImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
    const imgs = images.message
    let imgsArray = createImgElement(imgs)
    renderElement(imgsArray) 
    //take this array of images
    //turn into img elements
    //append each img element to the DOM
    //forEach returns original array
    })
}
function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
    })
}


    //return is important in map because it does not modify each element until it sees what it needs to return
    //append each of the img element to the DOM
   
function renderImgs(imgsArray){
    imgsArray.forEach(element => {
        renderElement(element)
    });
}
function renderElement(element){
    ulContainer.innerHTML += element
}
getImages()

//Challenge 2
// After the first challenge is completed, add JavaScript that:

// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html
function getBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedLis = createLiElement(breedsArray)
        renderLis(breedLis)
        
       
        //Object.keys returns an array of a given object. Call this on the object and all the properties will go into elements of an array. 
    })
}

function createLiElement(breeds){
    return breeds.map((breed) => {
        let li = `<li> ${breed}</li>`
        return li
    })
}
function renderLis(breedLis){
    breedLis.forEach((breed) => {
        renderElement(breed)
    });
    
}
getBreeds()

// Challenge 3
// Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.
function handleClick(event){
    if(event.target.nodeName==='LI'){
        if (event.target.style.color==='red'){
        event.target.style.color='black'
        }
        else{
            event.target.style.color='red'
        }
    }
}
//Challenge 4
// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet.


function handleChange(event){
    const letter=event.target.value
    const filteredBreeds = breedsArray.filter(breed=>breed.startsWith(letter))
    const filteredBreedsLi = createLiElement(filteredBreeds)
    ulContainer.innerHTML= ''
    renderLis(filteredBreedsLi)


}
