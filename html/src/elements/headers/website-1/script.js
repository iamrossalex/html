[...document.querySelectorAll(".headers--website-1")].map((v) => {
	v.querySelector(".menu-btn-mob > a").addEventListener("click", (ev) => {
		ev.preventDefault();
		v.querySelector(".menu").classList.add('opened');
	});
	v.querySelector(".close").addEventListener("click", (ev) => {
		ev.preventDefault();
		v.querySelector(".menu").classList.remove('opened');
	});
	v.querySelector(".languages > a").addEventListener("click", (ev) => {
		ev.preventDefault();
		if (v.querySelector(".languages > a").classList.contains('opened'))
			v.querySelector(".languages > a").classList.remove('opened');
		else
			v.querySelector(".languages > a").classList.add('opened');
	});

});
