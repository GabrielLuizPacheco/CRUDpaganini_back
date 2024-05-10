import express from "express"
import {funcionarioController} from "./controllers/funcionarioController.js"
import bodyParser from "body-parser";
const app = express();


app.use(bodyParser.json());
app.use(funcionarioController);

app.listen(3000, (error) => {
    if (error) return console.log(error)

    console.log('server on')
});
