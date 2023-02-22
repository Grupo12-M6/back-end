import { 
  Column, 
  Entity, 
  ManyToOne, 
  OneToMany, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"

import { v4 as uuid } from "uuid";

import { User } from "./user.entity"
import { Comment } from "./comment.entity"
import { Image } from "./image.entity"

@Entity("ads")
class Ad {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 120 })
  title: string

  @Column({ name: 'ad_type', length: 15 })
  adType: string

  @Column({ length: 400 })
  description: string

  @Column()
  year: number

  @Column({ type: "decimal", precision:10, scale: 2 })
  price: number

  @Column({ type: "decimal", precision:10, scale: 2 })
  mileage: number

  @Column({ name: 'motor_type', length: 15 })
  motorType: string

  @Column({ name: "is_active" })
  isActive: boolean

  @OneToMany(() => Comment, (comment) => comment.ad)
  comments: Comment[]

  @OneToMany(() => Image, (image) => image.ads, {eager: true})
  images: Image[]

  @ManyToOne(() => User, {eager: true})
  user: User

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

export { Ad }
