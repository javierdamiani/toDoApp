import Sequalize from "sequelize";

let db = null;

export default (app) => {
  const config = app.libs.config;
  if (!db) {
    const sequelize = new Sequalize(
      config.database,
      config.username,
      config.password,
      config.params
    );
  }
  return db;
};
