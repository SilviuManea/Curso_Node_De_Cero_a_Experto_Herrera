import cors from 'cors';
import express, { Application } from 'express';
import db from '../db/connection';
import userRoutes from '../routes/usuario.route';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: '/api/usuarios',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000'; // Se pone por defecto el 8000 porque this.port no puede ser undefined

    // Conexión con la BD
    this.dbConnection();
    // Habilitar el middleware
    this.middlewares();
    // Definir mis rutas y habilitarlas
    this.routes();
  }

  // DB connection

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('Db Online');
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura del body
    this.app.use(express.json()); // Express va a parsearnos a json lo que venga en el body

    // Carpeta pública
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto ' + this.port);
    });
  }
}

export default Server;
