import { sequelize } from "../db";
import { ParkingRecord } from "./parkingRecord";
const ParkingLot = sequelize.define("parking_lots", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.Sequelize.INTEGER,
  },
  location: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
  },
});

export { ParkingLot };
