$(function() {
	document.cookie="VISITOR_INFO1_LIVE=ST1Ti53r4fU";

	if (window.location.pathname.indexOf('/watch') !== -1 || window.location.pathname.indexOf('/user') !== -1) {
		(rparman_youtube_video_downloader = function() {

			// Include DOMBuilder <http://github.com/skyzyx/dombuilder/>, compressed with Google Closure Compiler.
			var www = {};
			(function(){var g=function(c,a){var b=this,h=document,g=/[.#]/,d;a=function(e,b){var a={},f;for(f in e)e.hasOwnProperty(f)&&(a[f]=e[f]);for(f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);return a}(a,function(b){var a={"class":[]},c=/[.#]/,f,d,g;if(!c.test(b))return{};c=b.split(c);d=c.shift().length;g=a["class"];for(f in c)if(c.hasOwnProperty(f))b[d]==="#"?a.id=c[f]:g.push(c[f]),d+=c[f].length+1;a["class"]=g;a["class"].length||delete a["class"];return a}(c));b.e=g.test(c)?h.createElement(c.split(g).shift()):
			h.createElement(c);if(a)for(d in a)if(a.hasOwnProperty(d))typeof a[d]==="object"&&typeof a[d].length==="number"&&typeof a[d].splice==="function"&&(a[d]=a[d].join(" ")),d.toString()==="class"?b.e.className=a[d]:b.e.setAttribute(d,a[d]);b.child=b._=function(e){if(typeof e!=="object"||typeof e.length!=="number"||typeof e.splice!=="function")e=[e];for(var a=0,c=e.length;a<c;a++){if(typeof e[a]==="undefined")break;typeof e[a].asDOM!=="undefined"?b.e.appendChild(e[a].asDOM()):b.e.appendChild(e[a])}return b};
			b.html=b.H=function(a,c){if(arguments.length===0)return b.asHTML();c?b.e.innerHTML=a:b.e.innerHTML+=a;return b};b.text=b.T=function(a){if(arguments.length===0)return b.asText();if(b.e.innerText)b.e.innerText=a;else{var c=document.createTextNode(a);b.e.appendChild(c)}return b};b.asDOM=b.dom=function(){return b.e};b.asHTML=function(){var a=h.createElement("div");a.appendChild(b.e);return a.innerHTML};b.asText=function(){var a=h.createElement("div");a.appendChild(b.e);if(a.innerText)return a.innerText;
			else if(a.textContent)return a.textContent};return b};www.DOMBuilder=function(c,a){return new g(c,a)};www.DOMBuilder.DOM=function(c){var a=document.createDocumentFragment();for(c=(new g("div"))._(c).dom().childNodes;c.length;)a.appendChild(c[0]);return a}})();

			// Define shortcuts and variables
			var _ = www.DOMBuilder,
				baseURL = null,
				formatList = null,
				layerStyles = '',
				indexOf;

			// Write some CSS for our nodes
			layerStyles += 'div#rparman_ytdl {width:100%; font-family:"Lucida Grande",Verdana,sans-serif; font-size:12px; text-align:right; opacity:0.1; position:fixed; bottom:0; left:0; color:#fff; background-color:#000; background-attachment:fixed; -webkit-transition:opacity 0.3s; -moz-transition:opacity 0.3s}';
			layerStyles += 'div#rparman_ytdl:hover {opacity:0.7;}';
			layerStyles += 'div#rparman_ytdl div {padding:5px 10px;}';
			layerStyles += 'div#rparman_ytdl div a {color:#fff;}';

			// Add the <style> tag.
			if (navigator.userAgent.match(/AppleWebKit/)) { // Safari
				var style = _('style', { 'type':'text/css' }).asDOM();
				document.getElementsByTagName('head')[0].appendChild(style);
				style.innerText = layerStyles;
			}
			else { // Everything else
				document.getElementsByTagName('head')[0].appendChild(
					_('style', { 'type':'text/css' }).html(layerStyles).asDOM()
				);
			}

			// Fail
			if (!document.getElementsByTagName('embed')[0]) {
				document.body.appendChild(_.DOM(
					_('div', { 'id':'rparman_ytdl' }).child(
						_('div').html('Flash blocker? Whitelist YouTube and refresh.')
					)
				));
				return false;
			}

			// Format map
			var formatMap = [];
			if (typeof featuredVideoMetadata !== 'undefined') {
				formatMap = unescape(featuredVideoMetadata.swf_args.fmt_url_map).split(',');
			}
			else {
				formatMap = unescape(document.getElementsByTagName('embed')[0].getAttribute('flashvars')).split('fmt_url_map=')[1].split(',');
			}

			formatMap = (function(formatMap) {
				var out = [], i, max, keypair;
				for (i = 0, max = formatMap.length; i < max; i++) {
					keypair = formatMap[i].split('|');
					out[keypair[0]] = keypair[1];
				}
				return out;
			})(formatMap);

			// Add this function to determine whether a value is contained in an array
			indexOf = function(array, item) {
				for (var i = 0, l = array.length; i < l; i++) if (array[i] === item) return true;
				return false;
			};

			// Return the list of available formats for the video
			formatList = (function() {
				var formats, collect = [], i, max;
				formats = decodeURI(document.getElementsByTagName('embed')[0].getAttribute('flashvars').split('fmt_map=')[1].split('&')[0]).split('%2C');
				for (i = 0, max = formats.length; i < max; i++) {
					collect.push(parseInt(formats[i].split('%2F')[0], 10));
				}
				return collect;
			})();

			// Add the layer to the bottom of the screen
			document.body.appendChild(_.DOM(
				_('div', { 'id':'rparman_ytdl' }).child(
					_('div').html('Download: ').html(function() {
						return (indexOf(formatList, 37) ? (_('a', { 'href':formatMap[37], 'title':'Higher definition MP4.' }).html('1080p').asHTML() + ' | ') : '') + // If available
							(indexOf(formatList, 22) ? (_('a', { 'href':formatMap[22], 'title':'High definition MP4.' }).html('720p').asHTML() + ' | ') : '') + // If available
							_('a', { 'href':formatMap[18], 'title':'Standard definition MP4.' }).html('480p').asHTML() + ' | ' + // Always
							_('a', { 'href':formatMap[34], 'title':'Low definition Flash Video (FLV).' }).html('320p').asHTML(); // Always
					}())
				)
			));

			window.rparman_youtube_video_downloader_reset = function() {
				// Reset if we need to
				var node = document.getElementById('rparman_ytdl');
				if (node) {
					node.parentElement.removeChild(node);
				}
				rparman_youtube_video_downloader();
			};
		})();
	}
});
