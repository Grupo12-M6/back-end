import { Router } from "express"

import { authTokenMiddleware } from "../middlewares/authToken.middleware"
import { createCommentController, listCommentsController } from "../controllers/comments.controller"

const routes = Router()

const commentsRoutes = () => {
  routes.post("/", authTokenMiddleware, createCommentController)
  routes.get("/", listCommentsController);
  // routes.patch("/:id",);
  // routes.delete("/:id",);

  return routes
}

export default commentsRoutes
