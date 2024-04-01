import { sequelize } from "../db";
const Card = sequelize.define("cards", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.Sequelize.INTEGER,
  },
  name_card: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
  },
  license_plate: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
  },
  vehicle_type: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
  },
});

export { Card };
