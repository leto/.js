// Automatically expand "View As One Page" links.
(function() {
	var node = $(document).find(".ytm-view-type"),
	    viewType = node.html(),
	    articleURI = window.location.href;

	switch (viewType) {
		case "View As One Page":
			articleURI = window.location.href + "#view_as_one_page-" + node.parents('.ytm-gallery-box').attr("id");
			break;
	}

	window.location.href = 'https://www.readability.com/pr?url=' + encodeURIComponent(articleURI);
})();
