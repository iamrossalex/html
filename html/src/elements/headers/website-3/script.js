[...document.querySelectorAll('.headers--website-3')].map(el => {
	el.querySelector('.hbar-mob .menu-btn a').addEventListener('click', ev => {
		ev.preventDefault();
		if (el.querySelector('.menu').classList.contains('opened')) el.querySelector('.menu').classList.remove('opened'); else el.querySelector('.menu').classList.add('opened');
	});
	el.querySelector('.close').addEventListener('click', ev => {
		ev.preventDefault();
		el.querySelector('.menu').classList.remove('opened');
	});
	el.querySelector(".menu .items .lang > a").addEventListener("click", (ev) => {
		ev.preventDefault();
		if (el.querySelector(".menu .items .lang > a").classList.contains('opened'))
			el.querySelector(".menu .items .lang > a").classList.remove('opened');
		else
			el.querySelector(".menu .items .lang > a").classList.add('opened');
	});
	el.querySelector(".hbar-mob .lang > a").addEventListener("click", (ev) => {
		ev.preventDefault();
		if (el.querySelector(".hbar-mob .lang > a").classList.contains('opened'))
			el.querySelector(".hbar-mob .lang > a").classList.remove('opened');
		else
			el.querySelector(".hbar-mob .lang > a").classList.add('opened');
	});
});