const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    fullscreen: true, width: 1000, height: 640, backgroundColor: '#07040b',
    title: 'Mroczny Rycerz', autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && i.key === 'F11') win.setFullScreen(!win.isFullScreen());
    if (i.type === 'keyDown' && i.key === 'Escape' && win.isFullScreen()) win.setFullScreen(false);
  });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
