

// MySQL Family Products
const createMySQLConnection = () => ({
  connect: () => console.log("MySQL connection open")
});
const createMySQLQueryBuilder = () => ({
  build: (table) => `SELECT * FROM ${table} -- MySQL syntax`
});
const createMySQLTransactionManager = () => ({
  begin: () => console.log("MySQL: START TRANSACTION")
});
// Postgres Family Products
const createPostgresConnection = () => ({
  connect: () => console.log("Postgres connection open")
});
const createPostgresQueryBuilder = () => ({
  build: (table) => `SELECT * FROM ${table} -- Postgres syntax`
});
const createPostgresTransactionManager = () => ({
  begin: () => console.log("Postgres: BEGIN")
});
// abstract factories 
const createMySQLFactory = () => ({
  createConnection: createMySQLConnection,
  createQueryBuilder: createMySQLQueryBuilder,
  createTransactionManager: createMySQLTransactionManager
});
const createPostgresFactory = () => ({
  createConnection: createPostgresConnection,
  createQueryBuilder: createPostgresQueryBuilder,
  createTransactionManager: createPostgresTransactionManager
});
const factories = {
  mysql: createMySQLFactory,
  postgres: createPostgresFactory
};
const getDBFactory = (dbType) => {
  const factory = factories[dbType];
  if (!factory) {
    throw new Error(`Unsupported DB: ${dbType}`);
  }
  return factory();
};
const generateReport = (dbType, table) => {
  const factory = getDBFactory(dbType);
 const conn = factory.createConnection();
  const qb = factory.createQueryBuilder();
  const tx = factory.createTransactionManager();
conn.connect();
  tx.begin();
  const query = qb.build(table);
  console.log(query);
};
generateReport("mysql", "users");
generateReport("postgres", "orders");
