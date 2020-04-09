const sqlite3 = require("sqlite3").verbose();
const database = new sqlite3.Database("src/database/bill.sqlite");

export default database;