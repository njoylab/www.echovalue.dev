(function () {
	var toggle = document.querySelector('.navbar-toggle');
	var nav = document.querySelector('.navbar-nav');
	if (!toggle || !nav) return;
	var compact = window.matchMedia('(max-width: 1024px)');
	function setOpen(open) {
		toggle.classList.toggle('active', open);
		nav.classList.toggle('active', open);
		toggle.setAttribute('aria-expanded', String(open));
	}
	setOpen(false);
	toggle.addEventListener('click', function () {
		setOpen(!nav.classList.contains('active'));
	});
	nav.querySelectorAll('a').forEach(function (link) {
		link.addEventListener('click', function () {
			setOpen(false);
		});
	});
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && nav.classList.contains('active')) {
			setOpen(false);
			toggle.focus();
		}
	});
	compact.addEventListener('change', function () {
		setOpen(false);
	});
})();
