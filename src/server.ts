import app from "./app"
import dataSource from "./data-source"

(async () => {
  await dataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

  app.listen(3333, () => {
    console.log("Data Source initialized")
  })
})