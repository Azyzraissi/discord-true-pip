// Background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.enable) {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: ['content.js']
      });
    }
  });