// Focus on the user
(function() {
	if (window.__dbe) {
		return;
	}

	window.__dbe = true;
	var anchor = document.getElementsByTagName('script')[0];
	var script = document.createElement('script');
	script.src = '//focusontheuser.org/dontbeevil/script.js?' + (new Date().getTime());
	anchor.parentNode.insertBefore(script,anchor);
})();
