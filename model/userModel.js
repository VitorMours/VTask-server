import { DataTypes } from "sequelize";
import sequelize from "./modelConfig.js";
import bcrypt from "bcrypt";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID, 
    defaultValue:DataTypes.UUIDV4, 
    allowNull: false, 
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50), 
    allowNull: false,
    
    get(){
      const rawValue = this.getDataValue("name");
      return `name: ${rawValue}` ? rawValue : null;        
    }
  },
  surname: {
    type:  DataTypes.STRING(200),
    allowNull: true
  }, 
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(50), 
    allowNull: false,
  },
  repr: {
    type: DataTypes.VIRTUAL,
    
    get(){
      return `<${this.name} ${this.surname}: ${this.email}>`;
    }
  }
});

User.beforeCreate(async (user) => {
  const salts = 15;
  user.password = await bcrypt.hash(user.password, salts);
});

export default User;
