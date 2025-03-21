import sequelize from "./modelConfig.js";
import { DataTypes } from "sequelize";

const Task = sequelize.define("Task", {
  taskName: {
    type: DataTypes.STRING(100), 
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
    primaryKey: true
  },
  taskDescription: {
    type: DataTypes.STRING(250), 
    allowNull: false
  },
  taskStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  taskOwner: {
    type: DataTypes.UUID, 
    allowNull: false
  },
  repr: {
    type: DataTypes.VIRTUAL,
    get(){
      return `${taskOwner} - ${taskStatus} - ${taskName}: ${taskDescription}`; 
    }
  }
});


export default Task;
