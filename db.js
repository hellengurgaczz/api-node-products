const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sistema_pessoas',
  password: 'postgres',
  port: 5432,
})