const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {
  // El uid es lo que almacenaremos en el payload del JWT
  // Como queremos devolver una promesa y trabajar con await aqui devolvemos la promesa
  return new Promise((resolve, reject) => {
    // No debemos poner passwords ni datos sensibles en el payload ya que se puede descifrar
    const payload = { uid };
    // Firmamos el token
    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: '4h',
      },
      (err, token) => {
        if (err) {
          // Si falla rechaza la promesa indicando que ha ido mal
          console.log(err);
          reject('No se pudo generar el token');
        } else {
          // Si va bien resuelve la promesa con el token
          resolve(token);
        }
      },
    );
  });
};

module.exports = {
  generarJWT,
};
