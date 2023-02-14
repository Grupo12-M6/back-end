import app from "./index"
import dataSource from "./data-source"

(async () => {
  await dataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

  app.listen(3000, () => {
    console.log("Data Source initialized")
  })
})()