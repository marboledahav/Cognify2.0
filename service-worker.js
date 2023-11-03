chrome.scripting
    .registerContentScripts([{
        id: "session-script",
        js: ["script.js"],
        persistAcrossSessions: false,
        matches: ["https://*/*"],
        runAt: "document_start",
    }])
    .then(() => console.log("registration complete"))
    .catch((err) => console.warn("unexpected error", err))


chrome.scripting
    .getRegisteredContentScripts()
    .then(scripts => console.log("registered content scripts", scripts))

chrome.scripting
    .unregisterContentScripts({ ids: ["session-script"] })
    .then(() => console.log("un-registration complete"));