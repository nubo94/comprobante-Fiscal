const express = require("express");
const route = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors")
var compression = require('compression');
var app = express();
var helmet = require('helmet');
const path = require("path");


// settings
app.set("app-name", "Comprobante fiscal");
app.use(express.static(path.join(__dirname, "public")));
// middleware
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// Config Middleware
app.disable('x-powered-by');

// rutas
app.use(route);

// const port = process.env.PORT || 1111;
// app.listen(port, () => {
//     console.log(`Nombre de la aplicación: ${app.get("app-name")}`);
//     console.log(
//         `La aplicación esta corriendo en el puerto http://localhost:${port}`
//     );
// });

module.exports = app