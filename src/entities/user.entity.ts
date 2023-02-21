import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"
import { Exclude } from "class-transformer"

import { v4 as uuid } from "uuid";

import { Ad } from "./ad.entity"
import { Address } from "./address.entity"
import { Comment } from "./comment.entity"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 120 })
  name: string

  @Column({ unique: true, length: 120 })
  email: string

  @Column({ length: 240 })
  @Exclude()
  password: string

  @Column({ length: 15 })
  cpf: string

  @Column({ name: "created_number", length: 11 })
  phoneNumber: string

  @Column()
  birthday: Date

  @Column({ length: 400 })
  description: string

  @Column({ name: "is_seller" })
  isSeller: boolean

  @OneToOne(() => Address, (address) => address.id, {
    eager: true,
    nullable: false,
  })
  @JoinColumn()
  address: Address

  @OneToMany(() => Ad, (ad) => ad.user)
  ads: Ad[]

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[]

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
