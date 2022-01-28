import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("cam")
class Cam {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  ip: string;

  @Column()
  user: string;

  @Column()
  model: string;

  @Column()
  installation: Date;

  @Column()
  counters: string[];

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
