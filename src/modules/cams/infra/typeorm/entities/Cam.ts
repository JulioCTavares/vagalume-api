import Establishment from "@modules/establishment/infra/typeorm/entities/Establishment";
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

@Entity("cam")
class Cam {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  ip: string;

  @ManyToOne(() => Establishment, (establishment) => establishment, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn({ name: "establishment_id", referencedColumnName: "id" })
  establishment: Establishment;

  @Column()
  user: string;

  @Column()
  model: string;

  @Column()
  installation: Date;

  @Column()
  countdown: string;

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

export default Cam;
