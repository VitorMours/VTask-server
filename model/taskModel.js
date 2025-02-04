import sequelize from "./modelConfig.js";
import { DataTypes } from "sequelize";

const Task = sequelize.define("Task", {
  taskName: {type: DataTypes.STRING, allowNull: false},
  taskDescription: {type: DataTypes.STRING, allowNull: false},
  taskStatus: {type: DataTypes.BOOLEAN, allowNull: false},
  taskOwner: {type: DataTypes.UUID, allowNull: false},
});

export default Task;
