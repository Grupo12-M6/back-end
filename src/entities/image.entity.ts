import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { Ad } from "./ad.entity"

@Entity("images")
class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  url: string

  @ManyToOne(() => Ad)
  ad: Ad
}

export { Image }