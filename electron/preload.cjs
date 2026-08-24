const { contextBridge, ipcRenderer } = require("electron");

console.log("PRELOAD LOADED");

contextBridge.exposeInMainWorld("electronAPI", {
    saveFile: (data) => ipcRenderer.invoke("save-file", data)
});