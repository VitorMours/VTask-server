import User from "../model/userModel.js";
import bcrypt from "bcrypt";

export async function getSignup(request, response){
  console.log("pegando login para o usuario");
}

export async function postSignup(request, response){
  try{
    let { name, surname, email, password } = request.body;
    console.log(password);
    let user = await User.create({name, surname, email, password})
    return response.status(200).send({"user": user});
  }catch(error){
    console.log(error);
    return response.status(400).send({error: error.message});
  }
}

export async function postLogin(request, response) {

  try{      
    const {credential, password} = request.body;
    console.log(`${credential} -> ${password}`);
    let user = await User.findOne({where: {email: credential}}); // TODO: Terminar isso daqui viu
    console.log(`This is the user finded: ${user}: ${user.name} ${user.email}`);
    console.log(user.email);
    const passwordValidation = await bcrypt.compare(password, user.password);
    
    if(user === null){
      return response.status(400).send({error: "The user was not found in the database, do not exists"});
    }else if(!passwordValidation){
      return response.status(400).send({error: "The user send a wrong password, please try again"})
    }else{
      return response.status(200).send({"message":"User connected successfully","user_data": user});
    }
  } catch(error){
    return response.status(400).send({error:error.message});
  }
}
  
