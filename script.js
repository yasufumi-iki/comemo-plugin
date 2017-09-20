chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		greyscale();
	}
});
function greyscale() {
	var now_url = location.href;
	var comemo_url = 'https://comemo.io/entries/new?url=' + now_url;
	window.open(comemo_url, '_blank');
}