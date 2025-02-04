import Task from "../model/taskModel.js";
import User from "../model/userModel.js";

export async function createTask(request, response){
  try{
    const { taskName, taskDescription, taskStatus, taskOwner} = request.body;    
    const user = await User.findByPk(taskOwner);

    if (!user){
      return response.status(400).send({error: "user not found in the database, it does not exists..."});
    }else{
      const task = await Task.create({taskName, taskDescription, taskStatus, taskOwner})
      return response.status(200).send(task);
    }
    return response.status(420).send({message: "Chill bro"});

  }catch(error){
    response.status(400).send({error: error.message})
  }
}
export async function getTaskQuantity(request, response){
  try{
    const taskQuantity = await Task.count();
    return response.status(200).send({"taskQuantity": taskQuantity});

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}

export async function getAllTasks(request, response){
  try{
    const tasks = await Task.findAll();
    return response.status(200).send(tasks);

  }catch(error){
    return response.status(400).send({error: error.message})
  }
}

export async function getTask(request, response){
  try {
    const taskId = request.params.id;
    const task = await Task.findByPk(taskId);

    if(!task){
      throw new Error("Was not finded the specific tasks with this register number");
    }
    return response.status(200).send(task);

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}

export async function deleteTask(request, response){
  try{ 
    const id = request.params.id;
    const pk = Number(id);
    const task = await Task.findByPk(pk);
    await task.destroy()
    return response.status(200).send(`The task number ${pk} has been deleted`);

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}

export async function updateTask(request, response){
  try{
    switch(request.method) {
      case "GET":
        
        try{
          console.log("Passando pelo metodo get");
          const id = Number(request.params.id);
          const task = await Task.findByPk(id)

          if(!task){
            return response.status(400).send({"message": "Task not found in the database"});
          }

          return response.status(200).send(task)
        }catch(error){
          return response.status(400).send({error: error.message});
        }
        break;

      case "PUT":
        try{

          const id = Number(request.params.id);
          const task = await Task.findByPk(id);
          return response.status(200).send(task);

        }catch(error){
          return response.status(400).send({error: error.message});
        }
        break;
      
      default:
        return response.status(400).send({message: "This http method do not have permission to work in this route"});
        break;
    }

  }catch(error){
    return response.status(400).send({error: error.nmessage});
  }
}
