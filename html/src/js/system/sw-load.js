if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js', {scope: '/'}).catch(function(e) {
		console.log('SW failed');
	});
}
