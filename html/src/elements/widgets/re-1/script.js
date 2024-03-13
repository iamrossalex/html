[...document.querySelectorAll(".cart--re-1")].forEach(cart => {
	// Gallery
	var gallegy = cart.querySelector(".gallery");
	var scrollable = gallegy.querySelector('.scroll .cont'),
	itemWidth = scrollable.querySelector('.item').offsetWidth,
	dots = gallegy.querySelector('.nav .dots');
	  
	function calculateCurrentPosition() {
		var currentPosition = Math.floor(scrollable.scrollLeft / itemWidth),
			active = dots.querySelector('.active');
		if (active !== null) active.classList.remove('active');
		dots.childNodes[currentPosition].classList.add('active');
	}

	function slideLeft(e) {
		e.preventDefault();
		scrollable.scrollBy({
			left: -itemWidth, 
			behavior: 'smooth'
		});
	}

	function slideRight(e) {
		e.preventDefault();
		scrollable.scrollBy({
			left: itemWidth,
			behavior: 'smooth'
		});
	}

	gallegy.querySelector('.nav .left').addEventListener('click', slideLeft);
	gallegy.querySelector('.nav .right').addEventListener('click', slideRight);

	scrollable.addEventListener('scroll', calculateCurrentPosition);
	var itemsOn = Math.floor(scrollable.offsetWidth / itemWidth);
	if (itemsOn > 1) itemsOn = itemsOn - 1; else itemsOn = 0;
	var dotsCount = (scrollable.querySelectorAll('.item').length - itemsOn);
	for(var i=0;i<dotsCount;i++) {
		var dot = document.createElement('span');
		dots.appendChild(dot);
	}
	if (dots.childNodes.length > 0) dots.childNodes[0].classList.add('active');

	var anhs = scrollable.querySelectorAll('.item > a'),
		images = [];
	[...anhs].map(ima => {
		images.push(ima.getAttribute('href'));
		ima.addEventListener('click', (ev) => {
			ev.preventDefault();
			popupGallery.open(images, images.indexOf(ev.currentTarget.getAttribute('href')));
		});
	});

	[...cart.querySelectorAll(".form .phone")].forEach(field => {
		var fieldSelector = field.querySelector('.selector'),
			codeCont = fieldSelector.querySelector('.code'),
			codeField = field.querySelector('[name="phone_country"]'),
			elems = field.querySelectorAll('.selector + ul > li');
		var elev = async (elv) => {
			// data-dial-code, data-country-code
			codeCont.innerHTML = '+' + elv.currentTarget.getAttribute('data-dial-code');
			codeField.value = elv.currentTarget.getAttribute('data-dial-code');
			fieldSelector.click();
		};
		fieldSelector.addEventListener('click', async (ev) => {
			ev.preventDefault();
			if (ev.currentTarget.classList.contains('opened')) ev.currentTarget.classList.remove('opened');
			else ev.currentTarget.classList.add('opened');
		});
		[...elems].forEach(el => {
			el.addEventListener('click', elev);
		});
	});

});