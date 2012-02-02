$(function() {

	// Commit view => Compare view
	if (window.location.pathname.match(/aws-sdk-for-php\/commit\/([a-z0-9]{40})/i)) {
		var path = location.pathname.split('/commit/');

		$('div.subnav-bar ul.actions li:first')
			.before('<li><a href="' + path[0] + '/compare/amazonwebservices:master...' + path[1] + '">Compare with aws:master</a></li>');
	}
});
