import "reflect-metadata"
import "dotenv/config"
import path from "path"
import { DataSource, DataSourceOptions } from "typeorm"

import { User } from "./entities/user.entity"
import { Ad } from "./entities/ad.entity"
import { Image } from "./entities/image.entity"
import { Address } from "./entities/address.entity"
import { Comment } from "./entities/comment.entity"

import { createUser1676919685526 } from "./migrations/1676919685526-createUser"
import { createImageAndAttAds1676986043765 } from "./migrations/1676986043765-createImageAndAttAds"
import { attEntities1676987673582 } from "./migrations/1676987673582-attEntities"

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}")
  const migrationsPath: string = path.join(__dirname, "./migrations/**.{js,ts}")

  const nodeEnv = process.env.NODE_ENV

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    }
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [User, Ad, Image, Address, Comment],
    }
  }

  return {
    type: "postgres",
    host: process.env.HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    port: 5432,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [User, Ad, Image, Address, Comment],
    migrations: [createUser1676919685526, createImageAndAttAds1676986043765, attEntities1676987673582],
  }
}

const dataSourceConfig = setDataSourceConfig()
export default new DataSource(dataSourceConfig)
