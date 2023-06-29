const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const Path = require('path')

async function sqliteConnection() {
  const database = await sqlite.open({
    filename: Path.resolve(__dirname, '..', 'database.db'),
    driver: sqlite3.Database
  })

  return database
}

module.exports = sqliteConnection
