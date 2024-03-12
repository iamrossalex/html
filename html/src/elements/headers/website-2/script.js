[...document.querySelectorAll(".headers--website-2")].forEach(header => {
	var bodyClose = (event) => {
		if (event.target.closest("nav")) return;
		event.stopPropagation();
		header.querySelector('nav').classList.remove('opened');
		document.body.style.overflow = 'auto';
	};
	header.querySelector('.mobile-menu-button').addEventListener('click', ev => {
		ev.preventDefault();
		ev.stopPropagation();
		if (header.querySelector('nav').classList.contains('opened')) {
			header.querySelector('nav').classList.remove('opened');
			document.body.style.overflow = 'auto';
		} else {
			header.querySelector('nav').classList.add('opened');
			document.body.style.overflow = 'hidden';
			document.addEventListener("click", bodyClose, {
				"once": true
			});
		}
	});
	header.querySelector('nav .close').addEventListener('click', ev => {
		ev.preventDefault();
		header.querySelector('nav').classList.remove('opened');
		document.body.style.overflow = 'auto';
		document.removeEventListener("click", bodyClose);
	});
});