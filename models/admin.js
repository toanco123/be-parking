import { sequelize } from "../db";
import bcrypt from "bcryptjs";

const Admin = sequelize.define("admins", {
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
});

Admin.beforeCreate(async (admin) => {
  try {
    const hashedPassword = await bcrypt.hash(admin.password, 10);
    admin.password = hashedPassword;
  } catch (error) {
    console.log(error);
  }
});

export { Admin };
