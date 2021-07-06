const { app, BrowserWindow, screen } = require('electron')

function createWindow () {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  const win = new BrowserWindow({
    top: 0,
    left: 0,
    width: width,
    height: height,
    'always-on-top': true
  })

  win.loadFile('./app/index.html')
}

app.whenReady().then(() => {
  createWindow()
})