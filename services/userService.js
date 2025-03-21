import bcrypt from "bcrypt";

class UserService{

  constructor(userRepository){
    this.userRepository = userRepository;
  }

  async allUsers(){
    return this.userRepository.all();
  }

  async activeUserQuantity(){
    return this.userRepository.count();
  }

  async registerUser(userData){

    const existingUser = await this.userRepository.findByEmail(userData.email);

    if(existingUser){
      throw new Error("user already exists in the database.");
    }

    return await this.userRepository.create(userData);    
  }
  
  async updateUser(userData){
    const existingUser = await this.userRepository.findByEmail(userData.email);
    
    if(!existingUser){
      throw new Error("The user does not exist in the database.");
    }

    return await this.userRepository.update(existingUser.id, userData)

  }

  async deleteUser(userData){

    const existingUser = await this.userRepository.findByEmail(userData.email);
    
    if(!existingUser){
      throw new Error("The user don\'t even exist in the database.");
    }
    
    if (!bcrypt.compare(userData.password, existingUser.password)){  
      throw new Error("The password it\'s incorrect");
    }

    return await this.userRepository.delete(userData.uuid);
  }
}



export default UserService;

