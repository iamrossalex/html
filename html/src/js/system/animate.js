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