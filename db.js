const Sequelize = require("sequelize");
const database = new Sequelize("Products", "postgres", "261315@globo", {
  host: "localhost",
  dialect: "postgres"
});

database.authenticate().then(() => {
  console.log('Conexão com banco de dados estabelecida');
}).catch((error) => {
  console.log(error)
});

module.exports = database;