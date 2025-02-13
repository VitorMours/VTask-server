import User from "../model/userModel.js";

export async function getUserQuantity(request, response){
  try{
    let user_quantity = await User.count();
    response.status(200).send({"user_quantity": user_quantity})

  }catch(error){
    console.log(`Error when catching user quantity: ${error.message}`);
    response.status(400).send({error: error.message});
  }
}


export async function createUser(request, response){
  try {
    const data = request.body;
    const user = await User({...data});
    response.status(200).send({"user": user});

  }catch(error){
    response.status(400).send({error: error.message});
  }
}


export async function deleteUser(request, response){
  try{
    const password = request.body;
    const user = await User.findOne({where: {email: email}});

    if(!user){
      return response.status(400).send({error: "The user does not exist in the database"});
    }else{
      if (!(user.password === password)){
        return response.status(400).send({error: "The password is diferent then the registered in the database"});
      }else{
        await user.destroy();
        return response.status(200).send({message: "User was deleted!"});
      }
    }
  }catch(error){
    return response.status(400).send({error: error.message});
  }
}

export async function updateUser(request, response){
  try{
    const { name, surname, password, email } = request.body;
    const user = await User.findOne({ where: {email: email} });
    
    if(!user){

      await user.update({name, surname, password, email });
      return response.status(200).send({user: user});

    }else{
      return response.status(400).send({message: "User was not found in the database"});
    }

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}

export async function getUserById(request, response) {
  try{


    return response.status(200).send("user finded");

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}


export async function updateUserById(request, response){


  try{


    return response.status(200).send("Usuario atualziado dentro do banco de dados");


  }catch(error){
    return response.status(400).send({error: error.message})
  }
}






















export async function userTasks(request, response){
  try {




  }catch(error){
    response.status(400).send({error:error.message});
  }

}


export async function userDashboard(request, response){

  try{
    
    const userEmail = request.params.email;
    const user = await User.findOne({where: {email, email}})

  }catch(error){
    response.status(400).send({error: error.message});
  }
}
