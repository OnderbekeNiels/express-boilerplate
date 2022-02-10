import { Service } from "typedi";
import { EntityRepository, MongoRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserInput } from "../dto/User.dto";
import { User } from "../entity/Users";

@EntityRepository(User)
export class UserRepository extends MongoRepository<User> {}

@Service()
export class UserService {
  constructor(
    @InjectRepository()
    private readonly userRepository: UserRepository
  ) {}

  all = async () => {
    return await this.userRepository.find();
  };

  create = async (user: UserInput) => {
    return await this.userRepository.save(user);
  };
}
