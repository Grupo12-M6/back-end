import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 8 })
  cep: string

  @Column({ length: 2 })
  state: string

  @Column({ length: 80 })
  city: string

  @Column({ length: 240 })
  street: string

  @Column({length: 120 })
  number: number

  @Column({ length: 100, nullable: true })
  complement: string
}

export { Address }
