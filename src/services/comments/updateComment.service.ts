import dataSource from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { AppError } from "../../errors/appError"
import { ICommentUpdate } from "../../interfaces/comments"

const updateCommentService = async (
  data: ICommentUpdate,
  userId: string,
  commentId: string
): Promise<Comment> => {
  const commentRepository = dataSource.getRepository(Comment)

  const comment = await commentRepository.findOne({
    where: { id: commentId },
    relations: { user: true, ad: true },
  })

  if (!comment) {
    throw new AppError("Comment does not exist", 404)
  }

  if (userId !== comment.user.id) {
    throw new AppError("Denied access", 401)
  }

  await commentRepository.update(commentId, {
    ...data,
  })

  const updatedComment = await commentRepository.findOne({
    where: { id: commentId },
    relations: { user: true },
  })

  return updatedComment
}

export default updateCommentService
