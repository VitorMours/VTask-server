import { DataTypes } from "sequelize";
import sequelize from "./modelConfig.js";

const User = sequelize.define("User", {
  id: {type: DataTypes.UUID, defaultValue:DataTypes.UUIDV4, allowNull: false, primaryKey: true},
  name: {
    type: DataTypes.STRING(50), 
    allowNull: false,
    get(){
      const rawValue = this.dataValue("name");
      return `name: ${rawValue}` ? rawValue : null;        
    }

  },
  surname: {type:  DataTypes.STRING(200), allowNull: true}, 
  email: {type: DataTypes.STRING, allowNull: false, unique: true},
  password: {
    type: DataTypes.STRING(50), 
    allowNull: false,
    set(value){
      // TODO: Create the correct way to add the password, with hash to be save and be easy to dehash when necessary
      this.setDataValue("password", )
    }
  },
  repr: {
    type: DataTypes.VIRTUAL,
    get(){
      return `<${this.name} ${this.surname}: ${this.email}>`;
    }
  }
});

export default User;
