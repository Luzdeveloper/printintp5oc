const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Selections des éléments HTML

const bannerImg = document.querySelector('.banner-img');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right =document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');

// Variable pour l'image actuelle du carroussel

let numeroSlide = 0; 

// Fonction pour mettre a jour le carroussel 

function changerImage() {
	bannerImg.src =`./assets/images/slideshow/${slides[numeroSlide].image}`;
	bannerImg.alt = slides[numeroSlide].tagLine;
	const textSlide = document.querySelector('#banner p');
	textSlide.innerHTML = slides[numeroSlide].tagLine;

	mouvementDots()
}

//FOnction pour mettre a jour les dots
const Dots = [];
console.log(Dots);

function mouvementDots() {
    dots.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (i === numeroSlide) {
                    dot.classList.add('active');
            }
            

            dots.appendChild(dot);
    }
}

//Fonction pour passer a l'image suivante 

function imageSuivante() {
	if (numeroSlide < slides.length -1) {
		numeroSlide++;
	} else {
		numeroSlide = 0;
	}
	changerImage()
	mouvementDots()
}

function imagePrecedente() {
	if (numeroSlide > 0) {
		numeroSlide--;
	} else {
		numeroSlide = slides.length
	} 
	changerImage()
	mouvementDots()
}



//Ajout eventlistner pour les clics sur les fleches 

arrow_left.addEventListener('click', imagePrecedente);
arrow_right.addEventListener('click', imageSuivante);

//Reinitialisation des images et des dots 

changerImage()
mouvementDots()
