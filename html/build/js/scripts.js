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
