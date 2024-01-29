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

function mouvementDots() {
	dots.innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('span');
		// Ajout de la class 'active' au dot correspondant a l image active
		if (i === numeroSlide) {
			dot.className = 'dot active'
		} else{
			dot.className = dot;
		}
		dots.appendChild(dot) //appenChild sert a rajouté un noeud à la fin de liste d'enfant d'un noeud parent spécifié

		const allDots = document.querySelectorAll('.dot');
		allDots[numeroSlide].classList.add('active')
	}
}

//Fonction pour passer a l'image suivante 

function imageSuivante() {
	if (numeroSlide < slides.length - 1) {
		numeroSlide++;
	} else {
		numeroSlide = 0;
	}
	changerImage()
	mouvementDots()
}


//Ajout eventlistner pour les clics sur les fleches 

arrow_left.addEventListener('click', imageSuivante);
arrow_right.addEventListener('click', imageSuivante);

//Reinitialisation des images et des dots 

changerImage()
mouvementDots()
