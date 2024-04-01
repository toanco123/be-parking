import { sequelize } from "../db";
import { ParkingLot } from "./parkingLot";
import { ParkingRecord } from "./parkingRecord";

const Price = sequelize.define("prices", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.Sequelize.INTEGER,
  },
  vehicle_type: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: sequelize.Sequelize.FLOAT,
    allowNull: false,
  },
  id_parking_lot: {
    type: sequelize.Sequelize.INTEGER,
    allowNull: false,
  },
});

Price.belongsTo(ParkingLot, { foreignKey: "id_parking_lot" });

export { Price };
