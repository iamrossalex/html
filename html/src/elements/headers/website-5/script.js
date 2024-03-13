[...document.querySelectorAll(".headers--website-5")].forEach(header => {
	if (header.querySelector('.lang > a')) header.querySelector('.lang > a').addEventListener('click', (ev) => {
		ev.preventDefault();
		if(ev.currentTarget.classList.contains('opened')) ev.currentTarget.classList.remove('opened'); else ev.currentTarget.classList.add('opened');
	});
	
	if (header.querySelector('.menu-btn')) header.querySelector('.menu-btn').addEventListener('click', ev => {
		ev.preventDefault();
		document.querySelector('nav').classList.toggle('opened');
	});
	if (header.querySelector('nav .close')) header.querySelector('nav .close').addEventListener('click', ev => {
		ev.preventDefault();
		header.querySelector('nav').classList.toggle('opened');
	});
});