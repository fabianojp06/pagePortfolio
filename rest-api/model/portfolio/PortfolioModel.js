const db = require('../../banco/dbConexao');

module.exports = class PortfolioModel {
  static getTodos(callback) {
    return db.query('SELECT * FROM portfolio', callback);
  }
};
