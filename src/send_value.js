window.addEventListener('resize', function (e) {
    // here you send message to background.js
    var message = {
        info: 1}

    chrome.runtime.sendMessage("", message);
});