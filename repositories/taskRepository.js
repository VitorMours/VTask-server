
class TaskRepository{
  
  constructor(taskModel){
    this.taskModel = taskModel;
  }

  async def registerTask(){

  }
  
  async def findByUuid(){

  }
  
  async def updateTask(){

  }
  
  async def deleteTask(){

  }

  async def all(){
    return await this.taskModel.findAll();
  }

  async def count(){
    return await this.taskModel.count();
  }
}
