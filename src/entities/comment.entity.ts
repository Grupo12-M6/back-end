import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"

import { User } from "./user.entity"
import { Ad } from "./ad.entity"

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 500 })
  content: string

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @ManyToOne(() => User, user => user.id)
  user: User

  @ManyToOne(() => Ad,  ad => ad.id)
  ad: Ad
}

export { Comment }
