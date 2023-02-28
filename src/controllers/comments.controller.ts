import { listCommentsService } from './../services/comments/listComments.service';
import { Request, Response } from "express"
import createCommentService from "../services/comments/createComment.service"

const createCommentController = async (req: Request, res: Response) => {
  const id = req.user.id

  const data = {...req.body, userId: id}
  const comment = await createCommentService(data)

  return res.status(201).json((comment))
}

const listCommentsController = async (req: Request, res: Response) => {
    const comments = await listCommentsService();
  
    return res.json(comments);
  };

export {createCommentController, listCommentsController}