const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios'; //ruta a la que atacaremos en el postman o desde el front

    // Conectar a BD
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi apliación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(
      this.usuariosPath,
      require('../routes/usuarios.route'),
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor lanzado en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
