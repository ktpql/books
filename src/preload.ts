import { contextBridge, ipcRenderer } from "electron";

let filePath:string = null;

ipcRenderer.on('open-file', (event)=>
{
    ipcRenderer.invoke('open-file-request').then((result)=>{
        filePath = result;
    });
});

contextBridge.exposeInMainWorld("BackendServices", {
    PdfDocument: {
        async get() 
        {   
            if(filePath)
            {
                const html = await ipcRenderer.invoke('read-pdf-as-html', filePath);

                return html as string;
            }
        }
    }
});