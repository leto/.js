# dotjs scripts

## What is dotjs?
dotjs is an extension that executes JavaScript files in `~/.js` based on their filename and the domain of the site you are visiting.

If you navigate to <http://www.google.com>, dotjs will execute `~/.js/google.com.js`. This makes it super easy to spruce up your favorite pages using JavaScript.

Bonus: files in `~/.js` have jQuery 1.5 loaded, regardless of whether the site you're hacking uses jQuery.

GreaseMonkey user scripts are great, but you need to publish them somewhere and re-publish after making modifications. With dotjs, just add or edit files in `~/.js`.

## Browser support

* [Chrome/Chromium](https://github.com/defunkt/dotjs)
* [Safari/WebKit](https://github.com/wfarr/dotjs.safariextension)
* [Firefox](https://github.com/rlr/dotjs-addon)

## What are these scripts?

These are my own scripts that I use for various sites. You can use them if you want. They're [MIT licensed](http://opensource.org/licenses/mit-license).

## How do I install?

	cd ~
	git clone git://github.com/skyzyx/.js.git

dotjs will automatically pick them up and start applying them. :)
