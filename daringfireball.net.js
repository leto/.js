$(function() {
	var www = {};

	(function(){var g=function(c,a){var b=this,h=document,g=/[.#]/,d;a=function(e,b){var a={},f;for(f in e)e.hasOwnProperty(f)&&(a[f]=e[f]);for(f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);return a}(a,function(b){var a={"class":[]},c=/[.#]/,f,d,g;if(!c.test(b))return{};c=b.split(c);d=c.shift().length;g=a["class"];for(f in c)if(c.hasOwnProperty(f))b[d]==="#"?a.id=c[f]:g.push(c[f]),d+=c[f].length+1;a["class"]=g;a["class"].length||delete a["class"];return a}(c));b.e=g.test(c)?h.createElement(c.split(g).shift()):
	h.createElement(c);if(a)for(d in a)if(a.hasOwnProperty(d))typeof a[d]==="object"&&typeof a[d].length==="number"&&typeof a[d].splice==="function"&&(a[d]=a[d].join(" ")),d.toString()==="class"?b.e.className=a[d]:b.e.setAttribute(d,a[d]);b.child=b._=function(e){if(typeof e!=="object"||typeof e.length!=="number"||typeof e.splice!=="function")e=[e];for(var a=0,c=e.length;a<c;a++){if(typeof e[a]==="undefined")break;typeof e[a].asDOM!=="undefined"?b.e.appendChild(e[a].asDOM()):b.e.appendChild(e[a])}return b};
	b.html=b.H=function(a,c){if(arguments.length===0)return b.asHTML();c?b.e.innerHTML=a:b.e.innerHTML+=a;return b};b.text=b.T=function(a){if(arguments.length===0)return b.asText();if(b.e.innerText)b.e.innerText=a;else{var c=document.createTextNode(a);b.e.appendChild(c)}return b};b.asDOM=b.dom=function(){return b.e};b.asHTML=function(){var a=h.createElement("div");a.appendChild(b.e);return a.innerHTML};b.asText=function(){var a=h.createElement("div");a.appendChild(b.e);if(a.innerText)return a.innerText;
	else if(a.textContent)return a.textContent};return b};www.DOMBuilder=function(c,a){return new g(c,a)};www.DOMBuilder.DOM=function(c){var a=document.createDocumentFragment();for(c=(new g("div"))._(c).dom().childNodes;c.length;)a.appendChild(c[0]);return a}})();

	var _ = www.DOMBuilder;
	$('#Sidebar ul').get(0).appendChild(_.DOM(
		_('li').child(
			_('a', { 'href':'http://fireballed.org' + window.location.pathname }).html('Fireballed?')
		)
	));
});
