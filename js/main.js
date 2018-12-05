var background = document.querySelector('#backgroudFullSize');
var projet = document.querySelectorAll('.projet');

projet.forEach(function(p) {
	p.addEventListener('mouseenter', function() {
		background.classList.add(p.classList[1]);
		background.style.zIndex = '1';
	})
});


var treshold = 50;
window.addEventListener("scroll", function(event) {
	var myHead = document.querySelectorAll('.navCat');
	myHead.forEach(function(h) {
		var navLogo = document.querySelector('.logo');
		var burger = document.querySelector('.burgerMenu');
		if (window.scrollY > treshold) {
			h.classList.add("scrolled");
			navLogo.classList.add("scrolled");
			burger.classList.add("scrolled");
		} else {
			h.classList.remove("scrolled");
			navLogo.classList.remove("scrolled");
			burger.classList.remove("scrolled");
		}
	});
});

var burgerNav = document.querySelector('.burgerMenu');
var burgerModal = document.querySelector('.navModal')
//Fonction de callback appelait avec un élément
burgerNav.addEventListener("click", function(e) {
	burgerModal.classList.toggle('visible');
	burgerNav.classList.toggle('anime');
})


var bgs = document.querySelectorAll('.bgs img');
var projectsContainer = document.querySelector('.projects');
var projects = document.querySelectorAll('.case');
var mosaique = document.querySelector('.mosaique');
var titre = document.querySelectorAll('.title');

projects.forEach(function(p) {
	p.addEventListener('mouseover', function() {
		var current = p.dataset.project;
		bgs.forEach(function(b) {
			if (b.dataset.project !== current) b.style.opacity = 0;
			else b.style.opacity = 1;
		});
		projects.forEach(function(pp) {
			if (pp !== p) pp.style.opacity = 0;
			else pp.style.opacity = 1;
		});
	});
});

mosaique.addEventListener('mouseleave', function() {
	bgs.forEach(function(b) {
		b.style.opacity = 0;
	});
	projects.forEach(function(p) {
		p.style.opacity = 1;
	});
});