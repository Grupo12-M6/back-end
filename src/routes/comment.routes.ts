import { Router } from "express";

import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import {
  createCommentController,
  deleteCommentController,
  listCommentsController,
  listCommentsForOneAdController,
  updateCommentController,
} from "../controllers/comments.controller";

const routes = Router();

const commentsRoutes = () => {
  routes.post("/", authTokenMiddleware, createCommentController);
  routes.get("/", listCommentsController);
  routes.get("/:id", listCommentsForOneAdController);
  routes.patch("/:id", authTokenMiddleware, updateCommentController);
  routes.delete("/:id", authTokenMiddleware, deleteCommentController);

  return routes;
};

export default commentsRoutes;
