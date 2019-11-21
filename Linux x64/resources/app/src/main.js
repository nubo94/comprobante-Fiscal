const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const server = require("./app")
let win
function createWindow() {
    win = new BrowserWindow({
        title: "Comprobante fiscal (CNF)",
        width: 850,
        height: 700,
        minWidth: 850,
        minHeight: 700,
        center: true,
        resizable: true,
        icon: __dirname + "/public/static/media/icons/png/1024x1024.png"
    })
    // Cargar servidor
    win.loadURL("http://localhost:10111/")
    // win.loadURL(`file://${__dirname}/index.html`);
    // win.webContents.openDevTools()

    // Emitido cuando la ventana es cerrada.
    win.on('closed', () => {
        // Desreferencia el objeto ventana, usualmente tu guardarias ventanas
        // en un arreglo si tu aplicación soporta multi ventanas, este es el momento
        // cuando tu deberías borrar el elemento correspiente.
        win = null
    })
}

app.on('ready', createWindow)
// Salir cuando todas las ventanas estén cerradas.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// Desactivar el menubar
app.on("browser-window-created", function (err, window) {
    window.setMenu(null);
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

const port = process.env.PORT || 10111;
server.listen(port, () => {
    console.log(`Nombre de la aplicación: ${server.get("app-name")}`);
    console.log(
        `La aplicación esta corriendo en el puerto http://localhost:${port}`
    );
});

