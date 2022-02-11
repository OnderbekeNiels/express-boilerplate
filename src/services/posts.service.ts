import { Service } from "typedi";
import { EntityRepository, MongoRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { PostInput } from "../dto/Post.dto";
import { Post } from "../entity/Posts";
import { UserRepository } from "./users.service";
import elastic from "elasticsearch";

@EntityRepository(Post)
export class PostRepository extends MongoRepository<Post> {}

@Service()
export class PostService {
  elasticClient = elastic.Client({ host: "localhost:9200" });

  constructor(
    @InjectRepository()
    private readonly postRepository: PostRepository,
    @InjectRepository()
    private readonly userRepository: UserRepository
  ) {}

  all = async () => {
    const posts = await this.postRepository.find();
    return await this.addAuthorToPosts(posts);
  };

  oneByArgs = async (args: Object) => {
    return await this.postRepository.findOne({ where: args });
  };

  create = async (post: PostInput) => {
    // ! add to es
    await this.elasticClient
      .index({
        index: "posts",
        body: post,
      })
      .then((resp) => post)
      .catch((err) => {
        throw err;
      });
    // ! add to db and return
    return await this.postRepository.save(post);
  };

  addAuthorToPosts = async (posts: Post[]): Promise<Post[]> => {
    const result: Post[] = [];
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < posts.length; i++) {
        const user = await this.userRepository.findOne(posts[i].userId);
        posts[i].author = user;
        result.push(posts[i]);
      }
      resolve(result);
    });
  };

  search = async (search: any) => {
    let query: { index: string; q?: string } = {
      index: "posts",
    };
    if (search) query.q = `*${search}*`;
    return await this.elasticClient
      .search(query)
      .then((resp) => {
        return resp.hits.hits;
      })
      .catch((err) => {
        throw err;
      });
  };
}
