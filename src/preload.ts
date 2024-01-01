import { ipcRenderer } from "electron";

ipcRenderer.on('open-file', (event)=>
{
    ipcRenderer.send('open-file-request');
});