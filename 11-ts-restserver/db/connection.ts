import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql',
  // logging:false
});

export default db;
