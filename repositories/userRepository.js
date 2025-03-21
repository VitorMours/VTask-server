

class UserRepository {

  constructor(userModel){
    this.userModel = userModel;
  }

  async findByUuid(uuid){
    return this.userModel.findByPk(uuid);
  }

  async findByEmail(email){
    return this.userModel.findOne({where: { email } });
  }

  async create(userData){
    return this.userModel.create(userData);
  }

  async update(uuid, userData){
    const user = await this.userModel.findByPk(uuid);
    return user.update(userData);
  }

  async delete(uuid){
    const user = await this.userModel.findByPk(uuid);
    return user.destroy()
  }
  async all(){
    const users = await this.userModel.findAll();
    return users;
  }
  async count(){
    return await this.userModel.count();
  }
}

export default UserRepository;
