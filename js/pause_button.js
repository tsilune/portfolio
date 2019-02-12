var vi = document.querySelectorAll(".vid");
var pauseButton = document.querySelectorAll(".pause");

vi.forEach(function(video) {
	pauseButton.forEach(function(pause) {
		if (window.matchMedia('(prefers-reduced-motion)').matches) {
			video.removeAttribute("autoplay");
			video.pause();
			pauseButton.innerHTML = "Pause";
		}
	})
})

vi.forEach(function(video) {
	video.addEventListener('ended', function() {
		// only functional if "loop" is removed
		video.pause();
		// to capture IE10
	})
});


pauseButton.forEach(function(pause) {
	vi.forEach(function(video) {
		pause.addEventListener("click", function() {
			if (video.paused) {
				video.play();
				pause.innerHTML = "Play";
			} else {
				video.pause();
				pause.innerHTML = "Pause";
			}
		})
	})
})