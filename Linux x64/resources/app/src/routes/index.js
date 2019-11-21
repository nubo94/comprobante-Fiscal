const express = require("express")
const fs = require('fs')
const router = express.Router()

// Creación del archivo
router.get("/api/create", (req, res, next) => { })

router.post("/api/create", (req, res, next) => {
    fs.unlink(__dirname + '/routesNCF_Resultado.txt', (err) => {
        if (err) {
            console.log(`El archivo no se ha podido eliminar porque no existe.`);

        }
    });
    function incrementCNF(num_inicial, num_final) {
        let increment
        let from_1_To_10 = `000000`
        let from_10_To_100 = `000000`
        let from_99_To_1000 = `000000`
        let from_999_To_10000 = `000000`
        let from_9999_To_100000 = `000000`
        let from_9999_To_1000000 = `000000`
        let from_9999_To_10000000 = `000000`

        // fs.unlink(__dirname + '/routesNCF_Resultado.txt')
        // fs.unlink(__dirname + '/routesNCF_Resultado.txt', (err) => {
        //     if (err) throw err;
        //     console.log('path/file.txt was deleted');
        // });

        if (num_inicial > num_final) {
            console.log(`El número inicial no puede ser mayor al número final...`);

        } else
            for (increment = num_inicial; increment < num_final + 1; increment++) {
                if (increment < 10) {
                    from_1_To_10 = `000000`
                    let result = `A0100100101${from_1_To_10}${increment}\n`
                    fs.appendFileSync(__dirname + "/routes" + 'NCF_Resultado.txt', result)
                } else if (increment > 9 && increment < 100) {
                    from_10_To_100 = `000000`.substring(0, 5)
                    let result = `A0100100101${from_10_To_100}${increment}\n`
                    fs.appendFileSync(__dirname + "/routes" + 'NCF_Resultado.txt', result)
                } else if (increment > 99 && increment < 1000) {
                    from_99_To_1000 = `000000`.substring(0, 4)
                    let result = `A0100100101${from_99_To_1000}${increment}\n`
                    fs.appendFileSync(__dirname + "/routes" + 'NCF_Resultado.txt', result)
                } else if (increment > 999 && increment < 10000) {
                    from_999_To_10000 = `000000`.substring(0, 3)
                    let result = `A0100100101${from_999_To_10000}${increment}\n`
                    fs.appendFileSync(__dirname + "/routes" + 'NCF_Resultado.txt', result)
                } else if (increment > 9999 && increment < 100000) {
                    from_9999_To_100000 = `000000`.substring(0, 2)
                    let result = `A0100100101${from_9999_To_100000}${increment}\n`
                    fs.appendFileSync(__dirname + "/routes" + 'NCF_Resultado.txt', result)
                } else if (increment > 99999 && increment < 1000000) {
                    from_9999_To_1000000 = `000000`.substring(0, 1)
                    let result = `A0100100101${from_9999_To_1000000}${increment}\n`
                    fs.appendFileSync(__dirname + "/routes" + 'NCF_Resultado.txt', result)
                } else if (increment > 999999 && increment < 10000000) {
                    from_9999_To_10000000 = `000000`.substring(0, 0)
                    let result = `A0100100101${from_9999_To_10000000}${increment}\n`
                    fs.appendFileSync(__dirname + "/routes" + 'NCF_Resultado.txt', result)
                }
            };
    }

    const initialNumberClientParse = parseInt(req.body.user.initialNumber)
    const endNumberClientParse = parseInt(req.body.user.endNumber)
    incrementCNF(initialNumberClientParse, endNumberClientParse)
    // fs.rename("./routes/routesNCF_Resultado.txt", "./routes/NCF_Resultado.txt", (err) => {
    //     if (err) {
    //         console.log(`No se ha encontrado el archivo...`);
    //     }
    // })
})


// Descarga del archivo
router.get('/api/download', (req, res) => {
    res.download(__dirname + '/routesNCF_Resultado.txt', 'routesNCF_Resultado.txt');
});

module.exports = router