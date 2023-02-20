import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

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

  @Column({ length: 10 })
  mileage: number

  @Column({ length: 4 })
  year: number

  @Column({ length: 10})
  price: number

  @Column({ name: 'motor_type', length: 15 })
  motorType: string

  @Column({ name: "is_active" })
  isActive: boolean

  @OneToMany(() => Comment, (comment) => comment.ad)
  comments: Comment[]

  @OneToMany(() => Image, (image) => image.ad)
  images: Image[]

  @ManyToOne(() => User)
  user: User
}

export { Ad }
