import express from 'express';        // Fornece um conjunto de recursos para aplicações web
import bodyParser from 'body-parser'; // Analisa corpos de solicitação de entrada
import { router } from './routes';    
import cors from 'cors'               // Para habilitar o cors

const app = express();
const port = 8080;

app.use(cors());

// Aumenta o limite para o tamanho do body
app.use(bodyParser.json({limit: '40mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '40mb'}))
app.use(router);

// Servidor
app.listen(
  port, 
  () => console.log('Server is running')
);