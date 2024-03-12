[...$$(".headers--emag-2")].map((v) => {
	v.querySelector(".catalog-btn > a").addEventListener("click", (ev) => {
		ev.preventDefault();
		if (v.querySelector(".catalog-btn .dropdown").classList.contains('opened')) {
			v.querySelector(".catalog-btn .dropdown").classList.remove('opened');
		} else {
			v.querySelector(".catalog-btn .dropdown").classList.add('opened');
		}
	});
});
