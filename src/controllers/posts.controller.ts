import { Router, Request, Response } from "express";
import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { PostService } from "../services/posts.service";

@Service()
export class PostController {
  public router = Router();

  constructor(private readonly postService: PostService) {
    // Initialize the routes in here, like this
    this.router.get("/all", this.all);
  }

  all = async (req: Request, res: Response) => {
    res.send(await this.postService.all());
  };
}
