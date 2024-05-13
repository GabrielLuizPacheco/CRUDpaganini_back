import express from "express"
import {funcionarioController} from "./controllers/funcionarioController.js"
import bodyParser from "body-parser";
import cors from 'cors'
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(funcionarioController);

app.listen(3000, (error) => {
    if (error) return console.log(error)

    console.log('server on')
});
