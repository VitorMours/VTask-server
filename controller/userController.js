import User from "../model/userModel.js";
import UserRepository from "../repositories/userRepository.js";
import UserService from "../services/userService.js";

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);

export async function allUsers(request, response){
  try{

    const users = await userService.allUsers();
    const quantity = await userService.activeUserQuantity();
    return response.status(200).send({"users_quantity":quantity, "users_data": users})

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}

export async function createUser(request, response){
  try {

    const newUser = await userService.registerUser(request.body);
    return response.status(201).send({"user": newUser});

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}

export async function updateUser(request, response){
  try{
    
    const user = await userService.updateUser(request.body);
    return response.status(200).send({"user":user});

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}

export async function deleteUser(request, response){
  try{

    const result = await userService.deleteUser(request.body);
    return response.status(200).send({"message": result});

  }catch(error){
    return response.status(400).send({error: error.message});
  }
}
