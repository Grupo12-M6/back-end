import dataSource from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { AppError } from "../../errors/appError"

const deleteCommentService = async (
  userId: string,
  commentId: string
): Promise<void> => {
  const commentRepository = dataSource.getRepository(Comment)

  const comment = await commentRepository.findOne({
    where: { id: commentId },
    relations: { user: true },
  })

  if (!comment) {
    throw new AppError("Comment does not exist", 404)
  }

  if (userId !== comment.user.id) {
    throw new AppError("Denied access", 401)
  }

  await commentRepository.delete(commentId)

}

export default deleteCommentService