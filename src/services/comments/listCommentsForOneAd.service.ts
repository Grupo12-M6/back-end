import dataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";

const listCommentsForOneAdService = async (adId: string): Promise<any> => {
  const commentRepository = dataSource.getRepository(Comment);
  const adSearch = await commentRepository.find({
    where: {
      ad: {
        id: adId,
      },
    },
    relations: { ad: true, user: true },
  });

  //   const comments = await commentRepository.find({
  //     relations: { ad: true, user: true },
  //   });
  //   console.log(adSearch);
  //   const comments = await commentRepository.find({
  //     relations: { ad: true, user: true },
  //   });

  return adSearch;
};

export default listCommentsForOneAdService;
