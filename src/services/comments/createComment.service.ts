import dataSource from "../../data-source"
import { Ad } from "../../entities/ad.entity"
import { User } from "../../entities/user.entity"
import { Comment } from "../../entities/comment.entity"
import { ICommentRequest } from "../../interfaces/comments"

const createCommentService = async ({
  content,
  adId,
  userId,
}: ICommentRequest): Promise<Comment> => {
  const commentRepository = dataSource.getRepository(Comment)
  const userRepository = dataSource.getRepository(User)
  const adRepository = dataSource.getRepository(Ad)

  const user = await userRepository.findOneBy({ id: userId })
  const ad = await adRepository.findOneBy({ id: adId })
  
  const newComment = commentRepository.create({
    content,
    ad: ad!,
    user: user!,
  })

  await commentRepository.save(newComment)

  return newComment
}

export default createCommentService