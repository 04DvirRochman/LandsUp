module.exports = {
  PGDATABASE: process.env.PGDATABASE || "postgres",
  PGHOST: process.env.PGHOST || "localhost",
  PGPASSWORD: process.env.PGPASSWORD || "pgsql10",
  PGPORT: process.env.PGPORT || "5432",
  PGUSER: process.env.PGUSER || "postgres",
};
