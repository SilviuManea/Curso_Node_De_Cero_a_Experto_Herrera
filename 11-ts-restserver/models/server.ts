import express, { Application } from 'express';

class Server {
    
    private app:Application;
    private port:string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000' // Se pone por defecto el 8000 porque this.port no puede ser undefined
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en el puerto '+ this.port);
        })
    }

}

export default Server;