var background = document.querySelector('#backgroudFullSize');
var projet = document.querySelectorAll('.projet');

projet.forEach(function(p) {
	p.addEventListener('mouseenter', function() {
		background.classList.add(p.classList[1]);
		background.style.zIndex = '1';
	})
});