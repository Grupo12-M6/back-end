import dataSource from "../../data-source"
import { Comment } from "../../entities/comment.entity"

export const listCommentsService = async (): Promise<Comment[]> => {
  const commentRepository = dataSource.getRepository(Comment)
  const comments = await commentRepository.find({
    relations: { ad: true, user: true },
  })

  return comments
}
