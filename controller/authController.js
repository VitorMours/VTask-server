import User from "../model/userModel.js";


export async function getSignup(request, response){
  console.log("pegando login para o usuario");
}

export async function postSignup(request, response){
  try{
    let { name, surname, email, password } = request.body;
    let user = await User.create({name, surname, email, password})
    
    return response.status(200).send({"user": user});
  }catch(error){
    console.log(error);
    return response.status(400).send({error: error.message});
  }
}

export async function postLogin(request, response) {

  try{      
    const {email, password} = request.body;


    let user = await User.findOne({where: {email: email}}) // TODO: Terminar isso daqui viu
    if(user === null){
      console.log("The user was not found in the database, do not exists");
    }else{

      console.log(user);
      return response.status(200).send({"user" :user});

    }

    console.log(`Pegando os dados providos em ${request.body}`);

  } catch(error){
    return response.status(400).send({error:error.message});


  }


}
  
