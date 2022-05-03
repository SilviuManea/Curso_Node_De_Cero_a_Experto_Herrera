import dotenv from 'dotenv';
import Server from './models/server';
// Configurar .env
dotenv.config();
// Instanciamos la clase server
const server = new Server;
// Llamamos la función listen
server.listen();
