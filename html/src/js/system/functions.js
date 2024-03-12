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