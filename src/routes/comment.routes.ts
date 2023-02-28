import { Router } from "express"

import { authTokenMiddleware } from "../middlewares/authToken.middleware"
import {
  createCommentController,
  deleteCommentController,
  listCommentsController,
  updateCommentController,
} from "../controllers/comments.controller"

const routes = Router()

const commentsRoutes = () => {
  routes.post("/", authTokenMiddleware, createCommentController)
  routes.get("/", listCommentsController)
  routes.patch("/:id", authTokenMiddleware, updateCommentController)
  routes.delete("/:id", authTokenMiddleware, deleteCommentController)

  return routes
}

export default commentsRoutes
