chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(null, {
		file: "libs/jquery.js"
	}, function () {
		chrome.tabs.executeScript(null, {
			file: "src/content.js"
		});
	});
});

chrome.runtime.onMessage.addListener(function(message){
	if(message.info === 1){
		chrome.tabs.executeScript(null, {
			file: "libs/jquery.js"
		}, function (a) {
			chrome.tabs.executeScript(null, {
				file: "src/content_temp.js"
			});
		});
		
	} else {

		
	}
 });


// chrome.app.window.onBoundsChanged.addListener(function (aaa) {
// 	let color = aaa
// 	chrome.tabs.executeScript(null, {
// 		file: "libs/jquery.js"
// 	}, function (aa) {
// 		chrome.tabs.executeScript(null, {
// 			file: "src/content.js"
// 		});
// 	});
// });


// chrome.app.runtime.onLaunched.addListener(function() {
// 	chrome.app.window.create(
// 	  'index.html', 
// 	  {'bounds': {'width': 1010, 'height': 700}},
// 	  onWindowCreated
// 	);
//   });