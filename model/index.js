import sequelize from "./modelConfig.js";
import User from "./userModel.js";
import Task from "./taskModel.js";

// Defining the association between these two models: User and Tasks
User.hasMany(Post, {foreignKey: "taskOwner"});
Task.belongsTo(User, {foreignKey: "taskOwner"});

// Syncing the models 
sequelize.sync({ force: true }).then(() => {
  console.log("Databases are synced with no problems!");
}).catch((error) => {
  console.log(`Error syncing the database: ${error}`);
});

export { User, Task };
