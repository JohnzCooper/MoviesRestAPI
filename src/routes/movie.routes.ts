import { Router } from "express";
import { MovieController } from "../movie.controller";

export class MovieRoutes {
    public router = Router();

    constructor(private movieController: MovieController) {
        this.setRoutes();
    }

    public setRoutes() {
        this.router.route("/").get(this.movieController.findAll).post(this.movieController.add);
        this.router.route("/:id").delete(this.movieController.delete).put(this.movieController.update);
      }
}