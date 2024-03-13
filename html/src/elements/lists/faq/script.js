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