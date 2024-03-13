[...document.querySelectorAll(".headers--website-4")].forEach(header => {
	header.bodyCloseMenu = (event) => {
		if (event.target.closest(".menu")) return;
		event.stopPropagation();
		header.querySelector('.menu').classList.remove('opened');
		document.body.style.overflow = 'hidden auto';
	};
	header.querySelector('.menu-btn a').addEventListener('click', ev => {
		ev.preventDefault();
		ev.stopPropagation();
		if (header.querySelector('.menu').classList.contains('opened')) {
			header.querySelector('.menu').classList.remove('opened');
			document.body.style.overflow = 'hidden auto';
			header.itemOpened = null;
		} else {
			header.querySelector('.menu').classList.add('opened');
			document.body.style.overflow = 'hidden';
			document.addEventListener("click", header.bodyCloseMenu, {
				"once": true
			});
		}
	});
	header.querySelector('.menu .close').addEventListener('click', ev => {
		ev.preventDefault();
		header.querySelector('.menu').classList.remove('opened');
		document.body.style.overflow = 'hidden auto';
		document.removeEventListener("click", header.bodyCloseMenu);
	});



	header.bodyCloseLang = (event) => {
		if (event.target.closest(".language")) return;
		event.stopPropagation();
		header.querySelector('.language > a').classList.remove('opened');
		document.body.style.overflow = 'hidden auto';
	};
	header.querySelector('.language > a').addEventListener('click', ev => {
		ev.preventDefault();
		ev.stopPropagation();
		if (header.querySelector('.language > a').classList.contains('opened')) {
			header.querySelector('.language > a').classList.remove('opened');
			document.body.style.overflow = 'auto';
		} else {
			header.querySelector('.language > a').classList.add('opened');
			document.body.style.overflow = 'hidden';
			document.addEventListener("click", header.bodyCloseLang, {
				"once": true
			});
		}
	});


	
	header.bodyCloseSearch = (event) => {
		if (event.target.closest(".search")) return;
		event.stopPropagation();
		header.querySelector('.search > a').classList.remove('opened');
		document.body.style.overflow = 'hidden auto';
	};
	header.querySelector('.search > a').addEventListener('click', ev => {
		ev.preventDefault();
		ev.stopPropagation();
		if (header.querySelector('.search > a').classList.contains('opened')) {
			header.querySelector('.search > a').classList.remove('opened');
			document.body.style.overflow = 'auto';
		} else {
			header.querySelector('.search > a').classList.add('opened');
			header.querySelector('.search input').value = '';
			document.body.style.overflow = 'hidden';
			document.addEventListener("click", header.bodyCloseSearch, {
				"once": true
			});
		}
	});
});