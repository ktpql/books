import { MenuItemConstructorOptions } from "electron";

const { app, BrowserWindow, Menu, shell } = require('electron');

const hasOpenWindows = ()=>{
    let result = false;

    if(BrowserWindow.getAllWindows().length > 0)
    {
        result = true;
    }

    return result;
}

const createApplicationMenu = ()=>{
    const template: MenuItemConstructorOptions[] = [
        {
            'label': 'File',
            submenu: [
                {
                    label: 'Open File',
                    accelerator: 'CommandOrControl+O',
                    click(item, focusedWindow) { 
                        if(focusedWindow)
                        {
                            focusedWindow.webContents.send('open-file'); 
                        }
                    }
                },
            ],
        },
        {
            label: 'Edit',
            submenu: [
                {
                    label: 'Undo',
                    accelerator: 'CommandOrControl+Z',
                    role: 'undo',
                },
                {
                    label: 'Redo', 
                    accelerator: 'Shift+CommandOrControl+Z',
                    role: 'redo',
                },
                { type: 'separator' },
                {
                    label: 'Cut',
                    accelerator: 'CommandOrControl+X',
                    role: 'cut',
                },
                {
                    label: 'Copy',
                    accelerator: 'CommandOrControl+C',
                    role: 'copy',
                },
                {
                    label: 'Paste',
                    accelerator: 'CommandOrControl+V',
                    role: 'paste',
                },
                {
                    label: 'Select All',
                    accelerator: 'CommandOrControl+A',
                    role: 'selectAll',
                },
            ],
        },
        {
            label: 'Window',
            role: 'window',  // This enables the display of a list of currently open windows
            submenu: [
                {
                    label: 'Minimize',
                    accelerator: 'CommandOrControl+M',
                    role: 'minimize',
                },
                {
                    label: 'Close',
                    accelerator: 'CommandOrControl+W',
                    role: 'close',
                },
            ],
        },
        {
            label: 'Help',
            role: 'help',
            submenu: [
                {
                    label: 'Visit Website',
                    click() {/* TODO: Implement here*/}
                },
                {
                    label: 'Toggle Developer Tools',
                    click(item, focusedWindow) {
                        if(focusedWindow)
                        {
                            focusedWindow.webContents.toggleDevTools();
                        }
                    }
                }
            ],
        }
    ];
    
    const applicationMenu = Menu.buildFromTemplate(template);

    return Menu.setApplicationMenu(applicationMenu);
}

export {createApplicationMenu}