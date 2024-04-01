import { sequelize } from "../db";
import { ParkingRecord } from "./parkingRecord";
import bcrypt from "bcryptjs";
const User = sequelize.define("users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.Sequelize.INTEGER,
  },
  username: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6, 50],
        msg: "Password must be between 6 and 50 characters in length.",
      },
    },
  },
  address: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: sequelize.Sequelize.INTEGER,
    allowNull: false,
  },
  working_time: {
    type: sequelize.Sequelize.STRING,
    allowNull: false,
  },
});

User.beforeCreate(async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  } catch (error) {
    console.log(error);
  }
});

User.hasMany(ParkingRecord, { foreignKey: "id_user" });

export { User };
