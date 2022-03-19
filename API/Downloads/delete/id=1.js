ar downloadId = 13;

function onCanceled() {
  console.log(`Canceled download`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var canceling = browser.downloads.cancel(downloadId);
canceling.then(onCanceled, onError);
