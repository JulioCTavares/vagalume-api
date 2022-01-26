import ICreateManagerDTO from "@modules/manager/dtos/ICreateManagerDTO";
import IManagerRepository from "@modules/manager/repositories/IManagerRepository";
import { getRepository, Repository } from "typeorm";

import Manager from "@modules/manager/infra/typeorm/entities/Manager";

class ManagerRepository implements IManagerRepository {
  private managerRepository: Repository<Manager>;

  constructor() {
    this.managerRepository = getRepository(Manager);
  }

  public async create(data: ICreateManagerDTO): Promise<Manager> {
    const manager = this.managerRepository.create(data);

    await this.managerRepository.save(manager);

    return manager;
  }

  public async findAll(): Promise<Manager[]> {
    const managers = await this.managerRepository.find();

    return managers;
  }

  public async findById(id: string): Promise<Manager | undefined> {
    const manager = await this.managerRepository.findOne(id);

    return manager;
  }

  public async findByEmail(email: string): Promise<Manager | undefined> {
    const manager = await this.managerRepository.findOne({ where: { email } });

    return manager;
  }

  public async save(manager: Manager): Promise<Manager> {
    return this.managerRepository.save(manager);
  }

  public async delete(manager: Manager): Promise<void> {
    await this.managerRepository.remove(manager);
  }
}

export default ManagerRepository;
