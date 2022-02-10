import { Service } from "typedi";
import { EntityRepository, MongoRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Post } from "../entity/Posts";

@EntityRepository(Post)
export class PostRepository extends MongoRepository<Post> {}

@Service()
export class PostService {
  constructor(
    @InjectRepository()
    private readonly postRepository: PostRepository
  ) {}

  all = async () => {
    return await this.postRepository.find();
  };
}
