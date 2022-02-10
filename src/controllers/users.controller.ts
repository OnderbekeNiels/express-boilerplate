import { Router, Request, Response } from "express";
import { Service } from "typedi";
import { UserService } from "../services/users.service";

@Service()
export class UserController {
  public router = Router();

  constructor(private readonly userService: UserService) {
    // Initialize the routes in here, like this
    this.router.get("/all", this.all);
    this.router.post("/", this.create);
  }

  all = async (req: Request, res: Response) => {
    res.send(await this.userService.all());
  };

  create = async (req: Request, res: Response) => {
    const saveItem = req.body;
    res.send(await this.userService.create(saveItem));
  };
}
