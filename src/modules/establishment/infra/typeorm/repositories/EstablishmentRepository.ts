import ICreateEstablishmentDTO from "@modules/establishment/dtos/ICreateEstablishmentDTO";
import IEstablishmentRepository from "@modules/establishment/repositories/IEstablishmentRepository";
import { getRepository, Repository } from "typeorm";
import Establishment from "@modules/establishment/infra/typeorm/entities/Establishment";

class EstablishmentRepository implements IEstablishmentRepository {
  private establishmentRepository: Repository<Establishment>;

  constructor() {
    this.establishmentRepository = getRepository(Establishment);
  }

  public async create(data: ICreateEstablishmentDTO): Promise<Establishment> {
    const establishment = this.establishmentRepository.create(data);

    await this.establishmentRepository.save(establishment);

    return establishment;
  }

  public async findAll(): Promise<Establishment[]> {
    const establishments = await this.establishmentRepository.find();

    return establishments;
  }

  public async findById(id: string): Promise<Establishment> {
    const establishment = this.establishmentRepository.findOne(id);

    return establishment;
  }

  public async findByAddress(address: string): Promise<Establishment> {
    const establishment = this.establishmentRepository.findOne({
      where: { address },
    });

    return establishment;
  }

  public async save(establishment: Establishment): Promise<Establishment> {
    return this.establishmentRepository.save(establishment);
  }

  public async delete(establishment: Establishment): Promise<void> {
    await this.establishmentRepository.remove(establishment);
  }
}

export default EstablishmentRepository;
