
function loadContent() {
	// Security hazard from injecting arbitrary HTML into body? meh.

	chrome.storage.local.get({'url': '', 'sync': true}, function(localstorage) {
		if(localstorage.sync === true) {
			chrome.storage.sync.get({'url':''}, function(syncedstorage) {
				document.body.innerHTML = syncedstorage.url;
			});
		} else {
			document.body.innerHTML = localstorage.url;
		}
	});
}

loadContent();

let favicon = document.getElementById('favicon');

if (window.matchMedia) {
	let mediaql = window.matchMedia('(prefers-color-scheme: dark)');

	if (mediaql.matches) {
		// Dark mode
		favicon.href = './icon16.png';
	}
	else {
		favicon.href = './icon16-dark.png';
	}

    mediaql.addEventListener('change', event => {
		location.reload();
	});
}