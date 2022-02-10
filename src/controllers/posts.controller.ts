import { Router, Request, Response } from "express";
import { Service } from "typedi";
import { PostService } from "../services/posts.service";

@Service()
export class PostController {
  public router = Router();

  constructor(private readonly postService: PostService) {
    // Initialize the routes in here, like this
    this.router.get("/all", this.all);
    this.router.get("/post/user/:id", this.oneByUserId);
    this.router.post("/", this.create);
  }

  all = async (req: Request, res: Response) => {
    res.send(await this.postService.all());
  };

  oneByUserId = async (req: Request, res: Response) => {
    const id: string = req.params.id.toString();
    res.send(await this.postService.oneByArgs({ userId: id }));
  };

  create = async (req: Request, res: Response) => {
    const saveItem = req.body;
    res.send(await this.postService.create(saveItem));
  };
}
