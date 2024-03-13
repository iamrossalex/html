document.querySelector('.popups--contact-buttons .popups--contact-buttons--switch').addEventListener('click', (ev) => {
	ev.preventDefault();
	if (document.querySelector('.popups--contact-buttons').classList.contains('active')) {
		document.querySelector('.popups--contact-buttons').classList.remove('active');
	} else {
		document.querySelector('.popups--contact-buttons').classList.add('active');
	}
});