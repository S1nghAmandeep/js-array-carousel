// - creare un array 
//     - inserire tutte le immagini
const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
]

console.log(images);

const imagesDomElement = document.querySelector('.images');
console.log(imagesDomElement);

for (let i = 0; i < images.length; i++) {

    const viewImages = images[i]
    console.log(i, viewImages);

    const homeString = `
    <div class = 'hide'>
        <img src="${viewImages}">
    </div>
    `
    console.log(homeString);
    imagesDomElement.innerHTML += homeString;
}

const scrollDomElements = document.getElementsByClassName('hide');
console.log(scrollDomElements)

let indexImages = 0;
scrollDomElements[indexImages].classList.add('active')

// - prelevare i pulsanti (down) dal Dom
const downButton = document.querySelector('.down')

downButton.addEventListener('click', function () {
    console.log(downButton);
    
    let currentImage

    currentImage = scrollDomElements[indexImages]
    console.log(currentImage);
    
    scrollDomElements[indexImages].classList.remove('active');

    if (indexImages < scrollDomElements.length - 1) {
        indexImages++
        console.log(indexImages);
    }
    scrollDomElements[indexImages].classList.add('active');
    console.log(scrollDomElements)
               
});
// - prelevare i pulsanti (up) dal Dom
const upButton = document.querySelector('.up');

upButton.addEventListener('click', function () {
    console.log(upButton);
    
    let currentImage

    currentImage = scrollDomElements[indexImages]
    console.log(currentImage);
    
    currentImage.classList.add('active');
    scrollDomElements[indexImages].classList.remove('active');

    if (indexImages > 0 ) {
        indexImages--;
    }
    console.log(indexImages)
    scrollDomElements[indexImages].classList.add('active');
});



