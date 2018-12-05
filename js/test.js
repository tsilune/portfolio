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