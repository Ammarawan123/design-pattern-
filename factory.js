const createMySQLConnector = () => ({
  connect: () => console.log("MySQL se connect ho rahe hain (mysql2/mysql)"),
  query: (sql) => console.log(`MySQL query run: ${sql}`)
});

const createPostgresConnector = () => ({
  connect: () => console.log("PostgreSQL se connect ho rahe hain (pg)"),
  query: (sql) => console.log(`Postgres query run: ${sql}`)
});

const createMongoConnector = () => ({
  connect: () => console.log("MongoDB se connect ho rahe hain (mongodb)"),
  query: (filter) => console.log(`Mongo query run: ${JSON.stringify(filter)}`)
});
// Object map used instead of if/else for clean functional dispatching
const connectorFactories = {
  mysql: createMySQLConnector,
  postgres: createPostgresConnector,
  mongo: createMongoConnector
};
const getDBConnector = (dbType) => {
  const factory = connectorFactories[dbType?.toLowerCase()];
  if (!factory) {
    throw new Error(`Unsupported DB type: ${dbType}`);
  }
  return factory();
};
const config = { db_type: "postgres" }; 
const db = getDBConnector(config.db_type);
db.connect();
db.query("SELECT * FROM users");

