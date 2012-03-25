$(function() {
	var www = {};

	(function(){var g=function(c,a){var b=this,h=document,g=/[.#]/,d;a=function(e,b){var a={},f;for(f in e)e.hasOwnProperty(f)&&(a[f]=e[f]);for(f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);return a}(a,function(b){var a={"class":[]},c=/[.#]/,f,d,g;if(!c.test(b))return{};c=b.split(c);d=c.shift().length;g=a["class"];for(f in c)if(c.hasOwnProperty(f))b[d]==="#"?a.id=c[f]:g.push(c[f]),d+=c[f].length+1;a["class"]=g;a["class"].length||delete a["class"];return a}(c));b.e=g.test(c)?h.createElement(c.split(g).shift()):
	h.createElement(c);if(a)for(d in a)if(a.hasOwnProperty(d))typeof a[d]==="object"&&typeof a[d].length==="number"&&typeof a[d].splice==="function"&&(a[d]=a[d].join(" ")),d.toString()==="class"?b.e.className=a[d]:b.e.setAttribute(d,a[d]);b.child=b._=function(e){if(typeof e!=="object"||typeof e.length!=="number"||typeof e.splice!=="function")e=[e];for(var a=0,c=e.length;a<c;a++){if(typeof e[a]==="undefined")break;typeof e[a].asDOM!=="undefined"?b.e.appendChild(e[a].asDOM()):b.e.appendChild(e[a])}return b};
	b.html=b.H=function(a,c){if(arguments.length===0)return b.asHTML();c?b.e.innerHTML=a:b.e.innerHTML+=a;return b};b.text=b.T=function(a){if(arguments.length===0)return b.asText();if(b.e.innerText)b.e.innerText=a;else{var c=document.createTextNode(a);b.e.appendChild(c)}return b};b.asDOM=b.dom=function(){return b.e};b.asHTML=function(){var a=h.createElement("div");a.appendChild(b.e);return a.innerHTML};b.asText=function(){var a=h.createElement("div");a.appendChild(b.e);if(a.innerText)return a.innerText;
	else if(a.textContent)return a.textContent};return b};www.DOMBuilder=function(c,a){return new g(c,a)};www.DOMBuilder.DOM=function(c){var a=document.createDocumentFragment();for(c=(new g("div"))._(c).dom().childNodes;c.length;)a.appendChild(c[0]);return a}})();

	var _ = www.DOMBuilder;

	// Add a list of RSS/Atom feeds to the lower-right corner of the page.
	var $feeds = $.grep($.map($('link[rel=alternate]'), function(e, i) {
		$e = $(e);
		if ($e.attr('href') !== '' && $e.attr('type') !== '') {
			var alternate = 'Alternate content';
			return _('li', {
				'class': (function($e) {
					var $type = $e.attr('type');

					if ($type === 'application/rss+xml' || $type === 'application/atom+xml') {
						alternate = 'Feed';
						return 'feed';
					}
					else if ($type === 'text/html') {
						alternate = 'HTML';
						return 'html';
					}
					else if ($type.indexOf('oembed') !== false) {
						alternate = 'Shareable content';
						return 'share';
					}
					else if ($type.indexOf('opml') !== false) {
						alternate = 'OPML';
						return 'opml';
					}
					else {
						alternate = 'Alternate content';
						return '';
					}
				})($e)
			})._(
				_('a', {
					'href': $e.attr('href'),
					'title': $e.attr('type')
				})
				.html($e.attr('title') || alternate)
			);
		}
		return null;
	}), function(e, i) {
		return !!e;
	});

	if ($feeds.length > 0) {
		document.body.appendChild(_.DOM([
			_('div.rparman-rss')._(
				_('ul')._($feeds)
			),
			_('style', {
				'type': 'text/css'
			}).text(
				'div.rparman-rss {' +
					'position: fixed;' +
					'right: 20px;' +
					'bottom: 30px;' +
					'border: 1px solid #999;' +
					'background: #eee;' +
					'opacity: 0.1;' +
					'-webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.5);' +
					'-moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);' +
					'box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);' +
					'-webkit-transition: all 0.3s;' +
					'-moz-transition: all 0.3s;' +
					'transition: all 0.3s;' +
				'}' +
				'div.rparman-rss:hover {' +
					'opacity: 1;' +
				'}' +
				'div.rparman-rss ul {' +
					'margin: 0;' +
					'padding: 10px;' +
				'}' +
				'div.rparman-rss ul li {' +
					'background-color: transparent;' +
					'background-repeat: no-repeat;' +
					'background-position: 0 50%;' +
					'list-style: none;' +
					'margin: 0;' +
					'padding: 2px 0 2px 20px;' +
				'}' +
				'div.rparman-rss ul li.feed {' +
					'background-image: url(http://s3.ryanparman.com/images/fugue/icons/feed.png);' +
				'}' +
				'div.rparman-rss ul li.html {' +
					'background-image: url(http://s3.ryanparman.com/images/fugue/icons/document-code.png);' +
				'}' +
				'div.rparman-rss ul li.share {' +
					'background-image: url(http://s3.ryanparman.com/images/fugue/icons/share.png);' +
				'}' +
				'div.rparman-rss ul li.opml {' +
					'background-image: url(http://s3.ryanparman.com/images/fugue/icons/opml.png);' +
				'}' +
				'div.rparman-rss ul li a {' +
					'color: #999;' +
					'font-size: 11px;' +
				'}' +
			'')
		]));
	}
});
