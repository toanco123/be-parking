import { Sequelize } from "sequelize";
const sequelize = new Sequelize("QLBaiXe", "postgres", "toanco123", {
  host: "localhost",
  dialect: "postgres",
});
export { sequelize };
