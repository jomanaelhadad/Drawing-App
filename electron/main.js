import path from "path";
import { fileURLToPath } from "url";
import { app, BrowserWindow, ipcMain, dialog } from "electron";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,

        webPreferences: {
            preload: path.join(__dirname, "preload.cjs")
        }
    });

    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
}

ipcMain.handle("save-file", async (event, data) => {

    const result = await dialog.showSaveDialog({
        title: "Save Drawing",
        defaultPath: "drawing.png",
        filters: [
            { name: "PNG Image", extensions: ["png"] }
        ]
    });

    if (result.canceled) {
        return false;
    }

    const base64Data = data.replace(/^data:image\/png;base64,/, "");

    fs.writeFileSync(result.filePath, base64Data, "base64");

    return true;
});

app.whenReady().then(createWindow);