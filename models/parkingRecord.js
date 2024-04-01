import { sequelize } from "../db";
import { Card } from "./card";
import { ParkingLot } from "./parkingLot";
import { Price } from "./price";

const ParkingRecord = sequelize.define("parking_records", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.Sequelize.INTEGER,
  },
  check_in: {
    type: sequelize.Sequelize.STRING,
  },
  check_out: {
    type: sequelize.Sequelize.STRING,
  },
  id_parking_lot: {
    type: sequelize.Sequelize.INTEGER,
  },
  id_user: {
    type: sequelize.Sequelize.INTEGER,
  },
  id_card: {
    type: sequelize.Sequelize.INTEGER,
  },
  id_price: {
    type: sequelize.Sequelize.INTEGER,
  },
  total_price: {
    type: sequelize.Sequelize.FLOAT,
  },
});

Price.belongsToMany(ParkingLot, { through: ParkingRecord });
ParkingLot.belongsToMany(Price, { through: ParkingRecord });
ParkingRecord.belongsTo(Card, { foreignKey: "id_card" });

export { ParkingRecord };
