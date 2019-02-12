// var background = document.querySelector('#backgroudFullSize');
// var projet = document.querySelectorAll('.projet');
// var barre = document.querySelector('#barre');
//
// projet.forEach(function(p) {
// 	p.addEventListener('mouseenter', function() {
// 		background.classList.add(p.classList[1]);
// 		background.style.zIndex = '1';
// 	})
// });

var bgsContainer = document.querySelector('.bgs');
var bgs = document.querySelectorAll('.bgs img');
var projectsContainer = document.querySelector('.projects');
var projects = document.querySelectorAll('.case');
var mosaique = document.querySelector('.mosaique');
var titre = document.querySelectorAll('.title');

// TODO: commente ton code!!!!
projects.forEach(function(p) {
	p.addEventListener('mouseover', function() {
		var current = p.dataset.project;
		bgs.forEach(function(b) {
			if (b.dataset.project === current) bgsContainer.style.backgroundImage = 'url(' + b.src + ')';
		});
		projects.forEach(function(pp) {
			if (pp !== p) pp.style.opacity = 0;
			else pp.style.opacity = 1;
		});
	});
});

mosaique.addEventListener('mouseleave', function() {
	projects.forEach(function(p) {
		p.style.opacity = 1;
	});
});

var body = document.querySelector('body');
var burgerNav = document.querySelector('.burgerMenu');
var menu = document.querySelector('.menu');
var droite = document.querySelector('.droite');
//Fonction de callback appelait avec un élément
burgerNav.addEventListener("click", function(e) {
	menu.classList.toggle('visible');
	droite.classList.toggle('visible');
	burgerNav.classList.toggle('anime');

	body.classList.toggle('visible');
})



var ancres = document.querySelectorAll('.ancre');
ancres.forEach(function(ancre) {
	ancre.addEventListener('click', function() {
		menu.classList.toggle('visible');
		droite.classList.toggle('visible');
		burgerNav.classList.toggle('anime');
		body.classList.toggle('visible');
	})
})




var all_boutonProjet = document.querySelectorAll('.pj');
var all_containerProjet = document.querySelectorAll('.modal');

all_boutonProjet.forEach(function(boutonProjet) {
	boutonProjet.addEventListener('click', function() {
		var num_projet = boutonProjet.dataset.projet;
		var mySlider = document.querySelector('#' + num_projet);
		all_containerProjet.forEach(function(containerProjet) {
			if (containerProjet == mySlider) {
				containerProjet.classList.add('visible');

				// CROIX //
				var cross = document.querySelector('#' + num_projet + ' ' + '.cross');
				cross.addEventListener('click', function() {
					containerProjet.classList.remove('visible');
				});
				// FIN CROIX //

				// SLIDER //
				var slider = document.querySelector('#' + num_projet + ' ' + '.slider');
				var right = document.querySelector('#' + num_projet + ' ' + '.arrow_right');
				var left = document.querySelector('#' + num_projet + ' ' + '.arrow_left');
				var index = 0;
				right.addEventListener('click', function() {
					if (index > -200) {
						index -= 100;
						slider.style.transform = 'translateX(' + index + '%)';
					};
				});
				left.addEventListener('click', function() {
					if (index < 0) {
						index += 100;
						slider.style.transform = 'translateX(' + index + '%)';
					};
				});
				// FIN SLIDER //

				// Fin du if
			}
		});
	});
});









// var treshold = 50;
// window.addEventListener("scroll", function(event) {
// 	var myHead = document.querySelectorAll('.navCat');
// 	myHead.forEach(function(h) {
// 		var navLogo = document.querySelector('.logo');
// 		var burger = document.querySelector('.burgermodal');
// 		if (window.scrollY > treshold) {
// 			h.classList.add("scrolled");
// 			navLogo.classList.add("scrolled");
// 			burger.classList.add("scrolled");
// 			barre.classList.add("scrolled");
// 		} else {
// 			h.classList.remove("scrolled");
// 			navLogo.classList.remove("scrolled");
// 			burger.classList.remove("scrolled");
// 			barre.classList.remove("scrolled");
// 		}
// 	});
// });


// var pss = document.querySelector('.pss');
// var meContacter = window.getComputedStyle(
// 	document.querySelector('.pss'), ':after'
// ).getPropertyValue('opacity');
//
// pss.addEventListener("mouseover", function() {
// 	pss.style.background = '#2d4059';
// 	pss.style.color = '#fff';
// 	pss.innerHTML = 'Contactez-moi !';
// 	meContacter.style.opacity = '1';
//
// })