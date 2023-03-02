import { Request, Response } from "express";

import listCommentsService from "../services/comments/listComments.service";
import createCommentService from "../services/comments/createComment.service";
import updateCommentService from "../services/comments/updateComment.service";
import deleteCommentService from "../services/comments/deleteComment.service";
import listCommentsForOneAdService from "../services/comments/listCommentsForOneAd.service";

const createCommentController = async (req: Request, res: Response) => {
  const id = req.user.id;

  const data = { ...req.body, userId: id };
  const comment = await createCommentService(data);

  return res.status(201).json(comment);
};

const listCommentsController = async (req: Request, res: Response) => {
  const comments = await listCommentsService();

  return res.json(comments);
};

const listCommentsForOneAdController = async (req: Request, res: Response) => {
  const adId = req.params.id;
  const comments = await listCommentsForOneAdService(adId);
  return res.json(comments);
};

const updateCommentController = async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user.id;
  const commentId = req.params.id;

  const comment = await updateCommentService(data, userId, commentId);

  return res.json(comment);
};

const deleteCommentController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const commentId = req.params.id;

  await deleteCommentService(userId, commentId);

  return res.status(204).send();
};

export {
  createCommentController,
  listCommentsController,
  listCommentsForOneAdController,
  updateCommentController,
  deleteCommentController,
};
