import { 
  Column, 
  Entity, 
  ManyToOne, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"

import { v4 as uuid } from "uuid";

import { Ad } from "./ad.entity"

@Entity("images")
class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => Ad, (ad) => ad.images)
  ads: Ad;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date;
  
  constructor() {
    if (!this.id) {
        this.id = uuid();
    }
  }
}

export { Image }