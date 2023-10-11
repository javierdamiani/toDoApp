module.exports = {
  database: "Tasks",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "tasks-db.sqlite",
    define: {
      underscored: true,
    },
    operatorsAliases: false,
  },
};
