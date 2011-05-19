// Automatically expand "View As One Page" links.
$(function() {
	var node = $(document).find(".ytm-view-type"),
	    viewType = node.html();

	switch (viewType) {
		case "View As One Page":
			window.location.hash ="view_as_one_page-" + node.parents('.ytm-gallery-box').attr("id");
			break;
	}
});
