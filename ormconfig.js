module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "docker",
  "database": "database_insights",
  "entities": ["src/modules/**/entities/*.ts"],
  "migrations": [
    "src/shared/infra/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/shared/infra/typeorm/migrations"
  }
}