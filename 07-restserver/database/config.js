const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: false,
      //   useFindAndModify: false,
      dbName: 'cafeDB'
    });
    console.log('Base de datos online.');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de conectar a la BD');
  }
};

module.exports = {
  dbConnection,
};
