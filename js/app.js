
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

scrollDomElements[0].classList.add('active')
