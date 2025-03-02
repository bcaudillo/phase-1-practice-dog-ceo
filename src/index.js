// console.log('%c HI', 'color: firebrick')

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const ulContainer = document.querySelector('#dog-breeds')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.querySelector('#breed-dropdown')
let breedsArray = []

dropDown.addEventListener('change', handleChange)
ulContainer.addEventListener('click',handleClick)

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

function handleChange(event){
    const letter=event.target.value
    const filteredBreeds = breedsArray.filter(breed=>breed.startsWith(letter))
    const filteredBreedsLi = createLiElement(filteredBreeds)
    ulContainer.innerHTML= ''
    renderLis(filteredBreedsLi)


}
