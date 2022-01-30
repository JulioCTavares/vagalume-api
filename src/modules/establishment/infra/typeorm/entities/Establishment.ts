import Manager from "@modules/manager/infra/typeorm/entities/Manager";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

export enum Categories {
  HOTEL = "hotel",
  COLLEGE = "college",
  MALL = "mall",
}

@Entity("establishment")
class Establishment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Manager, (manager) => manager, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn({ name: "manager_id", referencedColumnName: "id" })
  manager: Manager;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  category: Categories;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Establishment;
