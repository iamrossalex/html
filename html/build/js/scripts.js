String.prototype.splitBy = function(separator, count) {
    return this.split('').reverse().join('')
        .match(new RegExp('.{1,' + count + '}', 'g'))
        .join(separator)
        .split('').reverse().join('');
};
var $ = function(selector) {
	if (selector.length > 0) return document.querySelector(selector);
}
var $$ = function(selector) {
	if (selector.length > 0) return document.querySelectorAll(selector);
}
String.prototype.dom = function() {
    var div = document.createElement('div');
    div.innerHTML = this.trim();
    return div.childNodes;
};
var sender = async function(opts, data) {
	const response = await fetch(
		opts.url, 
		{
			method: opts.method || 'GET',
			mode: opts.mode || 'cors',
			cache: opts.cache || 'no-cache',
			credentials: opts.credentials || 'same-origin',
			headers: {
				'Content-Type': opts.contentType || 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify(data)
		}
	);
	try {
		return await response.text();
	} catch (e) {
		console.error(e, response);
	}
}
var genPass = function(len = 4) {
	var charset = "abcdefghijklmnopqrstuvwxyz0123456789",
		retVal = "";
	for (var i = 0, n = charset.length; i < len; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js', {scope: '/'}).catch(function(e) {
		console.log('SW failed');
	});
}

if ('IntersectionObserver' in window &&
	'IntersectionObserverEntry' in window &&
	'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
	if (!('isIntersecting' in IntersectionObserverEntry.prototype)) {
		Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
			get: function () { return this.intersectionRatio > 0; }
		});
	}

	var showClassObserver = new IntersectionObserver(function (entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate');
				observer.unobserve(entry.target);
			}
		});
	}, {
		rootMargin: "50% 0px 0px 0px"
	});

	[...document.querySelectorAll('[data-animate]')].forEach(function (elem) {
		showClassObserver.observe(elem);
	});
}

// Touch detection
if (( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 )) document.body.classList.add('touch');

[...document.querySelectorAll(".headers--website-4")].forEach(header => {
	document.body.addEventListener("scroll", function() {
		if (document.body.scrollTop > 0) {
			if (!header.classList.contains("scrolled")) header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	});
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
[...document.querySelectorAll(".lists--cost-2")].map(el => {
	var labelClick = (ev) => {
		var rect = ev.currentTarget.getBoundingClientRect();
		var offset = rect.top + document.body.scrollTop;
		document.body.scrollTo({top: offset, behavior: 'smooth'})
	}
	[...el.querySelectorAll('label')].map(l => {
		l.addEventListener('click', labelClick);
	})
});
[...document.querySelectorAll(".widgets--re-1")].forEach(cart => {
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
