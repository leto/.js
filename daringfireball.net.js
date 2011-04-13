$(function() {
	$.getScript("https://github.com/skyzyx/dombuilder/raw/master/dombuilder.min.js", function() {
		var _ = DOMBuilder;
		$('#Sidebar ul').get(0).appendChild(_.DOM(
			_('li').child(
				_('a', { 'href':'http://fireballed.org' + window.location.pathname }).html('Fireballed?')
			)
		));
	});
});
